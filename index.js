window.addEventListener('scroll', function() {
    const contentElements = document.querySelectorAll('.lazy-load');
  
    for (const element of contentElements) {
      // Check if the element is within the viewport (visible area)
      if (isElementInViewport(element)) {
        // If element is visible, load its content (replace with your actual content loading logic)
        element.classList.remove('lazy-load');  // Remove lazy-load class
        element.textContent = "Content loaded for " + element.id; // Replace with your content fetching logic
      }
    }
  });
  
  // Helper function to check if element is visible in viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Add 'lazy-load' class to elements you want to load on scroll
  const elements = document.querySelectorAll('.your-content-selector'); // Replace with your content selector
  for (const element of elements) {
    element.classList.add('lazy-load');
  }
  var navLinks = document.getElementById("navLinks");
  function showMenu() {
      navLinks.style.right = "0";
  }
  function hideMenu() {
      navLinks.style.right = "-200px";
  }  