'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active"); }

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// import header

function includeHeader() {
  var elements = document.querySelectorAll("[w3-include-html]");

  elements.forEach(function(elmnt) {
    var file = elmnt.getAttribute("w3-include-html");
    if (file) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          elmnt.removeAttribute("w3-include-html");
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
    }
  });
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", includeHeader);

// import footer

function includeComponents() {
  var elements = document.querySelectorAll("[w3-include-html]");

  elements.forEach(function(elmnt) {
    var file = elmnt.getAttribute("w3-include-html");
    if (file) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          elmnt.removeAttribute("w3-include-html");
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
    }
  });
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", includeComponents);


// Email sending function

// EmailJS initialization and send email function
// (function() {
//   emailjs.init("service_8wp9apo"); // Replace with your EmailJS user ID
// })();

// function sendEmail() {
//   var templateParams = {
//       name: document.getElementById('name').value,
//       email: document.getElementById('email').value,
//       mobile: document.getElementById('mobile').value,
//       lessonType: document.getElementById('lessonType').value,
//       date: document.getElementById('date').value,
//       time: document.getElementById('time').value,
//       skillLevel: document.getElementById('skillLevel').value,
//       classType: document.getElementById('classType').value
//   };

//   emailjs.send('service_8wp9apo', 'template_40wb4ea', templateParams)
//       .then(function(response) {
//           alert('Email sent successfully!');
//       }, function(error) {
//           alert('Failed to send email: ' + error);
//       });
// }
