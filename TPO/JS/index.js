var myIndex = 0;
var lGira = true;

carousel(myIndex);

function carousel(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //if (n > x.length) {myIndex = 0}
    console.log(lGira)
    
    n = myIndex;
    if (n < 0) { myIndex = x.length-1;
        console.log(n);
        console.log(myIndex);
        n = myIndex;
    } else if(n > x.length-1){myIndex = 0;
        console.log(n);
        console.log(myIndex);
        n = myIndex;

    }
     else {
        myIndex = n;
        console.log(n);
        console.log(myIndex);
    }
    x[myIndex].style.display = "block";
    dots[myIndex].className += " active";
    if (lGira) {
        myIndex++;
        setTimeout(carousel, 4000);
    }
}


// Thumbnail image controls
function currentSlide(n) {
    lGira = false;
    carousel(myIndex = n);
}

// Next/previous controls
function plusSlides(n) {
    lGira = false;
    carousel(myIndex += n);
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('detalleModal1');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.getElementById('detalleModal2');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.getElementById('detalleModal3');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.getElementById('detalleModal4');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Por favor completar el campo!!!");
      return false;
    }
}

function my_Function() {
    var x = document.getElementById("myForm");
    if (x.className.indexOf("registro") == -1) {
        x.className += " registro";
    } else { 
        x.className = x.className.replace(" registro", "");
    }
}