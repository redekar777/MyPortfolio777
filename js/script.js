window.addEventListener('DOMContentLoaded', function() {
  var header = document.querySelector('.header');
  var sections = document.querySelectorAll('section');
  var navLinks = document.querySelectorAll('.navbar a');
  var menuIcon = document.getElementById('menu-icon');
  var navbar = document.querySelector('.navbar');
  var footer = document.querySelector('footer');

  // Function to add 'sticky' class to header
  function toggleStickyHeader() {
    header.classList.toggle('sticky', window.pageYOffset > 100);
  }

  // Function to highlight active link based on scroll position
  function highlightActiveLink() {
    var scrollPosition = window.pageYOffset;

    sections.forEach(function(section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.clientHeight;

      if (scrollPosition >= sectionTop - sectionHeight / 3) {
        var sectionId = section.getAttribute('id');
        var correspondingLink = document.querySelector('.navbar a[href="#' + sectionId + '"]');

        navLinks.forEach(function(navLink) {
          navLink.classList.remove('active');
        });

        correspondingLink.classList.add('active');
      }
    });
  }

  // Function to add 'show-animate' class to sections
  function toggleShowAnimate() {
    var scrollPosition = window.pageYOffset;
    var windowHeight = window.innerHeight;

    sections.forEach(function(sec) {
      var sectionTop = sec.offsetTop;
      var sectionHeight = sec.clientHeight;

      if (
        scrollPosition >= sectionTop - windowHeight + sectionHeight / 3 &&
        scrollPosition <= sectionTop + sectionHeight
      ) {
        sec.classList.add('show-animate');
      } else {
        sec.classList.remove('show-animate');
      }
    });

    footer.classList.toggle('show-animate', scrollPosition + windowHeight >= document.scrollingElement.scrollHeight);
  }

  // Event listener for scroll event
  window.addEventListener('scroll', function() {
    toggleStickyHeader();
    highlightActiveLink();
    toggleShowAnimate();
  });

  // Initial check for sticky header, active link, and show-animate on page load
  toggleStickyHeader();
  highlightActiveLink();
  toggleShowAnimate();

  // Event listener for click event on navbar links
  navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function() {
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
    });
  });
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


document.getElementById("readMoreButton").addEventListener("click", function() {
  // Hide the "Read More" button
  this.style.display = "none";

  // Show the additional content
  document.getElementById("additionalContent").style.display = "block";
});
