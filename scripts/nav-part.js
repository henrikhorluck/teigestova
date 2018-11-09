//Responsive nav-bar

var navigation_bar = document.getElementById('navigation_bar')

navigation_bar.innerHTML = `<div id="navbar">
        <i class="fas fa-bars"></i>
  </div>

    <ul id="dropdown">
        <li><a href="teigestova.html">Hjem</a></li>
        <li><a href="about.html">Om oss</a></li>
        <li id="hunder"><a href="ourDogs.html">Våre hunder<i class="fas fa-angle-down"></i></a>
              <ul id="under_hunder">
                    <li><a href="ourDogsParent.html?goldie">Goldie</a></li>
                    <li><a href="ourDogsParent.html?ariana">Ariana</a></li>
                    <li><a href="ourDogsParent.html?whitney">Whitney</a></li>
                    <li><a href="ourDogsPuppies.html">Valper</a></li>
                    <li><a href="ourDogsActivities.html">Aktiviteter</a></li>
              </ul>

        </li>
        <li><a href="bichonHavanais.html">Bichon Havanais</a></li>
        <li><a href="contact.html">Kontakt</a></li>
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
  if (w > 760){
    dropdown.style.display = "block";
  } else if (w <= 760){
    dropdown.style.display = "none"
  }
}