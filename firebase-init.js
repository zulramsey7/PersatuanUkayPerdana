// Import fungsi-fungsi yang diperlukan dari SDK Firebase
import { 
    initializeApp 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getAuth, 
    signOut // Import fungsi signOut dari Auth
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { 
    getFirestore 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// KONFIGURASI FIREBASE ANDA
const firebaseConfig = {
    // PENTING: Untuk projek sebenar, gunakan .env variables di sini.
    apiKey: "AIzaSyB2UhuNMLXJe0oNry4ZII4-BHgofykRH4Q",
    authDomain: "persatuan-a0ad4.firebaseapp.com",
    databaseURL: "https://persatuan-a0ad4-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "persatuan-a0ad4",
    storageBucket: "persatuan-a0ad4.firebasestorage.app",
    messagingSenderId: "718589154422",
    appId: "1:718589154422:web:2d7c8caf0557bd19ed3b57",
    measurementId: "G-2VHE1NZLPZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);


/**
 * @function signOutUser
 * @description Melaksanakan log keluar pengguna dan menghalakan (redirect) ke halaman log masuk.
 */
const signOutUser = async () => {
    try {
        await signOut(auth);
        // PENTING: Halakan pengguna ke halaman log masuk (index.html) selepas log keluar berjaya
        window.location.href = "index.html"; 
    } catch (error) {
        console.error("Ralat semasa log keluar:", error);
        alert("Gagal log keluar. Sila cuba lagi.");
    }
};

// Eksport objek auth, db, dan fungsi signOutUser
export { 
    app, 
    auth,
    db,
    signOutUser 
};