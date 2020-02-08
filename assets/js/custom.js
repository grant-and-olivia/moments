$( document ).ready(function() {
    $('.container').mouseover(function() {
        console.log('yo');
        $(this).find('p').css('visibility', 'visible');
    });
});
