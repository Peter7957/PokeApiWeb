let pokeApiPokemon = "https://pokeapi.co/api/v2/pokemon/";
const apiData = document.getElementById("apiData");

let pokeApiTipo = "https://pokeapi.co/api/v2/type/";
const apiFiltro = document.getElementById("apiFiltro");

//------------ GENERAR CARTAS DE POKEMON ---------------//
async function datosPokemon() {
    for(let i = 1; i <= 8; i++) {
        let response = await fetch(pokeApiPokemon + i);
        let dataPokemon = await response.json();
        mostrarPokemon(dataPokemon);
    }    
}

function tipos(dataPokemon){
    console.log("estafuncionando");
}

function mostrarPokemon(dataPokemon){
    tipos(dataPokemon);
    let div = document.createElement("article");
    div.classList.add("w-96", "rounded", "overflow-hiden", "shadow-lg", "m-2");
    div.innerHTML = `
    
        <img src="${dataPokemon.sprites.front_default}" alt="" class="w-screen">
        <div class="font-bold text-xt mb-2">${dataPokemon.name}</div>
        `;
        //<p class="text-gray text-base">${dataPokemon.types[0].type.name}${dataPokemon.types[1].type.name}</p>
        
    apiData.append(div);
}

//---------------- GENERAR FILTRO DE TIPOS DE POKEMON -----------------//

async function tipoPokemon() {
    for(let i = 1; i <= 18; i++) {
        let response = await fetch(pokeApiTipo + i);
        let dataTipo = await response.json();
        mostrarTipoPokemon(dataTipo);
    }
}

function mostrarTipoPokemon(dataTipo) {
    let button = document.createElement("button");
    button.classList.add("bg-blue-500",  "hover:bg-blue-700", "text-white", "font-bold", "py-2", "px-4", "rounded-full", "my-4");
    button.innerHTML = `

        ${dataTipo.name}
    
        `;
    apiFiltro.append(button);
}


datosPokemon();
tipoPokemon();
