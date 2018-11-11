/* All the variables and constants below are used to call the DOM elements necessary for the lightbox */
const slideshow_images = document.getElementsByClassName('front_page_images');
var image_viewer = document.getElementById('imageView');


/* Creates elements containing the full image through a loop */
const image_gallery = [
    "../img/whitney_full.jpg",
    "../img/whitney_full2.jpg",
    "../img/whitney_full3.jpg",
    "../img/whitney_full4.jpg",
    "../img/whitney_full5.jpg",
]

for (var j = 0; j < image_gallery.length; j++) {
    var divContainer = document.createElement('div');
    divContainer.className = 'viewerContent';
    var divElement = document.createElement('div');
    divElement.className = 'fullSizeImage';
    var imgElement = document.createElement('img');
    imgElement.className = 'full_image';
    imgElement.setAttribute('src', image_gallery[j]);
    imgElement.setAttribute('style', 'max-height: 52em; display: block; margin: auto;');
    divElement.appendChild(imgElement);
    divContainer.appendChild(divElement);
    image_viewer.appendChild(divContainer);
}


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
function full_image (n) {
    var full_size = document.getElementsByClassName('fullSizeImage')
    if(images <= 0) {
        images = 1
        return
    }
    if(images > image_gallery.length) {
        images = image_gallery.length
        return
    }
    if (n > full_size.length) {
    }
    if (n < 1) {
    }
    for (var i = 0; i < full_size.length; i++) {
        full_size[i].style.display = "none";
    }
    full_size[images-1].style.display = "block";
}

function fake_form() {
    alert('Vi har mottatt meldingen din og vil svare på den fortløpende.');
    event.preventDefault();
}

/* 
Planen for imageView.js er som følger:
Legg bilder som skal brukes inn i tom array. Send array til modal viewer når det blir called. Fixed.
*/