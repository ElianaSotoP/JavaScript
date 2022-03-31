// URLS
const URL_POKEMON = "https://pokeapi.co/api/v2/pokemon/?limit=151";
const JSON_POST = "https://jsonplaceholder.typicode.com/posts";

// DOM
const container = document.querySelector("#container");
const btn = document.querySelector("#button");
const form = document.querySelector("#form");

// FUNCIONES
const capitalize = (str) => {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
};
//probando fetch
console.log(fetch("https://jsonplaceholder.typicode.com/posts"));
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((resultado) => resultado.json())
  .then((datos) => console.log(datos))
  .catch();

//LISTENERS
btn.addEventListener("click", () => {
  fetch(URL_POKEMON)
    .then((resultado) => resultado.json())
    .then((respuesta) => {
      for (let pokemon of respuesta.results) {
        const element = document.createElement("div");
        const id=pokemon.url.split('/')[pokemon.url.split('/').length-2];
        element.classList.add("card");
        element.innerHTML = `  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png">
      <h2 class="poke-name">#${id} - ${capitalize(pokemon.name)}</h2>`;
      container.appendChild(element);
      }
    });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
