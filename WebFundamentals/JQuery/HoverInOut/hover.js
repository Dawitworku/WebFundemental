

// $('#wrapper img').hover(function() {
//     var temp = $(this).attr('src');// storing the value of the first img in temp

//     if($(this).attr('src')) { // Swapping the first img with alt on hover event
//         $(this).attr('src', $(this).attr('alt-src'));
//     }
//     else {
//         $(this).attr('alt-src', temp); // reverting back to first img here
//     }
//     console.log($(this).attr('alt-src', temp));
// })

// $('#wrapper img').on('mouseover',function(){
//         src = $(this).attr('src').replace('src','attr("alt-src")')
//         $(this).attr('src' , src)
//     });


$('#wrapper img').hover(function() {
    var temp = $(this).attr('src');
    $(this).attr('src', $(this).attr('alt-src'));

    $(this).attr('alt-src', temp)

    //$(this).attr('alt-src')
    
    console.log($(this).attr('src'));
    console.log($(this).attr('alt-src'))
})