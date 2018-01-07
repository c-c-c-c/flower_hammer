$(function(){
    $(".color1").on("click", function() {
        $(".selectcolor1").slideToggle();
    });

    $(".color2").on("click", function() {
        $(".selectcolor2").slideToggle();
    });

    // Drag and Drop
    $('.botanical').each(function (idx, $el) {
      var hammertime = new Hammer($el)
      hammertime.on('pan', function (ev) {
        ev.preventDefault()
        var target = ev.target
        target.style.top = ev.deltaY + 'px'
        target.style.left = ev.deltaX + 'px'
      })
    })
});
