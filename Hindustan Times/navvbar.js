function openNav() {
    document.getElementById("main").style.width = "350px";
    document.getElementById("nmain").style.marginLeft = "350px";
    document.getElementById("main").style.paddingTop="200px" ;
  }
  
  function closeNav() {
    document.getElementById("main").style.width = "0";
    document.getElementById("nmain").style.marginLeft= "0";
    document.getElementById("main").style.display="block" ;
  }
  



  window.onscroll = function() {myFunction()};

var navbar = document.querySelector("#nmain>button");
var sticky = navbar.offsetTop;
navbar.style.position="fixed";
navbar.style.backgroundColor="rgb(1,30,41)";

var wetH = document.querySelector(".toggle1>p");
wetH.style.margin="10px";

var weH = document.querySelector(".toggle1>p+p");
weH.style.margin="10px";

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}