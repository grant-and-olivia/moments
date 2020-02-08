$( document ).ready(function() {
    $('.container').hover(function() {
        $(this).find('p').css('visibility', 'visible');
    }, function() {
        $(this).find('p').css('visibility', 'hide');
    });
    
});
