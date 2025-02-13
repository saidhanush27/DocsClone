# Google Docs Clone -- CollabDocs 📝  

A real-time collaborative text editor built using **React (Vite), TypeScript, Firebase Firestore, and React Quill**. This project allows users to edit and save text documents seamlessly, similar to Google Docs.  

---

## 🚀 Features  

✅ **Rich Text Editing** using React Quill  
✅ **Real-time Syncing** with Firebase Firestore  
✅ **Auto-save functionality** (Throttle-based to prevent excessive writes)  
✅ **Anonymous Authentication** using Firebase  
✅ **TypeScript Support** for better type safety  
✅ **Dark-themed UI** with improved visibility  
✅ **Custom Styling** for a unique look  

---

## 🛠️ Technologies Used  

| **Technology**  | **Purpose** |
|---------------|-------------|
| **React (Vite)** | Frontend framework for fast UI updates |
| **TypeScript** | Adds static typing to prevent runtime errors |
| **Firebase Firestore** | NoSQL database for real-time syncing |
| **Firebase Auth** | Used for anonymous user authentication |
| **React Quill** | Rich-text editor for document editing |
| **Lodash (Throttle)** | Prevents excessive API calls while saving |
| **CSS** | Custom styling for a unique UI |

---

## OUTPUT SCREENSHOTS:
[IMAGES]()



## 🏗️ Installation & Setup  

### 1️⃣ Clone this repository  
```sh
git clone https://github.com/SaiDhanushVR/google-docs-clone.git
cd google-docs-clone
 ```
### 2️⃣ Install dependencies
```sh
Copy
Edit
npm install
 ```
### 3️⃣ Set Up Firebase
Create a Firebase project at Firebase Console<br>
Enable Firestore Database and Anonymous Authentication<br>
Get your Firebase config and add it to  ```firebase-config.ts```<br>

```sh
// firebase-config.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
 ```


###  4️⃣ Start Development Server
```sh
Copy
Edit
npm run dev
Your app will be live at http://localhost:5173/ 🚀
 ```

 
### 5️⃣🖥️ Deployment
To deploy your app:

Build the project
```sh
Copy
Edit
npm run build
 ```

### Deploy to Vercel (recommended)
  ```sh
Copy
Edit
npm install -g vercel
```


 ### 🛠️ Improvements for Future
✅ Multi-user collaboration<br>
✅ User authentication (Google Login)<br>
✅ Document version history<br>
✅ Export to PDF<br>




### 👨‍💻 Author
Sai Dhanush VR<br>
🔗 GitHub: Saidhanush27<br>
📧 Email: sai2003vr@gmail.com<br>
⭐ If you found this project helpful, consider giving it a star on GitHub!<br>

---

This README includes everything: **setup, Firebase configuration, project structure, deployment, and future improvements**. 🎯  <br>

Let me know if you want any modifications! 🚀


