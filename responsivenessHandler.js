document.addEventListener("DOMContentLoaded", function () {
    function handleResponsiveness() {
        // Check if the screen width is less than 1023px
        if (window.innerWidth < 1023) {
          // Check if the #responsiveness div already exists
          if (!document.getElementById("responsiveness")) {
              // Create the #responsiveness div
              const responsivenessDiv = document.createElement("div");
              responsivenessDiv.id = "responsiveness";
              responsivenessDiv.style.cssText = `
                  position: absolute;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  background-color: black;
                  color: white;
                  text-align: center;
                  font-family: 'Special Elite', monospace;
                  z-index: 10000;
              `;
              responsivenessDiv.innerHTML = `
                  <p>This page is not accessible on mobile or tablet devices. Please use a desktop browser.</p>
              `;
              document.body.appendChild(responsivenessDiv);
          }
      } else {
          // Remove the #responsiveness div if it exists and show the main content
          const responsivenessDiv = document.getElementById("responsiveness");
          if (responsivenessDiv) {
              responsivenessDiv.remove();
          }
      }
    }
  
    // Run the check on page load
    handleResponsiveness();
  
    // Run the check on window resize
    window.addEventListener("resize", handleResponsiveness);
  });