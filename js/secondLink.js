export default function secondLink() {
  const secondLink = document.querySelectorAll(".secondLink")
  secondLink.forEach(function(sLink) {
    sLink.addEventListener('click', function() {
      const dropdownMenu2 = sLink.querySelector(".dropdown-menu2")

      const allDropdowns2 = document.querySelectorAll(".dropdown-menu2")
      allDropdowns2.forEach(function (menu) {
        if(menu !== dropdownMenu2) {
          menu.style.display = "none"
        }
      })

      dropdownMenu2.style.display = dropdownMenu2.style.display === "block" ? "none" : "block"
    })
  })
}