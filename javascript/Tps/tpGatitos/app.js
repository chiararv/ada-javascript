const menu = document.querySelector("ul");
const tabSection = document.querySelectorAll(".tab-section");
const btnRandom = document.getElementById("random-cat-btn");
const imgRandom = document.getElementById("cat-img");
const btnSearch = document.getElementById("breed-search-btn");
const searchInput = document.getElementById("breed-search-input");
const table = document.getElementById("breed-search-results");
const select = document.getElementById("breed-dropdown");
const card = document.getElementById('card-body');
const image = document.getElementById('breed-img');
const result = document.getElementById("breed-results");
const filters = document.querySelectorAll('.breed-filter')

let arrCards = [];
let selectedTab;
let breedsWithImg;
let apiInfo = []

const getApiInfo = async () => {
  const response = await fetch('https://api.thecatapi.com/v1/breeds');
  apiInfo = await response.json();
}

//tabs
menu.addEventListener("click", (e) => {
    
    let target_a = e.target; //esto es el "a" - enlace
    let target_li = e.target.parentElement; //esto es el "li"
   
    //le saco la clase is-active al primer item menu
    menu.firstElementChild.classList.remove('is-active');

    displayTab(target_li);
    displaySection(target_a);
});

const displayTab = (tab) => {

  if (selectedTab) { // remove is-active from last selectedTab
    selectedTab.classList.remove('is-active');
  }
  selectedTab = tab;
  selectedTab.classList.add('is-active');

};

const displaySection = (link) => {
    tabSection.forEach( tab => {
        //le saco el # al href asi queda la palabra pelada
        let newLink = link.hash.substring(1);

        if (tab.id === newLink) { 
            tab.classList.remove('is-hidden');
          }
        else {
            tab.classList.add('is-hidden');
        }
    });

};

//seccion gato random
btnRandom.addEventListener("click", () => {
    btnRandom.classList.add("is-loading") 
    getRandom()
});

const getRandom = async () => {
  const response = await fetch("https://api.thecatapi.com/v1/images/search/");
  const data = await response.json();
  
  //Aca tednriamos q manejar los errores
  // if(!response.ok){
  //     alert("algo salio mal")
  // }
  
  imgRandom.src = data[0].url;
   
};
  
  //esto es una fx onload en la imagen. cuadno se termina de cargar le saca la clase is-loading
  const stopIsLoading = () => {    
    btnRandom.classList.remove("is-loading") 
  };

//Buscador de razas
const getBreed = (value) => {

  if(apiInfo.length > 0){
    const breeds = apiInfo.filter(element => (element.name.toLowerCase()).includes(value.toLowerCase()))
      
    table.innerHTML= breeds.reduce((acc, item ) => {
       return acc + `
        <tr>
          <td onclick=${goToBreedsPage()}>${item.name}</td>
        </tr>
       `
      }, "")  
  }
};

const goToBreedsPage = () => {
  alert('holii')
}
searchInput.addEventListener('keyup', () => {
  getBreed(searchInput.value)

})

//seccion Razas (select)
const showOptions = () => {
  select.innerHTML = apiInfo.reduce((acc, item) => {
   return acc + `<option value=${item.id}>${item.name}</option>`
  }, "")
}

const updateCardInfo = async () => {
  
  const responseInfo = await fetch(`https://api.thecatapi.com/v1/breeds/${select.value}`);
  const info = await responseInfo.json();

  let temperament = info.temperament.split(",")
  temperament.reduce((acc, t) => {
    acc + `<span class=" tag">${t}</span>`
  }, '')
 
  card.innerHTML = 
 `
    <h1 id="breed-name">${info.name}</h1>

    <p id="breed-description">
    ${info.description}
    </p>
    <div class="tags" id="breed-temperament">
    ${temperament}
    </div>
  `
}

const updateCardImg = async () => {
  const responseImg = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${select.value}`);
  const img = await responseImg.json();
  image.src = img[0].url
}


const getInfo = async () => {
  let img = [];
  for(let item of apiInfo){
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${item.id}`);
    const data = await response.json();
    img.push(data[0].url)    
  }
  console.log(img, "img")
  breedsWithImg = apiInfo.map((breed,index)=>{
    return {...breed, img:img[index]}
  })
}

const initBreedsWithFilters = async () =>{
  await getInfo();
  console.log(breedsWithImg)
  createCards(breedsWithImg);
}

const createCards = async (breeds) => {

  const cards = breeds.reduce((acc, cat) => {
    return acc + `
    <div class="column is-6">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="${cat.img}" />
        </figure>
      </div>
      <div class="card-content">
        <p class="title is-5">${cat.name}</p>
      </div>
    </div>
  </div>
    `
  }, '')

  result.innerHTML = cards
}

console.log(filters)


filters.forEach(filter => {    
  filter.addEventListener('click', (event) => {
  const {value,checked} = event.target;  
  if(checked){ 
    arrCards.push(value)  
  }
  else{    
    let index= arrCards.indexOf(value) 
    arrCards.splice(index, 1)    
  }   
  
  let filteredBreeds = [...breedsWithImg]

  for (const filter of arrCards) {  
    filteredBreeds = filteredBreeds.filter(breed => breed[filter])
  }
  console.log(filteredBreeds)
  createCards(filteredBreeds)
 })});

// let rare
// let natural
// let exp
// const createArrs =  () => {
//   rare = breedsWithImg.filter(breed => breed.rare)
//   natural= breedsWithImg.filter(breed => breed.natural)
// }
getApiInfo()
 .then(initBreedsWithFilters)
  .then(showOptions)
    .then(updateCardImg)  
      .then(updateCardInfo)




      