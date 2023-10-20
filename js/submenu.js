export default function submenu() {
  const submenu = document.querySelectorAll(".dropdown-menu")
  submenu.forEach(function(menu) {
    menu.addEventListener("click", function(event) {
      event.stopPropagation()
    })
  })
}