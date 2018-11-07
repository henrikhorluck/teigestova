/* All the variables and constants below are used to call the DOM elements necessary for the lightbox */
const slideshow_images = document.getElementsByClassName('front_page_images');
const image_header = document.getElementById('imageHeader');
const image_welcome = document.getElementById('imageWelcome');
const image_goldie = document.getElementById('goldie');
const image_ariana = document.getElementById('ariana');
const image_whitney = document.getElementById('whitney');
const image_monochrome = document.getElementById('imageMonochrome');
const image_client = document.getElementById('imageClient');
var image_viewer = document.getElementById('imageView');

/* The following function blocks the default style settings for the #imageView div.
Since the default style had 'display: none;', the div element now displays. */
function open_image() {
    image_viewer.style.display = "block";
}

/* This function is called by the 'X' button, which only displays when open_image() is called.
close_image() changes the 'display' attribute of the div element back to it's default value of 'none'.*/
function close_image() {
    image_viewer.style.display = "none";
}

/* The variable 'images' is used to scroll through through, and change the CSS through change_image and current_image respectively. */
var images = 1;
full_image(images);

/* Adds 1 to the variable 'images', thereby deciding which value of n will be displayed in full:image(n) */
function change_image(n) {
    full_image(images += n);
}

/* Calls the full_image function and setting 'images' as the value for 'n' */
function current_image(n) {
    full_image(images = n);
}

/* The following function gets the elements with class 'fullSizeImage',
and loops through all the images with the class and blocking every image with a n value higher or lower
than the one which is currently the 'images' value. [images-1] is necessary since images starts at 1
and the loop starts at 0. */
function full_image(n) {
    var full_size = document.getElementsByClassName('fullSizeImage')
    if (n > full_size.length) {
    }
    if (n < 1) {
    }
    for (var i = 0; i < full_size.length; i++) {
        full_size[i].style.display = "none";
    }
    full_size[images - 1].style.display = "block";
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