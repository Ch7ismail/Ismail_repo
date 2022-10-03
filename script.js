document.getElementById("drop1").onclick = function() {
  document.getElementById("dropdow-content1").classList.toggle("show");
}

document.getElementById("drop2").onclick = function() {
  document.getElementById("dropdow-content2").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.drop1')) {
    var dropdowns1 = document.getElementsByClassName("dropdown-list1");
    var i;
    for (i = 0; i < dropdowns1.length; i++) {
      var openDropdown1 = dropdowns1[i];
      if (openDropdown1.classList.contains('show')) {
        openDropdown1.classList.remove('show');
      }
    }
  }
  if (!event.target.matches('.drop2')) {
    var dropdowns2 = document.getElementsByClassName("dropdown-list2");
    var i;
    for (i = 0; i < dropdowns2.length; i++) {
      var openDropdown2 = dropdowns2[i];
      if (openDropdown2.classList.contains('show')) {
        openDropdown2.classList.remove('show');
      }
    }
  }
}

const mainNav = document.querySelector(".main-nav");
const btnToggle = document.querySelector(".btn-menu");
const btnToggleClose = document.querySelector(".btn-close-menu");

btnToggle.addEventListener("click", () =>{
  const visibility = mainNav.getAttribute("data-visible");

  if(visibility === "false") {
    mainNav.setAttribute("data-visible", true);
  }
})

btnToggleClose.addEventListener("click", () =>{
  const visibility = mainNav.getAttribute("data-visible");
  if(visibility === "true"){
    mainNav.setAttribute("data-visible", false);
  }
})