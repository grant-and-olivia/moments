$( document ).ready(function() {
    $('.container').mouseover(function() {
        $(this).find('p').css('visibility', 'visible');
        $(this).find('img').css('opacity', '0.5');
    });
    $('.container').mouseleave(function() {
        $(this).find('p').css('visibility', 'hidden');
        $(this).find('img').css('opacity', '1.0');
    });
});
