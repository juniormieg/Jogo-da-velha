const darkMode = document.querySelector(".btn-dark-mode");
const corpo = document.querySelector(".body");
const modal = document.querySelector(".conteudo-do-modal");

function alteracaoDoTema() {
  darkMode.onclick = function () {
    corpo.classList.toggle("dark-mode");
    darkMode.classList.toggle("btn-ligth-mode");
    modal.classList.toggle("conteudo-do-modal-dark-mode");
  };
}

alteracaoDoTema();
