$( document ).ready(function() {
    $('.zoom').hover(function() {
        var id = $(this).attr("id").replace('img', 'p');
        $('#p/2018/12/29/skiing').hide();
    });
});
