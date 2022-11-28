const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 12
const maxRecords = 1100 //Limite de pokemons
let offset = 0



//manipulando o HTML com o JS, e contruindo com o innerHTML
function loadPokeminItens(offset, limit){
    pokeApi.getPokemons(offset,limit).then((pokemons = []) => {
       const newHtml = pokemons.map((pokemon) => `
        <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
    
        <div class="detail">
            <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>` ).join('')}
            </ol>
    
            <img src="${pokemon.photo}" 
                 alt="${pokemon.name}">
        </div>  
    </li>  
        `).join('')

        pokemonList.innerHTML += newHtml
    })
  
}
//carregando página de primeira
loadPokeminItens(offset, limit)
//evento do botão no clique
loadMoreButton.addEventListener('click', () => {
    offset += limit
    //Limite de pokemons Lógica
    const qtdRecordNexPage = offset + limit

    if(qtdRecordNexPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokeminItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }

    loadPokeminItens(offset, limit) //Paginação sem limite
})

   
        
    
    
    
