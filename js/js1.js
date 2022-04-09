function home() {
	document.getElementById('home').style.display = "block"
	document.getElementById("home1").style.borderBottom = "2px solid red";
	document.getElementById('all-songs').style.display = "none"
	document.getElementById("all-songs1").style.borderBottom = "0px solid red";
	document.getElementById('about').style.display = "none"
	document.getElementById("about1").style.borderBottom = "0px solid red";
	document.getElementById('myModal1').style.display = "none";
	document.getElementById('myModal2').style.display = "none";
	document.getElementById('myModal3').style.display = "none";
	document.getElementById('myModal4').style.display = "none";
	document.getElementById('myModal9').style.display = "none";
	document.getElementById('myModal10').style.display = "none";
	document.getElementById('myModal11').style.display = "none";
	document.getElementById('myModal12').style.display = "none";
}

function allsongs() {
	document.getElementById('home').style.display = "none"
	document.getElementById("home1").style.borderBottom = "0px solid red";
	document.getElementById('all-songs').style.display = "block"
	document.getElementById("all-songs1").style.borderBottom = "2px solid red";
	document.getElementById('about').style.display = "none"
	document.getElementById("about1").style.borderBottom = "0px solid red";
	document.getElementById('myModal1').style.display = "none";
	document.getElementById('myModal2').style.display = "none";
	document.getElementById('myModal3').style.display = "none";
	document.getElementById('myModal4').style.display = "none";
	document.getElementById('myModal9').style.display = "none";
	document.getElementById('myModal10').style.display = "none";
	document.getElementById('myModal11').style.display = "none";
	document.getElementById('myModal12').style.display = "none";
}

function about() {
	document.getElementById('home').style.display = "none"
	document.getElementById("home1").style.borderBottom = "0px solid red";
	document.getElementById('all-songs').style.display = "none"
	document.getElementById("all-songs1").style.borderBottom = "0px solid red";
	document.getElementById('about').style.display = "block"
	document.getElementById("about1").style.borderBottom = "2px solid red";
	document.getElementById('myModal1').style.display = "none";
	document.getElementById('myModal2').style.display = "none";
	document.getElementById('myModal3').style.display = "none";
	document.getElementById('myModal4').style.display = "none";
	document.getElementById('myModal9').style.display = "none";
	document.getElementById('myModal10').style.display = "none";
	document.getElementById('myModal11').style.display = "none";
	document.getElementById('myModal12').style.display = "none";
}

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    // var div = ul.d  
    var div = ul.getElementsByClassName("f");
    li = ul.getElementsByClassName("t");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("p")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            // li[i].style.display = "";
            div[i].style.display = "";
        } else {
            // li[i].style.display = "none";
            div[i].style.display = "none";
        }
    }
}