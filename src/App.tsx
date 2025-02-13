import { useEffect, useState } from 'react'
import { auth } from "./firebase-config";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { TextEditor } from './components/TextEditor';

function App() {
  useEffect(() => {
    signInAnonymously(auth);
    onAuthStateChanged(auth, user => {
      if (user) {
        console.log("User signed in:", user.uid);
      }
    });
  }, []);
  return (
    <div className="App">
      <header>
        <h1>Collab Docs</h1>
      </header>
      <TextEditor/>




      <footer className="footer">
        <p>
          Made with ❤️ by{" "}
          <a
            href="https://github.com/saidhanush27"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sai Dhanush VR
          </a>
        </p>
      </footer>
    </div>




  )
}


export default App
