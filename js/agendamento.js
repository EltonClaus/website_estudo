// Import the functions you need from the SDKs you need
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
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const agendamento = {
  init() {
    // this.firebase();
    let nome = document.querySelector("#nome");
    let sobrenome = document.querySelector("#sobrenome");
    let email = document.querySelector("#email");
    let tel = document.querySelector("#tel");
    let date = document.querySelector("#date");
    let especialista = document.querySelector("#especialista");
    this.populaTabela(nome, sobrenome, email, tel, date, especialista);
  },

  populaTabela(nome, sobrenome, email, tel, date, especialista) {
    let preview = document.querySelector(".container_preview");
    document.querySelector("#btnConf").addEventListener("click", () => {
      //Validate DateTime
      let dateNow = new Date(date.value);
      const options = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      //Change Checked Radio Buttons
      let radioButtons = document.querySelectorAll('input[name="plano"]');
      let selected;
      for (let radioButton of radioButtons) {
        if (radioButton.checked) {
          selected = radioButton.value;
          break;
        }
      }
      if (
        nome.value == "" ||
        sobrenome.value == "" ||
        email.value == "" ||
        tel.value == "" ||
        date.value == "" ||
        especialista == "" ||
        selected == ""
      ) {
        alert("Preencher Todos o Campos");
      } else {
        //Render Information
        preview.innerHTML += `
        <div class="render">
          <h4>Nome: ${nome.value}</h4>
          <h4>Sobrenome: ${sobrenome.value}</h4>
          <h4>E-mail: ${email.value}</h4>
          <h4>Telefone: ${tel.value}</h4>
          <h4>Data e Hora: ${dateNow.toLocaleString("pt-BR", options)}</h4>
          <h4>Especialista: ${especialista.value}</h4>
          <h4>Plano: ${selected}</h4>
          <button id="btnConfirmar">Confirmar</button>
        </div>  
        `;
      }

      // Your web app's Firebase configuration
      const firebaseConfig = {
        apiKey: "AIzaSyDlm9jZIEWhUfw4qSKyO_NPfP35ouAuZbE",
        authDomain: "websitestudy.firebaseapp.com",
        projectId: "websitestudy",
        storageBucket: "websitestudy.appspot.com",
        messagingSenderId: "152102380529",
        appId: "1:152102380529:web:84a05058be863808eb5a50",
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);

      // // Initialize Cloud Firestore and get a reference to the service
      const db = getFirestore(app);
      console.log("estou aqui");

      //Saved in FireBase DB
      document.querySelector("#btnConfirmar").addEventListener("click", () => {
        addDoc(collection(db, "agendamentos"), {
          nome: nome.value,
          sobrenome: sobrenome.value,
          email: email.value,
          tel: tel.value,
          dateTime: date.value,
          especialista: especialista.value,
          plano: selected,
        });
        alert("Agendamento Realizado");
      });
    });
  },
};
agendamento.init();

const consultaAgendamento = {
  start() {
    console.log("teste se entrou na consulta");
  },
}
consultaAgendamento.start();