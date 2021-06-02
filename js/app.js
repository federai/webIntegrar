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

// var img = document.getElementById("planSites");
// img.addEventListener ('click',()=>{
  
// })

document.getElementById('tableroscrum').addEventListener('click', function() {
  window.open( 'http://integrar.claro.amx/scrum')
}, false);


document.getElementById('implapedia').addEventListener('click', function() {
  window.open('http://integrar.claro.amx/implapedia')
}, false);

document.getElementById('catalogo').addEventListener('click', function() {
  window.open('https://claro.sytex.io/catalogo/')
}, false);

document.getElementById('planes').addEventListener('click', function() {
  window.open('http://integrar.claro.amx/planes')
}, false);

document.getElementById('tableromando').addEventListener('click', function() {
  window.open('http://integrar.claro.amx/tableromando')
}, false);

document.getElementById('5G').addEventListener('click', function() {
  window.open('http://integrar.claro.amx/5G')
}, false);

