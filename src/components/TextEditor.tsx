import { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { db } from "../firebase-config";
import { setDoc, doc, getDoc, onSnapshot } from "firebase/firestore";
import "../App.css";
import "react-quill/dist/quill.snow.css";
import { throttle } from "lodash";

export const TextEditor = () => {
  const quillRef = useRef<any>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const isLocalChange = useRef(false);

  // 🛠 FIX: Ensure `db` is used correctly
  if (!db) {
    console.error("Firestore (db) is undefined. Check firebase-config.ts!");
    return null;
  }

  const documentRef = doc(db, "documents", "sample-doc");

  // 🛠 FIX: Ensure `throttle` function is used correctly
  const saveContent = throttle(() => {
    if (quillRef.current) {
      const content = quillRef.current.getEditor().getContents();
      console.log("Saving content to Firestore:", content);

      setDoc(documentRef, { content: content.ops }, { merge: true })
        .then(() => console.log("Content saved successfully"))
        .catch(console.error);

      isLocalChange.current = false;
    }
  }, 1000);

  useEffect(() => {
    if (!quillRef.current) return;
    const editor = quillRef.current.getEditor();

    // Load initial content
    getDoc(documentRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          const savedContent = docSnap.data().content;
          if (savedContent) {
            editor.setContents(savedContent);
          }
        } else {
          console.log("No document found, starting with empty editor.");
        }
      })
      .catch(console.error);

    // Listen to Firestore updates
    const unsubscribe = onSnapshot(documentRef, (snapshot) => {
      if (snapshot.exists()) {
        const newContent = snapshot.data().content;

        if (!isEditing) {
          const currentCursorPosition = editor.getSelection()?.index || 0;
          editor.setContents(newContent, "silent");
          editor.setSelection(currentCursorPosition);
        }
      }
    });

    // Listen for local text changes
    editor.on("text-change", (delta: any, oldDelta: any, source: any) => {
      if (source === "user") {
        isLocalChange.current = true;
        setIsEditing(true);
        saveContent();

        setTimeout(() => setIsEditing(false), 5000);
      }
    });

    return () => {
      unsubscribe();
      editor.off("text-change");
    };
  }, []);

  return (
    <div className="google-docs-editor">
      <ReactQuill ref={quillRef} />
    </div>
  );
};

