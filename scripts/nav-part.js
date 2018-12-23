//Responsive nav-bar

const navigation_bar = document.getElementsByTagName('nav')[0]
const mobileBreakpoint = 1000;

navigation_bar.innerHTML = `<div id="navbar">
        <div>≡</div>
  </div>
    <ul id="dropdown">
        <li><a href="teigestova.html">Hjem</a></li>
        <li><a href="about.html">Om oss</a></li>
        <li id="hunder"><a id="ourDogs_link" href="#">Våre hunder ▾</a>
              <ul>
                    <li class="under_hunder"><a href="ourDogs.html?goldie">Goldie</a></li>
                    <li class="under_hunder"><a href="ourDogs.html?arianna">Ariana</a></li>
                    <li class="under_hunder"><a href="ourDogs.html?whitney">Whitney</a></li>
                    <li class="under_hunder"><a href="ourDogsPuppies.html">Valper</a></li>
                    <li class="under_hunder"><a href="ourDogsActivities.html">Aktiviteter</a></li>
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
under_hunder = document.getElementsByClassName('under_hunder')
ourDogs_link = document.getElementById('ourDogs_link')


function ourDogs_badlink(){
  ourDogs_link.addEventListener('click', function(){
    ourDogs_link.setAttribute('href', "ourDogs.html")
  })
  ourDogs_link.setAttribute('onclick', 'ourDogs_badlink()')
  return false
}

function openOurDogs() {
  for (let i = 0; i < under_hunder.length; i++) {
      under_hunder[i].style.height = '72px';	
  }
}
  
window.addEventListener('resize', update_navbar)
function update_navbar(){
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  if (w > mobileBreakpoint){
    // So you can't open the navbar on large screen
    document.getElementById('navbar').removeEventListener('click', open_dropdown)
    // so you can't click to open the sub-menu whe the screen is wide
    hunder.removeEventListener('click', openOurDogs)
    // So you can click the 'Våre Hunder' when widescreen
    ourDogs_link.setAttribute('onclick', 'none')
    ourDogs_link.setAttribute('href', 'ourDogs.html')
    // opens the mobile menu
    dropdown.style.display = "block";
  } else if (w <= mobileBreakpoint){
    // opening navbar
    document.getElementById('navbar').addEventListener('click', open_dropdown)
    // can open the sub-menu, and the click on the same button again, also doesn't reload page
    ourDogs_link.setAttribute('onclick', 'openOurDogs(); ourDogs_badlink(); return false;')
    // closes the mobile-menu
    dropdown.style.display = "none"
  }
  // resets the closed sub-menu
  if (under_hunder[0].style.height == '72px') {	
    for (let i = 0; i < under_hunder.length; i++) {
      under_hunder[i].style.height = '0';  
    }
  }
  //resets the linking, so you can open the sub-menu again
  
}
update_navbar()