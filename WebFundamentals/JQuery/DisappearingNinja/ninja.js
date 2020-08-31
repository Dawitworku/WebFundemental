

var output = "";

for (var i = 0; i < 8; i++) {
    output += '\n<img src="img/ninja-2.gif" alt="Ninja">'
}
console.log(output);
//document.getElementById('wrapper').innerHTML = output;

// adding the img to the html using JS
$('#wrapper').append(output);

// adding a button after the imgs
$('img:last').after('<button id="button">Restore</button>');

// Adding class to all images.
$('img').addClass('ninjas')

//Jquery hide function
$('.ninjas').on('click',function() {
    $(this).hide(3000);
})
$('#button').on('click',function() {
    $('.ninjas').show(2000)
})







