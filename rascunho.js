function () {
    carregarCadastro();
  };
  
  function cadastrarLogin() {
    var nome = document.getElementById("Nome Completo").value;
    var email = document.getElementById("Endereço de Email").value;
    var senha = document.getElementById("Senha").value;
  
    if (nome && email && senha) {
      var novoLogin = {
        Nome: nome
        Endereço de Email: email,
        Senha: senha,
      };
  
      // Salva a vaga no localStorage
      salvarLogin(novoLogin);
  
      // Adiciona a vaga à lista na interface
      adicionarCadastroNaLista(novoLogin);
  
      // Limpa o formulário após o cadastro
      document.getElementById("nome").value = "";
      document.getElementById("email").value = "";
      document.getElementById("senha").value = "";
    } else {
      alert("Preencha todos os campos do formulário.");
    }
  }
  
  function adicionarCadastroNaLista(Cadastros) {
    var listaCadastros = document.getElementById("listaCadastros");
    var novoLogin = document.createElement("li");
    novoLogin.innerHTML = `<strong>${nome.email.senha}</strong>: ${nome.email.senha}`;
    listaCadastros.appendChild(novoLogin);
  }
  
  function salvarLogin(Cadastros) {
    // Recupera as vagas salvas no localStorage
    var CadastrosSalvos = JSON.parse(localStorage.getItem("Cadastros")) || [];
  
    // Adiciona a nova vaga à lista de vagas
    CadastrosSalvos.push(Cadastros);
  
    // Salva a lista atualizada no localStorage
    localStorage.setItem("Cadastros", JSON.stringify(CadastrosSalvos));
  }
  
  function carregarCadastrosSalvos() {
    // Recupera as vagas salvas no localStorage
    var CadastrosSalvos = JSON.parse(localStorage.getItem("Cadastros")) || [];
  
    // Adiciona as vagas à lista na interface
    CadastrosSalvos.forEach(adicionarVagaNaLista(Cadastros));
  }
  
