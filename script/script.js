//Sticking navigation bar to the top of the screen while scrolling
document.addEventListener('DOMContentLoaded', function(){

window.addEventListener('scroll', myFunction);
var navbar = document.getElementById("nav-bar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
})
//smooth scrolling to different sections using navigation bar tabs
$(document).ready(function(){
    $('body').scrollspy({target: ".nav", offset: 200});
});
//Myth Buster panel togglibg
$(document).ready(function(){
    $("#click-panel").click(function(){
      $("#panel").slideToggle("slow");
    });
});
//mouse pointer change to hand pointer on hoverig over double anfle down icon
function changePointer(){
  document.getElementById("pointer-change").style.cursor = "pointer";
}

 