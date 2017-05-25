var element = document.getElementById('fadeText');


function fadeIn(element) {
  element.style.opacity = 0;

  var toUpdate = +new Date();
  var draw = function() {
    element.style.opacity = +element.style.opacity + (new Date() - toUpdate) / 5000;
    toUpdate = +new Date();

    if (+element.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(draw)) || setTimeout(draw, 16);
    }
  };

  draw();
}

fadeIn(element);

