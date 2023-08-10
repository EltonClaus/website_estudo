const login = {
  start() {
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value
    this.validateLogin(email, password)
    this.registerUser();
  },
  validateLogin(email, password) {
      document.querySelector("#btnLogin").addEventListener('click', () => {
          window.location.href = "../pages/agendamento.html" 
      });
    
  },
  registerUser() {
    let renderModal = document.querySelector(".render");
    document.querySelector("#register").addEventListener('click', () => {
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
            <button>Cadastrar</button>
            <button id="btnBack">Voltar</button>
          </div>
        `
        document.querySelector("#btnBack").addEventListener('click', () => {
           alert("alô atenção")
        })
     
      });
  },
}

login.start()