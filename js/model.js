// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal9 = document.getElementById("myModal9");
var modal10 = document.getElementById("myModal10");
var modal11 = document.getElementById("myModal11");
var modal12 = document.getElementById("myModal12");

// Get the button that opens the modal
var btn1 = document.getElementById("c1");
var btn2 = document.getElementById("c2");
var btn3 = document.getElementById("c3");
var btn4 = document.getElementById("c4");
var btn9 = document.getElementById("c9");
var btn10 = document.getElementById("c10");
var btn11 = document.getElementById("c11");
var btn12 = document.getElementById("c12");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("1")[0];
var span2 = document.getElementsByClassName("2")[0];
var span3 = document.getElementsByClassName("3")[0];
var span4 = document.getElementsByClassName("4")[0];
var span9 = document.getElementsByClassName("9")[0];
var span10 = document.getElementsByClassName("10")[0];
var span11 = document.getElementsByClassName("11")[0];
var span12 = document.getElementsByClassName("12")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
  document.getElementById('home').style.display = "none";
  document.getElementById('bg').style.background = "linear-gradient(to bottom, #995C20 , #0F5D08)";
  document.getElementById('play-bar').style.background = "linear-gradient(to bottom, #995C20, 15px , #0F5D08)";}
btn2.onclick = function() {
  modal2.style.display = "block";
  document.getElementById('home').style.display = "none";
  document.getElementById('bg').style.background = "linear-gradient(to bottom, #3B9AD1 , #06141B)";
  document.getElementById('play-bar').style.background = "linear-gradient(to bottom, #3B9AD1, 15px , #06141B)";}
btn3.onclick = function() {
  modal3.style.display = "block";
  document.getElementById('home').style.display = "none";
  document.getElementById('bg').style.background = "linear-gradient(to bottom, #BF08B9 , #3D003D)";
  document.getElementById('play-bar').style.background = "linear-gradient(to bottom, #BF08B9, 15px , #3D003D)";}
btn4.onclick = function() {
  modal4.style.display = "block";
  document.getElementById('home').style.display = "none";
  document.getElementById('bg').style.background = "linear-gradient(to bottom, #E1A2B8 , #9F2BC1)";
  document.getElementById('play-bar').style.background = "linear-gradient(to bottom, #E1A2B8, 15px , #9F2BC1)";}
btn9.onclick = function() {
  modal9.style.display = "block";
  document.getElementById('home').style.display = "none";
  document.getElementById('bg').style.background = "linear-gradient(to bottom, #FF9F4A , #FF3C83)";
  document.getElementById('play-bar').style.background = "linear-gradient(to bottom, #FF9F4A, 15px, #FF3C83)";}
btn10.onclick = function() {
  modal10.style.display = "block";
  document.getElementById('home').style.display = "none";
  document.getElementById('bg').style.background = "linear-gradient(to bottom, #FED54A , #FF9347)";
  document.getElementById('play-bar').style.background = "linear-gradient(to bottom, #FED54A, 15px , #FF9347)";}
btn11.onclick = function() {
  modal11.style.display = "block";
  document.getElementById('home').style.display = "none";
  document.getElementById('bg').style.background = "linear-gradient(to bottom, #FF4331 , #D31A50)";
  document.getElementById('play-bar').style.background = "linear-gradient(to bottom, #FF4331, 15px , #D31A50)";}
btn12.onclick = function() {
  modal12.style.display = "block";
  document.getElementById('home').style.display = "none";
  document.getElementById('bg').style.background = "linear-gradient(to bottom, #FD297A , #9424F0)";
  document.getElementById('play-bar').style.background = "linear-gradient(to bottom, #FD297A, 15px , #9424F0)";}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
  document.getElementById('home').style.display = "block";}
span2.onclick = function() {
  modal2.style.display = "none";
  document.getElementById('home').style.display = "block";}
span3.onclick = function() {
  modal3.style.display = "none";
  document.getElementById('home').style.display = "block";}
span4.onclick = function() {
  modal4.style.display = "none";
  document.getElementById('home').style.display = "block";}
span9.onclick = function() {
  modal9.style.display = "none";
  document.getElementById('home').style.display = "block";}
span10.onclick = function() {
  modal10.style.display = "none";
  document.getElementById('home').style.display = "block";}
span11.onclick = function() {
  modal11.style.display = "none";
  document.getElementById('home').style.display = "block";}
span12.onclick = function() {
  modal12.style.display = "none";
  document.getElementById('home').style.display = "block";}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  // if (event.target == modal1) {
  //   modal1.style.display = "none";
  //   modal2.style.display = "none";
  //   document.getElementById('home').style.display = "block";
  // }
  switch(event.target) {
    case modal1:
    case modal2:
    case modal3:
    case modal4:
    case modal9:
    case modal10:
    case modal11:
    case modal12:
      modal1.style.display = "none";
      modal2.style.display = "none";
      modal3.style.display = "none";
      modal4.style.display = "none";
      modal9.style.display = "none";
      modal10.style.display = "none";
      modal11.style.display = "none";
      modal12.style.display = "none";
      document.getElementById('home').style.display = "block";
      break;
  }
}