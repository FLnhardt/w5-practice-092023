/*import * as fs from 'node:fs'; // ES6 szintaktika, kell hozzá a package.json-ben "type": "module"
//const fs = require('fs') // ugyanolyan importálás, mint a felette lévő sor <- commonJS szintaktika

/* try {
  const data = fs.readFileSync('text.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error('Error reading the file:', err);
} */
/* try {
  const data = fs.readFileSync('data.json', 'utf8');
  const jsonData = JSON.parse(data);
  console.log(jsonData);
} catch (err) {
  console.error('Error reading or parsing the JSON file:', err);
} */


/* fs.readFile('text.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  console.log(data);
}); */

/*fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the JSON file:', err);
    return;
  }
  
  try {
    const jsonData = JSON.parse(data);
    console.log(jsonData);
  } console.log('loaded')

/*const rootElement = document.querySelector("#root")
console.dir(rootElement)

const countryComponent = (country) => `
    <div class="country">
        <h2>country name: ${country.name.common}</h2>
        <h3>country pop: ${country.population}</h3>
    </div>
`

async function init() { // felkészítjük a js-t, hogy a függvényben lesznek aszinkron kódok
    const response = await fetch("https://restcountries.com/v3.1/all") // megvárjuk a fetch válaszát (promise helyett)
    const data = await response.json() // megvárjuk, hogy a response megjöjjön (promise helyett) -> itt lesz elérhető az adatunk

    data.forEach(country => rootElement.insertAdjacentHTML("beforeend", countryComponent(country)))
}

init()catch (err) {
    console.error('Error parsing the JSON data:', err);
  }
});*/


console.log('loaded')

const rootElement = document.querySelector("#root")
console.dir(rootElement)

const countryComponent = (country) => `
    <div class="country">
        <h2>country name: ${country.name.common}</h2>
        <h3>country pop: ${country.population}</h3>
    </div>
`

async function init() { // felkészítjük a js-t, hogy a függvényben lesznek aszinkron kódok
    const response = await fetch("https://restcountries.com/v3.1/all") // megvárjuk a fetch válaszát (promise helyett)
    const data = await response.json() // megvárjuk, hogy a response megjöjjön (promise helyett) -> itt lesz elérhető az adatunk

    data.forEach(country => rootElement.insertAdjacentHTML("beforeend", countryComponent(country)))
}

init()