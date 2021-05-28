$(document).ready(function () {
  for (let i = 1; i <= 151; i++) {
    $("#pokemon").append(
      `<div class="col-2 my-2"><img id="${i}" src=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png alt=""></div>`
    );
  }

  $("img").on("click", function () {
    let valueId = $(this).attr("id");
    let name = "";
    let photo = "";
    let type = "";
    let weigth = "";
    let heiight = "";
    console.log(valueId);

    $.get(`http://pokeapi.co/api/v2/pokemon/${valueId}`, function (data) {
      //console.log(data);
      name = data.name;
      photo = data.sprites.front_default;
      type = data.types;
      weigth = data.weight;
      heiight = data.height;
      //console.log(heiight);
    });

    $("img").html(name)
  });
});
