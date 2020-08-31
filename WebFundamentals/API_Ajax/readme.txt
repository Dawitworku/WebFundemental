Assignment: What's that Pokemon? Build Your Own Pokedex


Add a click function to each of the Pokemon you rendered in the last PokeAPI assignment that will show the side panel pictured above.
How do you know which Pokemon was clicked? Maybe we can give each Pokemon a unique id that corresponds with their number in the URL?
<img id="2" src="raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png"> 
<!-- add http:// before the website name -->
So that when the image is clicked, we get its id and add it to the end of this URL: "http://pokeapi.co/api/v2/pokemon/" then we make the ajax request with that URL that we constructed.