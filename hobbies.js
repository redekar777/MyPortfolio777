window.addEventListener('DOMContentLoaded', function() {
    var items = document.querySelectorAll('.carousel-item');
    var prev = document.querySelectorAll('.arrow-prev');
    var next = document.querySelectorAll('.arrow-next');
    var currentItem = 0;
    
    function reset() {
      for (var i = 0; i < items.length; i++) {
        items[i].style.opacity = '0';
      }
    }
    
    function startSlide() {
      reset();
      items[0].style.opacity = '1';
    }
    
    function slideLeft() {
      reset();
      items[currentItem - 1].style.opacity = '1';
      currentItem--;
    }
    
    function slideRight() {
      reset();
      items[currentItem + 1].style.opacity = '1';
      currentItem++;
    }
    
    prev.forEach(function(element) {
      element.addEventListener('click', function() {
        if (currentItem === 0) {
          currentItem = items.length;
        }
        slideLeft();
      });
    });
    
    next.forEach(function(element) {
      element.addEventListener('click', function() {
        if (currentItem === items.length - 1) {
          currentItem = -1;
        }
        slideRight();
      });
    });
    
    startSlide();
  });
  
// Get the back button element
const backButton = document.querySelector('.navbar-button');

// Function to check if the current device is a tablet
function isTablet() {
  return window.matchMedia('(max-width: 991px)').matches;
}

// Function to handle the visibility and content of the back button
function handleBackButton() {
  if (isTablet()) {
    backButton.innerHTML = '<i class="bx bx-chevron-left"></i>'; // Replace the back button content with an arrow icon
  } else {
    backButton.innerHTML = 'Back'; // Restore the original content of the back button
  }
}

// Initial call to handle the back button visibility and content on page load
handleBackButton();

// Event listener to handle the back button visibility and content on window resize
window.addEventListener('resize', handleBackButton);
