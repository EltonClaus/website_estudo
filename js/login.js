import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlm9jZIEWhUfw4qSKyO_NPfP35ouAuZbE",
  authDomain: "websitestudy.firebaseapp.com",
  projectId: "websitestudy",
  storageBucket: "websitestudy.appspot.com",
  messagingSenderId: "152102380529",
  appId: "1:152102380529:web:84a05058be863808eb5a50",
};

const login = {
  start() {
    console.log("ola");
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    this.loginUsers(email, password, firebaseConfig);
  },
  loginUsers(email, password, firebaseConfig) {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);
    console.log("estou aqui");

    //Get in FireBase Docs
    document.querySelector("#btnLogin").addEventListener("click", () => {
      getDocs(collection(db, "user"), {
        email: email,
        password: password,
      });
      alert("Login Realizado");
    });
  },
};
login.start();

//Save DB new users
const newUser = {
  init() {
    console.log("aqui");
    this.registerNewUsers();
  },
  registerNewUsers() {
    let renderModal = document.querySelector(".render");
    document.querySelector("#register").addEventListener("click", () => {
      renderModal.innerHTML += `
          <div class="modal">
            <h2>Cadastro de Novo Usuário</h2>
            <label for="nomeCad">Nome</label>
            <input type="text" id="nomeCad" name="nomeCad" />
            <label for="sobreNomeCad">Sobrenome</label>
            <input type="text" id="sobreNomeCad" name="sobreNomeCad" />
            <label for="emailCad">Email</label>
            <input type="text" id="emailCad" name="emailCad" />
            <label for="telCad">Telefone</label>
            <input type="text" id="telCad" name="telCad" />
            <label for="passCad">Senha</label>
            <input type="passCad" id="passCad" name="passCad" />
            <label for="passCadConf">Digite a senha Novamente</label>
            <input type="passCadConf" id="passCadConf" name="passCadConf" />
            <p id="verifPass"></p>
            <button id="btnCad">Cadastrar</button>
            <button id="btnBack">Voltar</button>
          </div>
        `;
      let name = document.querySelector("#nomeCad").value;
      let lastname = document.querySelector("#sobreNomeCad").value;
      let email = document.querySelector("#emailCad").value;
      let telefone = document.querySelector("#telCad").value;
      let password = document.querySelector("#passCadConf").value;

      const auth = getAuth();
      createUserWithEmailAndPassword(
        auth,
        name,
        lastname,
        email,
        telefone,
        password
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });

      document.querySelector("#btnBack").addEventListener("click", () => {
        let modal = document.querySelector(".modal");
        modal.remove();
      });
    });
  },
};
newUser.init();
console.log("aqui fora");
