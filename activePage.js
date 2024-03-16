document.addEventListener("DOMContentLoaded", function() {
    const ABOUT USLink = document.getElementById('ABOUT USLink');
    const MISSIONLink = document.getElementById('MISSIONLink');
    const VISIONLink = document.getElementById('VISIONLink');
    const CORE VALUESLink = document.getElementById('CORE VALUESLink');
    const CONTACTLink = document.getElementById('CONTACTLink');
  
    // Function to load content
    function loadContent(contentText) {
      content.innerHTML = `<h2>${contentText}</h2>`;
    }
  
    // Event listeners for nav links
    ABOUT USLink.addEventListener('click', function(event) {
      event.preventDefault();
      loadContent('ABOUT US Page Content');
    });
  
    MISSIONLink.addEventListener('click', function(event) {
      event.preventDefault();
      loadContent(' MISSION Page Content');
    });
  
    VISIONLink.addEventListener('click', function(event) {
      event.preventDefault();
      loadContent(' VISION Page Content');
    });
    CORE VALUESLink.addEventListener('click', function(event) {
        event.preventDefault();
        loadContent('CORE VALUES Page Content');
      });
      CONTACTLink.addEventListener('click', function(event) {
        event.preventDefault();
        loadContent('CONTACT Page Content');
      });
    // Load default content
    loadContent('Welcome to the Home Page');
  });