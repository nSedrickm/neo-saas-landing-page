// toggle mobile navigation

let menu = document.getElementById("menu-nav");
let openButton = document.getElementById("menu-toggle");
let closeButton = document.getElementById("menu-toggle-close");

// open menu
function openMenu() {
  menu.classList.remove("hidden", "opacity-0");
  menu.classList.add("flex", "opacity-100");
  openButton.classList.add("hidden");
  closeButton.classList.remove("hidden");
}

// close menu
function closeMenu() {
  menu.classList.remove("flex", "opacity-95");
  menu.classList.add("hidden", "opacity-0");
  openButton.classList.remove("hidden");
  closeButton.classList.add("hidden");
}
