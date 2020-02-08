$( document ).ready(function() {
   
    $('.container').mouseenter(function() {
        $(this).find('p').css('visibility', 'visible');
        $(this).find('img').css('opacity', '0.5');
        $(this).find('img').css('transform', '1.05');
    });
    $('.container').mouseleave(function() {
        $(this).find('p').css('visibility', 'hidden');
        $(this).find('img').css('opacity', '1.0');
       $(this).find('img').css('transform', '1.00');
    });
    
    VANTA.TOPOLOGY({
      el: "body",
      mouseControls: true,
      touchControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xcf25d,
      backgroundColor: 0xffffff
    })
});
