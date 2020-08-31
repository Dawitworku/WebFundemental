// var output = "";
// var alt = "";

// for (var i = 0; i <5; i++) {
//     output += '\n<img src="img/ninja'+i+'.png">'
//     alt += $('img').attr('data-alt-src', 'img/cat'+i+'.png')
    
//     console.log(output);
//     console.log(alt)
// }
// $('#wrapper').append(output);
// $('#wrapper img').append(alt);

////////////////////////////////////////////////////////////////
//First method
// $('#wrapper img').on('click',function() {
//     var temp = $(this).attr('src');// storing the value of the ninja img in temp

//     if($(this).attr('src')) { // Swapping the ninja with cat on click event
//         $(this).attr('src', $(this).attr('data-alt-src'));
//     }
//     else {
//         $(this).attr('data-alt-src', temp); // reverting back to ninja here
//     }
//     console.log($(this).attr('data-alt-src', temp));
// })

// second and better way of doing it

$('#wrapper img').click(function() {
    var temp = $(this).attr('src');

    $(this).attr('src', $(this).attr('data-alt-src')); 
    $(this).attr('data-alt-src', temp)

    console.log($(this).attr('src'));
    console.log($(this).attr('alt-src'))
})

// attr method takes 2 properties. we can swap images using attr
//bt we need to store the value of the first element to later swap back.






