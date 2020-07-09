const cardContainer = document.getElementById("card-container")
const input = document.getElementById("search")
const searchBtn = document.getElementById("button-addon2")
const clearBtn = document.getElementById("button-addon3")

const getDeaths = () => {
  
    return fetch("https://breakingbadapi.com/api/deaths")
    .then((response) => {
          return response.json();
        })
      .then( (data) => {
          deaths = data
        })
      };
      
let deathsCountByCharacter = {}

function getDeathsByAuthor(name) {
  if (deathsCountByCharacter[name]) {
    return deathsCountByCharacter[name]
  }
  return fetch(`https://breakingbadapi.com/api/death-count?name=${name}`)
    .then(response => response.json())
    .then(death => {
      deathsCountByCharacter = death[0].deathCount
      // console.log(deathsCountByCharacter, name)

      return deathsCountByCharacter
      // console.log("death", deaths)
      // return deathsCountByCharacter.deathCount
    })
}

let quotes 
const getQuotes = () => {
    
  return fetch("https://breakingbadapi.com/api/quotes")
  .then((response) => {
      return response.json();
    })
  .then( (data) => {
      //console.log(data)
      quotes = data;
  })
};

let charactersArr
const getCharacters = () => {
    
  return fetch("https://breakingbadapi.com/api/characters")
  .then((response) => {
      return response.json();
    })
  .then( (data) => {
    charactersArr = data
    createCard(data)
  })
};


let deaths;
const createCard = (data) =>{

  const cards =  data.reduce((html, character ) => {
    return html + `
    <div class="card m-3 d-flex flex-column justify-content-center align-items-center" style="width: 18rem;" onclick="toggleDescription(${character.char_id},'${character.name}')">
      <img src="${character.img}" class="card-img-top border-dark rounded-top" alt="...">
      <div class="card-body" id="showedDescription${character.char_id}">
        <h5 class="card-title align-self-start">${character.name}</h5>
        <p class="card-text"><span class="key">Date of birth</span> ${character.birthday}</p>
        <p class="card-text"><span class="key">Status</span> ${character.status}</p>
        <p class="card-text"><span class="key">Alias</span> ${character.nickname}</p>
        <p class="card-text"><span class="key">Seasons</span> ${(character.appearance).join(", ")}</p>
      </div>
      <div class="card-body d-none" id="hiddenCard${character.char_id}">      
        <p id="frases${character.char_id}"class="card-text"><span class="key">Quote:</span>${randomQuotes(character.name)} </p>
        <p id="deaths${character.char_id}" class="card-text"><span class="key">Murders:</span>Loading...</p>
      </div>
    </div>    
    `
  }, "")
  cardContainer.innerHTML = cards
}

const toggleDescription = (id, name) => {
  const hiddenCard = document.getElementById(`hiddenCard${id}`);
  const showedDescription = document.getElementById(`showedDescription${id}`)
  const deaths = document.getElementById(`deaths${id}`)

  hiddenCard.classList.toggle("d-none")
  showedDescription.classList.toggle("d-none")
  getDeathsByAuthor(name).then(value=>{
    deaths.innerHTML = `<span class="key">Murders:</span> ${value}`
  })
}

const randomQuotes = (name) => {

  let arrayQuotes = quotes.filter(quote => quote.author === name)
  let randomNumber = Math.ceil(Math.random() * arrayQuotes.length);
  
  return randomQuote = arrayQuotes[randomNumber - 1] ? arrayQuotes[randomNumber - 1].quote : "";
}

searchBtn.addEventListener("click", () => {
  const character = charactersArr.filter(ch => ch.name === input.value)
  createCard(character)
})

clearBtn.addEventListener("click", () => {
  input.value = ''
  getCharacters()
})


getQuotes()
  .then(() => getCharacters());
