
var navbar = document.getElementById("navigation_bar");
//lagrer hvor langt fra toppen av browservinduet navbar er
var sticky = navbar.offsetTop;

function scroll() {
  //hvis man har scrollet lenger enn navbar er fra toppen
  if (window.pageYOffset >= sticky) {
    just_blocking.style.height = "73px";
    navbar.classList.add("sticky") //legger til class="sticky" i html
    //.sticky er allerede lagt til i CSS filen.
  }
  else {
    navbar.classList.remove("sticky") //ellers fjerner
    just_blocking.style.height = "0px";
  }
}

//funksjonen kjører når man scroller
window.onscroll = function() {
  scroll()
};
