//jshint esversion: 8

document.addEventListener("DOMContentLoaded", () => {

  const keys = document.querySelectorAll(".keyboard-row button");

  let guessedWords = [[]];
  let availableSpace = 1;

  const word = "dairy";
  let guessedWordCount = 0;

  function createSquares(){
    const gameBoard = document.getElementById("board");
    for (var i = 0; i < 30; i++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.classList.add("animate__animated");
      square.setAttribute("id", i+1);
      gameBoard.appendChild(square);
    }
  }
  createSquares();

  function getCurrentWordArr () {
    const numberOfGuessedWords = guessedWords.length;
    return guessedWords[numberOfGuessedWords-1];
  }

  function updateGuessedWords (letter) {
    const currentWordArr = getCurrentWordArr();
    if(currentWordArr && currentWordArr.length < 5){
      currentWordArr.push(letter);
      const availableSpacEl = document.getElementById(String(availableSpace));
      availableSpace = availableSpace + 1;
      availableSpacEl.textContent = letter;
    }
  }

  function handleSubmitWord () {
    const currentWordArr = getCurrentWordArr();
    if(currentWordArr.length !== 5){
      window.alert("Word must be 5 letters");
    }
    const currentWord = currentWordArr.join("");
    const firstLetterId = guessedWordCount*5+1;
    const interval = 200;
    currentWordArr.forEach((letter, index) => {
      setTimeout(() => {
        const tileColor = "rgb(58, 58, 60)";
        const letterId = firstLetterId + index;
        const letterEl = document.getElementById(letterId);
        letterEl.classList.add("animate__flipInX");
        letterEl.style = "background-color:"+tileColor+";border-color:"+tileColor+";";
      }, interval*index);
    });
    guessedWordCount+=1;
    if(currentWord === word){
      window.alert("Congratulations!");
    }
    if(guessedWords.length === 6){
      window.alert("Sorry, you have no more guesses! The word is: " + word);
    }
    guessedWords.push([]);

  }

  for (var i = 0; i < keys.length; i++) {
    keys[i].onclick = ({target}) => {
      const letter = target.getAttribute("data-key");
      console.log(letter);

      if(letter === "enter"){
        handleSubmitWord();
        return;
      }

      updateGuessedWords(letter);
    };
  }
});
