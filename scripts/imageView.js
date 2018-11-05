const slideshow_images = document.getElementsByClassName('front_page_images');
const image_header = document.getElementById('imageHeader')
const image_welcome = document.getElementById('imageWelcome')
const image_goldie = document.getElementById('goldie')
const image_ariana = document.getElementById('ariana')
const image_whitney = document.getElementById('whitney')
const image_monochrome = document.getElementById('imageGrayscale')
const image_client = document.getElementById('imageClient')
var image_viewer = document.getElementById('imageView')

/* var pictures = 0 */

var image_array = [image_header, image_welcome, image_goldie, image_ariana, image_whitney, image_monochrome, image_client]
/* Vet ikke om denne arrayen er nødvendig*/

function open_image() {
    image_viewer.style.display = "block";
}

function close_image() {
    image_viewer.style.display = "none";
}

var images = 1
full_image(images);

function change_image(n) {
    full_image(images += n);
}

function current_image(n) {
    full_image(images += n)
}


function full_image () {
    var full_size = document.getElementsByClassName('fullSizeImage')
    if (n > full_size.length) {
    }
    if (n < 1) {
    }
    for (var i = 0; i < full_size.length; i++) {
        full_size[i].style.display = "none";
    }
    full_size[images-1].style.display = "block";
}

/* 
Planen for imageView.js er som følger:
1. Når brukeren trykker på et vilkåerlig bildet skal de blåses opp og mørklegge bakgrunnen.

2. Når dette skjer skal 2 nye submit knapper dukke opp på hver side av bildet. 

3. Disse knappene skal brukes til å bla mellom bildene.
*/

/*
Legg alle bildene inn i array og bla mellom dem gjennom denne.
*/