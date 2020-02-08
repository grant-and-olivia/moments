$( document ).ready(function() {
    $('.container').hover(function() {
        console.log($(this).attr('id'));
        $(this).find('p').css('visibility', 'visible');;
    });
});
