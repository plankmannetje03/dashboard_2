const PokémonImage = document.getElementById("js--poke-image");
let RandomNumber = Math.floor(Math.random() * 750 + 1);
let CatchNumber = Math.floor(Math.random() * 2);



let Pokémon = fetch("https://pokeapi.co/api/v2/pokemon/" + RandomNumber)
    .then(function (response) {
        return response.json();

    })
    .then(function (realData) {
        PokémonImage.src = realData.sprites.front_default
    });

const CatchButton = document.getElementById("js--catch-button");
const PokemonText = document.getElementById("js--pokemon-text");
let PokemonGameplayed = false;

CatchButton.onclick = function () {
    if (PokemonGameplayed === false) {
        let CatchNumber = Math.floor(Math.random() * 2);
        if (CatchNumber === 0) {
            PokemonText.innerText = "Pokémon Fled!"


        }
        else {
            PokemonText.innerText = "Pokémon Caught!"
        }
        PokemonGameplayed = true;
    }

}

const TvTitel = document.getElementById("js--tv-titel");
const TvSummary = document.getElementById("js--tv-summary")

let tvtitle = fetch("https://api.tvmaze.com/search/shows?q=breaking%20bad")
.then(function(response){
    return response.json();
})

.then(function(realData1){
    TvTitel.innerText = realData1[0].show.name
});

let tvsummary = fetch("https://api.tvmaze.com/search/shows?q=breaking%20bad")
.then(function(response){
    return response.json();
})

.then(function(realData1){
    TvSummary.innerText = realData1[0].show.summary
});


const jsname = document.getElementById("js--name");
const inputField = document.getElementById("js--input");

inputField.onkeyup = function(event){
  if(event.keyCode === 13){

    let name = inputField.value; 

    let age = fetch("https://api.agify.io?name=" + name)
.then(function(response){
    return response.json();
})
.then(function(echteData){
    jsname.innerText = echteData.age;
    inputField.style.display = "none"
     
});
    
  }
}





