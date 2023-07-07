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
