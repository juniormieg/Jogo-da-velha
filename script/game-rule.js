const currentPlayer = document.querySelector(".player");
const contadorEmpate = document.querySelector(".empate");
let selected;
let player = "X";
let vencedorO = 0;
let vencedorX = 0;
let empate = 0;
const contadorX = document.querySelector(".contadorX");
const contadorY = document.querySelector(".contadorY");

let positions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function init() {
  selected = [];

  currentPlayer.innerHTML = `turno do: ${player}`;

  document.querySelectorAll(".btn-game").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", newMove);
  });
}

init();

function newMove(e) {
  const index = e.target.getAttribute("data-i");
  e.target.innerHTML = player;
  e.target.removeEventListener("click", newMove);
  selected[index] = player;

  setTimeout(() => {
    check();
  }, [100]);

  player = player === "X" ? "O" : "X";
  currentPlayer.innerHTML = `turno do: ${player}`;
}
function exibeModalVitoria(vencedor) {
  const modal = document.getElementById("tela-de-vitoria");
  const mensagem = `o jogador ${vencedor} venceu!`;

  modal.querySelector("p").textContent = mensagem;
  modal.style.display = "block";
}
function exibeModalEmpate() {
  const modal = document.getElementById("tela-de-vitoria");
  const mensagem = `Foi um Empate!!`;

  modal.querySelector("p").textContent = mensagem;
  modal.style.display = "block";
}

function fecharModal() {
  const modal = document.getElementById("tela-de-vitoria");
  modal.style.display = "none";
}

function check() {
  let playerLastMove = player === "X" ? "O" : "X";

  const items = selected
    .map((item, i) => [item, i])
    .filter((item) => item[0] === playerLastMove)
    .map((item) => item[1]);

  for (pos of positions) {
    if (pos.every((item) => items.includes(item))) {
      exibeModalVitoria(playerLastMove);
      if (playerLastMove === "X") {
        vencedorX++;
        contadorX.textContent = "Rodadas vencidas por X: " + vencedorX;
      }
      if (playerLastMove === "O") {
        vencedorO++;
        contadorY.textContent = "Rodadas vencidas por O: " + vencedorO;
      }
      init();
      return;
    }
  }

  if (selected.filter((item) => item).length === 9) {
    exibeModalEmpate();
    empate++;
    contadorEmpate.textContent = "Empates: " + empate;
    init();
    return;
  }
}
