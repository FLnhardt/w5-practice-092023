console.log('loaded')

const rootElement = document.querySelector("#root")
console.log(rootElement)

rootElement.innerHTML = "sziasztok"

async function init() {
    const response = await fetch("https://restcountries.com/v3.1/all")
    const data = await response.json()

    data.map(country => console.log(country.name.common))
}

init()