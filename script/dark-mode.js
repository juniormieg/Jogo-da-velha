const darkMode = document.querySelector(".btn-dark-mode");
const corpo = document.querySelector(".body");

function alteracaoDoTema() {
  darkMode.onclick = function () {
    corpo.classList.toggle("dark-mode");
    darkMode.classList.toggle("btn-ligth-mode");
  };
}

alteracaoDoTema();
