function loadContent(evt, page) {
  var i;
  var x = document.getElementsByClassName("contentpage");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  
  document.getElementById(page).style.display = "block";
  evt.currentTarget.className += " w3-dark-grey";
}

var mybtn = document.getElementsByClassName("testbtn")[0];
mybtn.click();