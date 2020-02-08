$( document ).ready(function() {
   
    $('.container').mouseenter(function() {
        $(this).find('p').css('visibility', 'visible');
        $(this).find('img').css('opacity', '0.5');
    });
    $('.container').mouseleave(function() {
        $(this).find('p').css('visibility', 'hidden');
        $(this).find('img').css('opacity', '1.0');
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
      backgroundColor: 0x1e90ff
    })
});
