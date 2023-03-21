document.addEventListener("DOMContentLoaded", () => {
    const toggleMenuButton = document.getElementById("toggleMenu");
    const classicMenu = document.getElementById("classicMenu");
  
    
    if (toggleMenuButton && classicMenu) {
      toggleMenuButton.addEventListener("click", () => {
        if (classicMenu.hasAttribute("hidden")) {
          classicMenu.removeAttribute("hidden");
        } else {
          classicMenu.setAttribute("hidden", true);
        }
      });
    }
  });
  