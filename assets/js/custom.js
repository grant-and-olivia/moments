$( document ).ready(function() {
    $('.zoom').hover(function() {
        var id = $(this).attr("id").replace('img', 'p');
        $('#' + id).hide();
    });
});
