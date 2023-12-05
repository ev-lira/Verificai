document.addEventListener('DOMContentLoaded', function () {
  carregarUsuarios();

  document.getElementById('cadastroForm').addEventListener('submit', function (event) {
      event.preventDefault();
      cadastrarUsuario();
  });
});

function cadastrarUsuario() {

  carregarUsuarios();
}

function carregarUsuarios() {
  var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];


  var listaUsuarios = document.getElementById('listaUsuarios');


  listaUsuarios.innerHTML = '';


  usuarios.forEach(function (usuario) {
      var itemLista = document.createElement('li');
      itemLista.textContent = usuario.nome + ' - ' + usuario.email;
      listaUsuarios.appendChild(itemLista);
  });
}


