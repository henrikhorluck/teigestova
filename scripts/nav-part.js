//Responsive nav-bar

var navigation_bar = document.getElementById('navigation_bar')

navigation_bar.innerHTML = `<div id="navbar">
        <i class="fas fa-bars"></i>
  </div>

    <ul id="dropdown">
        <li><a href="#">Hjem</a></li>
        <li><a href="#">Om oss</a></li>
        <li id="hunder"><a href="#">Våre hunder<i class="fas fa-angle-down"></i></a>
              <ul id="under_hunder">
                    <li><a href="#">Goldie</a></li>
                    <li><a href="#">Ariana</a></li>
                    <li><a href="#">Whitney</a></li>
                    <li><a href="#">Valper</a></li>
                    <li><a href="#">Aktiviteter</a></li>
              </ul>

        </li>
        <li><a href="#">Bichon Havanais</a></li>
        <li><a href="#">Kontakt</a></li>
    </ul>`
var dropdown = document.getElementById('dropdown')
// TODO: ha landing page for våre hunder
/* Åpner navbaren når den er liten */
document.getElementById('navbar').addEventListener('click', function() {
  if (dropdown.style.display == "block") {
    dropdown.style.display = "none"
  } else {
    dropdown.style.display = "block"
  }
});

hunder = document.getElementById('hunder')
under_hunder = document.getElementById('under_hunder')

/* Sjekker når nettleservinduet blir resiza, og endrer display-modusen til
* dropdownen, slik at den vises riktig
*/
window.onresize = function (){
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  if (w > 825){
    dropdown.style.display = "block";
  } else if (w <= 825){
    dropdown.style.display = "none"
  }
  under_hunder.style.display = "none"
}
/*
nav ul li:hover ul {
  display: block;
}
*/

hunder.addEventListener('click', function (){
  if (under_hunder.style.display != 'block') {
    under_hunder.style.display = 'block';
  } else {
    under_hunder.style.display = "none";
  }
})
