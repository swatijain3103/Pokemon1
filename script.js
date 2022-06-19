document.querySelector("#search").addEventListener("click", getPokemon);
function getPokemon(e) {
    const name = document.querySelector("#pokemonName").value;
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json()).then((data) => {
        document.querySelector(".pokemonBox").innerHTML = `
        <div>
        <img src="${data.sprites.other["official-artwork"].front_default}" 
        alt="${data.name}">
        </img>
        </div>
        <div>
            <h1 style="text-align:center">${data.name}</h1>
            <p style="text-align:center">${data.weight}</p>
            <p style="text-align:center">${data.height}</p>
        </div>`;    
    })
.catch(err => {
    console.log('Pokemon not found',err);

});

// e.preventDefault();
}
getPokemon();