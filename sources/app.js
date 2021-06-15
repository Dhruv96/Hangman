let puzzle1;
window.addEventListener("keypress", function(e) {
  const guess = String.fromCharCode(e.charCode);
  puzzle1.makeGuess(guess);
  puzzle1.generateDoms();
});

fetchPuzzle(2).then(
  puzzle => {
    puzzle1 = new Hangman(puzzle, 5);
    puzzle1.generateDoms();
  },
  err => {
    console.log(`Error: ${err}`);
  }
);

const startGame = async () => {
  const puzzle = await fetchPuzzle(2);
  puzzle1 = new Hangman(puzzle, 5);
  puzzle1.generateDoms();
};

const render = () => {
  puzzle1.generateDoms();
};

document.querySelector("#reset").addEventListener("click", startGame);

//const countryCode = "IN";

// fetchCountry(countryCode)
//   .then(country => {
//     console.log(`Country name: ${country.name}`);
//   })
//   .catch(err => {
//     console.log(`Error: ${err}`);
//   });

// getLocation()
//   .then(location => {
//     return fetchCountry(location.country);
//   })
//   .then(country => {
//     console.log(`Country name: ${country.name}`);
//   }).catch(err => {
//     console.log(``)
//   })

// getCurrentCountry()
//   .then(country => {
//     console.log(`Current country: ${country.name}`);
//   })
//   .catch(err => {
//     console.log(`Error: ${err}`);
//   });

// getLocation()
//   .then(country => {
//     console.log(`Country Name: ${country.name}`);
//   })
//   .catch(err => {
//     console.log(err);
//   });
