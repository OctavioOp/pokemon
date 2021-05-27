$(document).ready(function(){
    for(let i = 1; i<=151; i++){
        $('#pokemon').append(`<div class="col-3 my-2"><img src=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png alt=""></div>`)
    }
})