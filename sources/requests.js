// const fetchPuzzle = (wordCount) => new Promise((resolve, reject) => {
//   let request = new XMLHttpRequest()
//   request.addEventListener("readystatechange",function(e){
//     if ((e.target.readyState === 4) && (e.target.status === 200))
//     {
//       let data = JSON.parse(e.target.responseText)
//       resolve(data)
//     }
//     else if (e.target.readyState === 4)
//     {
//       reject("An error has taken place")
//     }
//   })

//   request.open("GET",`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//   request.send()
// })

// const fetchPuzzle = wordCount =>
//   fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     .then(response => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error("Unable to fetch puzzle");
//       }
//     })
//     .then(data => {
//       return data.puzzle;
//     })
//     .catch(err => {
//       console.log(`Error: ${err}`);
//     });

const fetchPuzzle = async wordCount => {
  const response = await fetch(
    `//puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );
  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error("Unable to Fetch");
  }
};

// const fetchCountry = countryCode =>
//   new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener("readystatechange", e => {
//       if (e.target.readyState === 4 && e.target.status === 200) {
//         let data = JSON.parse(e.target.responseText);
//         let country = data.find(country => country.alpha2Code === countryCode);
//         resolve(country);
//       } else if (e.target.readyState === 4) {
//         reject("There was an error");
//       }
//     });
//     request.open("GET", "http://restcountries.eu/rest/v2/all");
//     request.send();
//   });

// const fetchCountry = countryCode =>
//   fetch("http://restcountries.eu/rest/v2/all")
//     .then(response => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error("Unable to fetch countries.");
//       }
//     })
//     .then(countries => {
//       return countries.find(country => countryCode === country.alpha2Code);
//     })
//     .catch(e => {
//       console.log(`Error: ${e}`);
//     });

const fetchCountry = async countryCode => {
  const response = await fetch("//restcountries.eu/rest/v2/all");
  if (response.status === 200) {
    const countries = await response.json();
    return countries.find(country => countryCode === country.alpha2Code);
  } else {
    throw new Error("Unable to fetch data");
  }
};

const getLocation = async () => {
  const response = await fetch("//ipinfo.io/json?token=1a11bd55cc8f9c");
  if (response.status === 200) {
    const loc = await response.json();
    // let country = await fetchCountry(loc.country);
    return fetchCountry(loc.country);
  } else {
    throw new Error("Unable to fetch location.");
  }
};

// const getCurrentCountry = async () => {
//   const resp = await fetch("http://ipinfo.io/json?token=1a11bd55cc8f9c");
//   if (resp.status === 200) {
//     const location = await resp.json();
//     let countryCode = location.country;
//     let resp2 = await fetch("http://restcountries.eu/rest/v2/all");
//     if (resp2.status === 200) {
//       let countries = await resp2.json();
//       return countries.find(country => countryCode === country.alpha2Code);
//     }
//   }
// };
