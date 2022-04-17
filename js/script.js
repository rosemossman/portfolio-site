console.log("Hi, Welcome to my Portfolio Website!");

function menuToggle()  {
    var x = document.getElementById('myNavtoggle'); 
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
      } else {
        x.className = 'navtoggle';
      }
   }

