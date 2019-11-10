'use strict';

function displayHamburger() {
  const hamburger = document.querySelector('.hamburger-menu');
  const blockStyle = hamburger.style.display;
  if (blockStyle == "block") {
    hamburger.style.display = "none";
  } else {
    hamburger.style.display = "block";
  }

}


