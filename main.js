

headerEls = document.querySelector(".header-container").childNodes;
content_1Els = document.querySelector(".content_1").childNodes;

content_1Els.forEach(element => {
  $(element).css({ opacity: "0" });
});

headerEls.forEach((element) => {
  $(element).css({ opacity: "0" });
});

function startFade() {
  for (let i = 0; i < 10; i++) {
    fade(i, headerEls)
    fade(i, content_1Els);
  }
}
function fade(i, container) {
  setTimeout(function () {
    if (container[i].className == "line") {
      $(container[i]).fadeTo(3000, 1).animate(
        {
          width: "120%",
        },
        3000
      );
    } else if (container[i].className == "heading") {
      $(container[i]).fadeTo(3000, 1).animate(
        {
          letterSpacing: "10px",
        },
        4000
      );
    } else {
      $(container[i]).fadeTo(3000, 1);
    }
  }, 500 * i);
}


function animatethis(targetElement, speed) {
  $(targetElement).animate({ "background-position-x": "80%" },
  {
      duration: speed,
      complete: function ()
      {
          targetElement.animate({ "background-position-x": "0%" },
          {
              duration: speed,
              complete: function ()
              {
                  animatethis(targetElement, speed);
              }
          });
      }
  });
};
animatethis($('.parent-container_2'), 15000);

startFade()

window.addEventListener('scroll', function(){
  var place = document.body.scrollTop;
  var firstPanel = document.getElementById('test').offsetTop;
  var secondPanel = document.getElementById('test').offsetTop;
  if(place > alertOn){
    fade
    this.removeEventListener('scroll', arguments.callee, false);
  }
});