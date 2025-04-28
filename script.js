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






// FOR FORMS //////////////////////////
let radio1 = document.querySelector("#signupradio1");
let radio2 = document.querySelector("#signupradio2");
let formRow = document.querySelector(".signUpSecondSection #firstRow");
let otherFormRow = document.querySelector(".signUpSecondSection #otherRow");

function showForm() {
    formRow.classList.remove("displayNone");
    formRow.classList.add("displayBlock");
    otherFormRow.classList.remove("displayBlock");
    otherFormRow.classList.add("displayNone");
}

function showOtherForm() {
    otherFormRow.classList.remove("displayNone");
    otherFormRow.classList.add("displayBlock");
    formRow.classList.remove("displayBlock");
    formRow.classList.add("displayNone");
}


window.onload = showForm;

radio1.addEventListener("click", showForm);
radio2.addEventListener("click", showOtherForm);
