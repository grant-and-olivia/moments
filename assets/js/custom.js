$( document ).ready(function() {
    $('.zoom').hover(function() {
        var id = $(this).attr("id").replace('img', 'p');
        console.log($("#"+id).text());
        $("#"+id).hide();
    });
});
