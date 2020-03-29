const container = document.getElementById("container");


const getPokemons = async ()  => {
    for (let i = 1; i <= 200; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        const data = await fetch(url);
        const pokemon =  await data.json();
        createPokemonView(pokemon);
    }
}

const createPokemonView = (pokemon) => {
    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon')
    
    const name = pokemon.name;
    const types = pokemon.types.map(type => type.type.name);
    const abilities = pokemon.abilities.map(ability => ability.ability.name);


    const pokeInnerHTML = `
        <div class="img-container">
            <img src="https://pokeres.bastionbot.org/images/pokemon/${
							pokemon.id
						}.png" alt="${name}" />
        </div>
        <div class="info">
            <span class="number">#${pokemon.id
							.toString()
							.padStart(3, '0')}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${types}</span></small>
            <small class="type">Ability: <span>${abilities}</span></small>

        </div>
    `;

	pokemonElement.innerHTML = pokeInnerHTML;

	container.appendChild(pokemonElement);
}
getPokemons()