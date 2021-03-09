const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"

const cities =[];
fetch(endpoint )
.then(blob => blob.json())
.then(data => cities.push(...data));



function findMatches (wordToMatch, cities)  {
    return cities.filter(place => {
        const regex = new RegExp (wordToMatch, "gi");
        return place.city.match(regex) || place.state.match(regex)
    })
}

function displayWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// const displayMatches = () => {
//     console.log(this.value);
// } ne radi sa ovim izrazom
function displayMatches () {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, "gi");
        const cityName = place.city.replace (regex, `<span class="hl">${this.value}</span>`)
        const stateName = place.state.replace (regex, `<span class="hl">${this.value}</span>`)
        const populationName = displayWithCommas(place.population);
        return `
        <li>
            <span class = "name"> ${cityName}, ${stateName}</span>
            <span class = "population"> ${populationName} </span>
        `
    }).join("");
    suggestions.innerHTML=html;
}

let input = document.querySelector(".search");
let suggestions = document.querySelector(".suggestions");

// input.addEventListener('change', displayMatches);
input.addEventListener('keyup', displayMatches);
