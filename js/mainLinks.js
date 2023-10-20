export default function mainLinks() {
  const mainLinks = document.querySelectorAll(".mainLink")
  let currentColorLink = null
  mainLinks.forEach(function(link) {
    link.addEventListener('click', function() {

      if(currentColorLink === link) {
        link.style.color = ""
        currentColorLink = null
      }
      else {
        link.style.color = "#fbd02c"
        if(currentColorLink) {
          currentColorLink.style.color = ""
        }
        currentColorLink = link
      }

      const dropdownMenu = link.querySelector(".dropdown-menu")
      const allDropdowns = document.querySelectorAll(".dropdown-menu, .dropdown-menu2");
      allDropdowns.forEach(function (menu) {
        if (menu !== dropdownMenu) {
          menu.style.display = "none";
        }
      });

      dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block"
    });
  });
}