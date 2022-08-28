function openNav() {
    document.getElementById("main").style.width = "350px";
    // document.getElementById("nmain").style.marginLeft = "350px";
    document.getElementById("main").style.paddingTop="200px" ;
  }
  
  function closeNav() {
    document.getElementById("main").style.width = "0";
    document.getElementById("nmain").style.marginLeft= "0";
    document.getElementById("main").style.display="block" ;
  }
  

document.querySelector("#suman").addEventListener("click" , sumFun);

function sumFun(event)
{
  event.preventDefault();
  window.location.href="Login&Signup.html"
}


