$('#button-1').on('click', function() {
    alert('Triggering the click event');
});

$('#button-2').on('click', function() {
    $('h1:nth-of-type(1)').hide("slow");
});

$('#button-3').on('click', function() {
    $('h1:nth-of-type(1)').show("fast");
});

$('#button-4').on('click', function() {
    $('h1:nth-of-type(1)').toggle(2000);
});

$('h5:nth-of-type(1)').on('click', function() {
    if($('#grocery-list-1 li').css("display") == 'none') {
        
     $('#grocery-list-1 li').slideDown("fast")
    }
     else {
         $('#grocery-list-1 li').slideUp("slow");
     }  
 });

 $('h5:nth-of-type(2)').hover(function() {
    if($('#grocery-list-2 li').css("display") == 'none') {
        
     $('#grocery-list-2 li').slideDown("slow")
    }
     else {
         $('#grocery-list-2 li').slideUp(3000);
     }  
 });

$('p:nth-of-type(1)').before($('#bold'));

$('#using-after').click(function () {
    $('#using-after').after($('h5:nth-of-type(1)'));
});

$('p:nth-of-type(2)').on('click', function() {
    $('p:nth-of-type(2)').append("Here is the syntax of jQuery selector <strong>$(selector).action()</strong>");
})

$('span').addClass("blue")

$('p:nth-of-type(3)').on('click',function() {
    $('p:nth-of-type(3)').html("We are actually starting out next <strong>stack</strong> next week")
})
$('#text-button').on('click',function() {
    $('#text-button').text("Just updated the <em>content</em>");
})

$('#text-input').keyup(function() {
    var value = $(this).val();
    $('p:nth-of-type(4)').text(value);
})


