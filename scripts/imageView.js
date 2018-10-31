const slideshow_images = document.getElementsByClassName('front_page_images');
var picture = 0

/*slideshow_images.addEventListener("click", full_image)
Denne funksjonen funka ikke, inntil jeg finner ut hvordan jeg fikser dette legger jeg på "onclick" på hvert bilde */

function full_image() {
    alert("It's working!")
}

/* 
Planen for imageView.js er som følger:
1. Når brukeren trykker på et vilkåerlig bildet skal de blåses opp og mørklegge bakgrunnen.

2. Når dette skjer skal 2 nye submit knapper dukke opp på hver side av bildet. 

3. Disse knappene skal brukes til å bla mellom bildene.
*/