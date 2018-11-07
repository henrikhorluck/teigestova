//Responsive nav-bar

document.getElementById('navbar').addEventListener('click', function() {
  var x = document.getElementById('dropdown')

  if (x.style.display == "block") {
    x.style.display = "none"
  } else {
    x.style.display="block"
  }
});

function myFunction() {
var x = document.getElementById('dropdown')
x.style.display="block"
}
