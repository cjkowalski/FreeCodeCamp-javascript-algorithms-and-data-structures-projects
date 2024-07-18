// JavaScript
// script.js

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const imgContainer = document.getElementById('image-here')
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const types = document.getElementById('types');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');

const getPokemonData = async (nameOrId) => {
  try {
    const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${nameOrId}`);
    if (!response.ok) {
        throw new Error('Pokemon not found!');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
    return null; 
  }
};

searchButton.addEventListener("click", function() {

  const pokemonNameOrId = searchInput.value.trim().toLowerCase();

  getPokemonData(pokemonNameOrId)
    .then(data => {
      pokemonName.textContent = data.name.toUpperCase();
      pokemonId.textContent = `${data.id}`;
      weight.textContent = `${data.weight}`;
      height.textContent = `${data.height}`;
      hp.textContent = `${data.stats[0].base_stat}`;
      attack.textContent = `${data.stats[1].base_stat}`;
      defense.textContent = `${data.stats[2].base_stat}`;
      specialAttack.textContent = `${data.stats[3].base_stat}`;
      specialDefense.textContent = `${data.stats[4].base_stat}`;
      speed.textContent = `${data.stats[5].base_stat}`;
      imgContainer.innerHTML = `<img id="sprite" src="${data.sprites.front_default}">`;
      types.innerHTML = data.types.map((obj) => `<span class="type ${obj.type.name}">${obj.type.name}</span>`).join('');

    })
  .catch(error => {
    console.error('Error:', error);
    alert('Pokemon not found!');
  });
})
