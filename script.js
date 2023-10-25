console.log('loaded')

const rootElement = document.querySelector("#root")
console.log(rootElement)

rootElement.innerHTML = "sziasztok"

const countryHtml = (countryName, countryPop) => `
    <h2>country name: ${countryName}</h2>
    <h3>country pop: ${countryPop}</h3>
`

async function init() { // felkészítjük a js-t, hogy a függvényben lesznek aszinkron kódok
    const response = await fetch("https://restcountries.com/v3.1/all") // megvárjuk a fetch válaszát (promise helyett)
    const data = await response.json() // megvárjuk, hogy a response megjöjjön (promise helyett) -> itt lesz elérhető az adatunk
    console.log(data)

    data.forEach(country => console.log(countryHtml(country.name.common, country.population)))
}

init()