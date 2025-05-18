document.addEventListener("DOMContentLoaded", function() {
    // Create an img element
    const logo = document.createElement("img");
    logo.src = chrome.runtime.getURL("images/PromptedLogo.png");
    logo.style.position = "fixed";
    logo.style.top = "10px";
    logo.style.right = "10px";
    logo.style.width = "50px";
    logo.style.height = "50px";
    logo.style.zIndex = "1000"; // Ensure it's on top
  
    // Append the logo to the body
    document.body.appendChild(logo);
  });
  