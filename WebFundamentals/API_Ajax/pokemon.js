
// creating the images
var output = "";

for(var i = 1; i < 35; i++) {       // iterate through the images & create div content
    output += '\n<img id ="'+i+'" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'+i+'.png" alt="Pokemons"/>'
}
console.log(output);
$('#images').append(output);

$('#container').prepend("<h1>Pokemon's</h1>");
// on click use the id to get the pokedex info:
//name, image, types, height, weight

$(document).on("click", "img", function() {
    $('#entry').html('')   // This will wipe the images whenever i click in another one

    var id = $(this).attr("id");    // using the ID attribute value to select a pokemon from the API  

    $.get("https://pokeapi.co/api/v2/pokemon/" + id, function (response) {

        var html_str = ""; // storing the html tags here!

        html_str += "<h2>" + response['name'] + "</h2>";                   // looking for names
        html_str += '<img src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/' + id + '.png" id=' + id + 'alt="A Pokemon" />'
        html_str += "<h4>Types</h4>";
        html_str += "<ul>";

        for(var t = 0; t < response['types'].length; t++) {               // looking for types
            html_str += "<li>" + response['types'][t]['type']['name'] + "</li>";
        }
        html_str += "</ul>";
        html_str += "<h4>Height</h4> <p>" + response['height'] + "</p>";   //returning the height
        html_str += "<h4>Weight</h4> <p>" + response['weight'] + "</p>";   // returning the width using
                                                                           //API call
        $("#entry").append(html_str);  // adding all to the entry id on HTML
    })
})

