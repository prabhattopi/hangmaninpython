let word = "hangman";

let guesses = [];

let allowedErrors = 7;

let done = false;
let khaliArray = new Array(word.length).fill("_");
while (!done) {
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < guesses.length; j++) {
      if (word[i].toLowerCase() === guesses[j].toLowerCase()) {
        khaliArray[i] = word[i].toLowerCase();
      }
    }
  }
  console.log(khaliArray.join(" "));
  console.log("");

  let guess = prompt(`Allowed Errros left ${allowedErrors},Another Guesses: `);
  guesses.push(guess.toLowerCase());
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (guess.toLowerCase() === word[i]) {
      count++;
    }
  }
  if (count == 0) {
    allowedErrors--;
    if (allowedErrors === 0) {
      break;
    }
  }

  done = true;
  for (let j = 0; j < word.length; j++) {
    let count2 = 0;
    for (let i = 0; i < guesses.length; i++) {
      if (word[j].toLowerCase() !== guesses[i]) {
        count2++;
      }
    }
    if (count2 == guesses.length) {
      done = false;
      break;
    }
  }
}

if (done) {
  document.getElementById(
    "word"
  ).innerText = `You find the word! it was ${word}`;
} else {
  document.getElementById(
    "word"
  ).innerText = `Game over You died! The word was ${word}`;
}
