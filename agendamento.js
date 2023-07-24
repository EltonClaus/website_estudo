const agendamento = {
  initi() {
    let nome = document.querySelector("#nome");
    let sobrenome = document.querySelector("#sobrenome");
    let email = document.querySelector("#email");
    let tel = document.querySelector("#tel");
    let date = document.querySelector("#date");
    let specialist = document.querySelector("#especialista");
    this.populaTabela(nome, sobrenome, email, tel, date, specialist);
  },
  populaTabela(nome, sobrenome, email, tel, date, specialist) {
    let preview = document.querySelector(".container_preview");
    document.querySelector("#btnConf").addEventListener("click", () => {
      let radioButtons = document.querySelectorAll('input[name="plano"]');
      let selected;
      for (let radioButton of radioButtons) {
        if (radioButton.checked) {
          selected = radioButton.value;
          break;
        }
      };

      preview.innerHTML += `
      <div class="render">
        <h4>Nome: ${nome.value}</h4>
        <h4>Sobrenome: ${sobrenome.value}</h4>
        <h4>E-mail: ${email.value}</h4>
        <h4>Telefone: ${tel.value}</h4>
        <h4>Data e Hora: ${date.value}</h4>
        <h4>Especialista: ${specialist.value}</h4>
        <h4>${selected}</h4>
        <button>Confirmar</button>
      </div>  
      `;
    });
  },
};
agendamento.initi();
