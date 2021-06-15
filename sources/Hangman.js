// const Hangman = function(word, remainingGuesses)
// {
//     this.word = word
//     this.remainingGuesses = remainingGuesses
//     this.guessedCharacters = []
//     this.status = "PLAYING"
// }

class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word;
    this.remainingGuesses = remainingGuesses;
    this.guessedCharacters = [];
    this.status = "PLAYING";
  }

  getPuzzle() {
    let puzzleStr = "";
    let wordCharacters = this.word.toLowerCase().split("");
    wordCharacters.forEach(char => {
      if (this.guessedCharacters.includes(char) || char == " ") {
        puzzleStr += char;
      } else {
        puzzleStr += "*";
      }
    });
    return puzzleStr;
  }

  makeGuess(guess) {
    if (this.status !== "PLAYING") {
      return;
    }
    let wordCharacters = this.word.toLowerCase().split("");
    if (this.guessedCharacters.includes(guess)) {
      return;
    } else {
      if (wordCharacters.includes(guess)) {
        this.guessedCharacters.push(guess);
      } else {
        this.guessedCharacters.push(guess);
        this.remainingGuesses -= 1;
      }
    }

    this.checkStatus();
    this.generateDoms();
  }

  generateDoms() {
    let para = document.querySelector("#puzzle");
    let guess = document.querySelector("#guess");
    let puzzleStr = this.getPuzzle();
    para.innerHTML = "";
    guess.textContent = this.getStatusMessage();

    let puzzleDiv = document.querySelector("#puzzle");
    puzzleStr.split("").forEach(letter => {
      let letterEl = document.createElement("span");
      letterEl.textContent = letter;
      puzzleDiv.appendChild(letterEl);
    });
  }

  checkStatus() {
    const wordArray = this.word.toLowerCase().split("");
    const finished = wordArray.every(
      letter => this.guessedCharacters.includes(letter) || letter === " "
    );
    if (this.remainingGuesses === 0) {
      this.status = "FAILED";
    } else if (finished) {
      this.status = "FINISHED";
    } else {
      this.status = "PLAYING";
    }
  }

  getStatusMessage() {
    if (this.status === "PLAYING") {
      return `Guesses left: ${this.remainingGuesses}`;
    } else if (this.status === "FINISHED") {
      return "Correct!!";
    } else {
      return `Nice Try!, the word was ${this.word}`;
    }
  }
}

// Hangman.prototype.getPuzzle = function() {
//     let puzzleStr = ""
//     let wordCharacters = this.word.toLowerCase().split("")
//     wordCharacters.forEach(char => {
//         if (this.guessedCharacters.includes(char) ||  char == " ")
//         {
//             puzzleStr += char
//         }
//         else
//         {
//             puzzleStr += "*"
//         }
//     })
//     return puzzleStr
// }

// Hangman.prototype.makeGuess = function(guess) {

//     if (this.status !== "PLAYING")
//     {
//         return
//     }
//     let wordCharacters = this.word.toLowerCase().split("")
//     if (this.guessedCharacters.includes(guess))
//     {
//         return
//     }
//     else
//     {
//        if (wordCharacters.includes(guess))
//        {
//            this.guessedCharacters.push(guess)
//        }
//        else
//        {
//            this.guessedCharacters.push(guess)
//            this.remainingGuesses -= 1
//        }
//     }

//     this.checkStatus()
//     this.generateDoms()
// }

// Hangman.prototype.generateDoms = function() {
//     let para = document.querySelector("#puzzle")
//     let guess = document.querySelector("#guess")
//     para.textContent = this.getPuzzle()
//     guess.textContent = this.getStatusMessage()
// }

// Hangman.prototype.checkStatus = function() {
//     let temp = 1
//     if (this.remainingGuesses === 0)
//     {
//         status = "FAILED"
//         console.log(status)
//     }
//     else
//     {
//         let str = this.getPuzzle().split("")
//         str.forEach(() => {
//             if (str.includes("*"))
//             {
//                 temp = 0
//                 status = "isPlaying"
//                 console.log(status)
//             }
//         })
//         if (temp === 1)
//         {
//             status = "COMPLETED"
//             console.log(status)
//         }
//     }
// }

// Hangman.prototype.checkStatus = function() {
//     const wordArray =  this.word.toLowerCase().split("")
//     const finished = wordArray.every((letter) => this.guessedCharacters.includes(letter))
//     if (this.remainingGuesses === 0)
//     {
//         this.status = "FAILED"
//     }
//     else if (finished)
//     {
//         this.status = "FINISHED"
//     }
//     else
//     {
//         this.status = "PLAYING"
//     }
// }

// Hangman.prototype.getStatusMessage = function()
// {
//     if (this.status === "PLAYING")
//     {
//         return `Guesses left: ${this.remainingGuesses}`
//     }
//     else if (this.status === "FINISHED")
//     {
//         return "Correct!!"
//     }
//     else
//     {
//         return `Nice Try!, the word was ${this.word}`
//     }
// }
