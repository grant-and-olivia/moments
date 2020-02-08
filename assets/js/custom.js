$( document ).ready(function() {
    $('.container').mouseover(function() {
        console.log('yo');
        $(this).find('p').css('visibility', 'visible');
    });
    $('.container').mouseleave(function() {
        console.log('chicken');
        $(this).find('p').css('visibility', 'visible');
    });
});
