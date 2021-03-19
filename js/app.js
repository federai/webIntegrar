var myNav = document.getElementById ("navbar");
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-trasparent");
  } else {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
  }
}

var categorie = document.getElementById("categorie1");
console.log(categorie);

// categorie.addEventListener('mouseover',color());
function color(){
  document.getElementById("title").innerHTML="";
}