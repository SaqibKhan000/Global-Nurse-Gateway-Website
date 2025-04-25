    // FOR HAM BURGER MENU ///////////////////////
let isMenu = true;
function changeIcon(){
    let menu = document.querySelector("#menu");
    if(isMenu){
        menu.className = "fa-solid fa-xmark";
        isMenu = false;
    }else{
        menu.className = "ri-menu-line";
        isMenu = true;
    }
}


// FOR SCROLL /////////////////////////
window.addEventListener("scroll", function () {
    let logo = document.querySelector("#logo");
  
    if (window.innerWidth >= 992) { 
      if (window.scrollY > 50) {
        logo.style.width = "170px";
      } else {
        logo.style.width = "300px";
      }
    }
  });