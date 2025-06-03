const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');


function myFunction(x) {
  x.classList.toggle("change");
    navLinks.classList.toggle('active');
}


