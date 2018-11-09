//Responsive nav-bar

var navigation_bar = document.getElementById('navigation_bar')

navigation_bar.innerHTML = `<div id="navbar">
        <i class="fas fa-bars"></i>
  </div>

    <ul id="dropdown">
        <li><a href="teigestova.html">Hjem</a></li>
        <li><a href="about.html">Om oss</a></li>
        <li id="hunder"><a id="ourDogs_link" href="#">Våre hunder<i class="fas fa-angle-down"></i></a>
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

function open_dropdown() {
  if (dropdown.style.display == "block") {
    dropdown.style.display = "none"
  } else {
    dropdown.style.display = "block"
  }
};

hunder = document.getElementById('hunder')
under_hunder = document.getElementById('under_hunder')
ourDogs_link = document.getElementById('ourDogs_link')

/* Sjekker når nettleservinduet blir resiza, og endrer display-modusen til
* dropdownen, slik at den vises riktig
*/
function ourDogs_badlink(){
  ourDogs_link.addEventListener('click', function(){
    ourDogs_link.setAttribute('href', "ourDogs.html")
  })
  ourDogs_link.setAttribute('onclick', 'ourDogs_badlink()')
  return false
}


function update_navbar_click(){ //LEGG TIL OPTIONAL VALUE, SLIK AT DEN IKKE HENTER INN VERDI TO GANGER
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  if (w > 760){
    document.getElementById('navbar').removeEventListener('click', open_dropdown)
    ourDogs_link.setAttribute('onclick', 'none')
    ourDogs_link.setAttribute('href', 'ourDogs.html')

  } else if (w <= 760){
    document.getElementById('navbar').addEventListener('click', open_dropdown)
    ourDogs_link.setAttribute('onclick', 'ourDogs_badlink(); return false;')
    if (dropdown.style.display === 'none'){
      ourDogs_link.setAttribute('href', "#")
    }
  }
}
update_navbar_click()

window.onresize = function (){
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  if (w > 760){
    dropdown.style.display = "block";
  } else if (w <= 760){
    dropdown.style.display = "none"
  }
  update_navbar_click()
}

hunder.addEventListener('click', function (){	
  if (under_hunder.style.display != 'block') {	
    under_hunder.style.display = 'block';	
  } else {	
    under_hunder.style.display = "none";	
  }	
})