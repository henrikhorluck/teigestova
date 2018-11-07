
var navbar = document.getElementById("nav");
//lagrer hvor langt fra toppen av browservinduet navbar er
var sticky = navbar.offsetTop;

function scroll() {
  //hvis man har scrollet lenger enn navbar er fra toppen
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky") //legger til class="sticky" i html
    //.sticky er allerede lagt til i CSS filen.
  }
  else {
    navbar.classList.remove("sticky") //ellers fjerner
  }
}

//funksjonen kjører når man scroller
window.onscroll = function () {
  scroll()
};
