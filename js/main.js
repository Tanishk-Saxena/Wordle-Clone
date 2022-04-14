//jshint esversion: 6

document.addEventListener("DOMContentLoaded", () => {
  function createSquares(){
    const gameBoard = document.getElementById("board");
    for (var i = 0; i < 30; i++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute("id", i+1);
      gameBoard.appendChild(square);
    }
  }
  createSquares();
});
