// Add this to your existing JavaScript file or create a new one

window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".nav__container");
  
    if (window.scrollY > 50) {
      navbar.classList.add("fixed");
    } else {
      navbar.classList.remove("fixed");
    }
  });

