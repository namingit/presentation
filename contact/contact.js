
// Get the modal
var modal = document.querySelector('.modal');

// Get the button that opens the modal
var contactBtn = document.querySelector('.contact');

// Get the <span> element that closes the modal
var closeBtn = document.querySelector('.close-btn');

// When the user clicks on the button, open the modal
contactBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
