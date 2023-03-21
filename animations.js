document.addEventListener("DOMContentLoaded", () => {
  const terminal = document.querySelector(".terminal");
  const terminalContent = document.getElementById("terminal-content");
  const terminalInput = document.getElementById("terminal-input");

  let typedCommand = document.getElementById("typed-command");
  let cursor = document.getElementById("cursor");

  const commands = [
    "services",
    "industries",
    "case-studies",
    "about",
    "blog",
    "contact",
  ];

  const commandLinks = {
    services: "services.html",
    industries: "industries.html",
    "case-studies": "case-studies.html",
    about: "about.html",
    blog: "blog.html",
    contact: "contact.html",
  };

  let menuActive = false;

  function displayMenu() {
    const menu = document.createElement("ul");
    menu.classList.add("menu");

    commands.forEach((command, index) => {
      const menuItem = document.createElement("li");
      menuItem.innerText = `${index + 1}. ${command}`;
      menu.appendChild(menuItem);
    });

    terminalContent.appendChild(menu);
    menuActive = true;
  }

  terminal.addEventListener("click", () => {
    terminalInput.focus();
  });

  function handleNavigation(command) {
    if (commandLinks.hasOwnProperty(command)) {
      window.location.href = commandLinks[command];
    } else {
      const commandResponse = document.createElement("p");
      commandResponse.innerText = "Invalid option. Please enter a number from the menu.";
      terminalContent.appendChild(commandResponse);
    }
  }

  terminalInput.addEventListener("keydown", (e) => {
    e.preventDefault();
    if (menuActive) {
      const numKey = parseInt(e.key) - 1;
      if (numKey >= 0 && numKey < commands.length) {
        handleNavigation(commands[numKey]);
      }
    } else {
      if (e.key === "Enter") {
        const command = typedCommand.innerText.trim().toLowerCase();
        typedCommand.innerText = "";

        if (command === "help") {
          displayMenu();
        } else {
          handleNavigation(command);
        }
      } else if (e.key === "Backspace") {
        typedCommand.innerText = typedCommand.innerText.slice(0, -1);
      } else if (e.key.length === 1) {
        typedCommand.innerText += e.key;
      }
      
    }
    document.getElementById("contact-form").addEventListener("submit", function (event) {
      event.preventDefault();
    
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");
    
      let isValid = true;
    
      if (nameInput.value.trim() === "") {
        isValid = false;
        document.getElementById("name-error").innerText = "Please enter your name.";
      } else {
        document.getElementById("name-error").innerText = "";
      }
    
      if (emailInput.value.trim() === "" || !emailInput.validity.valid) {
        isValid = false;
        document.getElementById("email-error").innerText = "Please enter a valid email.";
      } else {
        document.getElementById("email-error").innerText = "";
      }
    
      if (messageInput.value.trim() === "") {
        isValid = false;
        document.getElementById("message-error").innerText = "Please enter a message.";
      } else {
        document.getElementById("message-error").innerText = "";
      }
    
      if (isValid) {
        // Handle form submission here (e.g., send data to a server)
      }
      const menuToggleBtn = document.getElementById("menu-toggle");
const body = document.querySelector("body");
const classicMenu = document.querySelector(".classic-menu");

if (body.classList.contains("homepage")) {
  menuToggleBtn.style.display = "block";
} else {
  menuToggleBtn.style.display = "none";
}

menuToggleBtn.addEventListener("click", () => {
  classicMenu.style.display = classicMenu.style.display === "none" ? "flex" : "none";
});

      
    });
    
  });
});


