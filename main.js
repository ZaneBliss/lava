headerEls = document.querySelector(".header-container").childNodes;

headerEls.forEach(element => {
    $(element).css({opacity: "0"})
});

for (let i=0; i<10; i++) { 
    fade(i); 
    
 } 
 function fade(i) { 
   setTimeout(function() { 
       if (headerEls[i].className == "line") {
           $(headerEls[i]).fadeTo(3000, 1).animate({
               width: "50%"
           }, 2000)
       } else if (headerEls[i].id == "heading") {
           $(headerEls[i]).fadeTo(3000, 1).animate({
               letterSpacing: "10px"
           }, 4000)
       } else {
        $(headerEls[i]).fadeTo(3000, 1)
       }
   }, 500 * i); 
 } 
