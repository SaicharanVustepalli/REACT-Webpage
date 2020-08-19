<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}

* {
  box-sizing: border-box;
}

/* Create a column layout with Flexbox */
.row {
  display: flex;
}

/* Left column (menu) */
.left {
  flex: 35%;
  padding: 15px 0;
}

.left h2 {
  padding-left: 8px;
}

/* Right column (page content) */
.right {
  flex: 65%;
  padding: 15px;
}

/* Style the search box */
#mySearch {
  width: 100%;
  font-size: 18px;
  padding: 11px;
  border: 1px solid #ddd;
}

/* Style the navigation menu inside the left column */
#myMenu {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

#myMenu li a {
  padding: 12px;
  text-decoration: none;
  color: black;
  display: block
}

#myMenu li a:hover {
  background-color: #eee;
}
</style>
</head>
<body>


<div class="row">
  <div class="left" style="background-color:#bbb;">
    <h2>Menu</h2>
    <input type="text" id="mySearch" onkeyup="myFunction()" placeholder="Search.." title="Type in a category">
    <ul id="myMenu">
      <li><a href="allrestaurants.html"> All </a></li>
      <li><a href="chennairestaurants.html">Chennai</a></li>
      <li><a href="delhirestaurants.html">Delhi</a></li>
    </ul>
  </div>
  
  <div class="right" style="background-color:#ddd;">
    <div class="container">
     <div class="box">
        <center><img src="absolutebarbequelogo.jpg" width="160px" height="100px" class="image"></center>
        <a class="detailsbutn" href="details11.html"><center>details</center></a>
        <a class="viewbutn" href="absolutebarbequeoffers.html"><center>offers</center></a>
        <a class="menubutn" href="absolutebarbequemenu.html"><center>Menu</center></a>
        <a class="gallerybutn" href="absolutebarbequeimages.html"><center>Restaurant Gallery</center></a>
        </div>
     <div class="box">
    <center><img src="dineestylogo.jpg" width="180px" height="100px" class="image"></center>
       <a class="detailsbutn" href="details1.html"><center>details</center></a>
        <a class="viewbutn" href="#Hello"><center>offers</center></a>
        <a class="menubutn" href="dineestymenu.html"><center>Menu</center></a>
        <a class="gallerybutn" href="dineestyimages.html"><center>Restaurant Gallery</center></a>
    </div>
     <div class="box">
         <center><img src="grillboxlogo.jpg" width="160px" height="100px" class="image"></center>
     <a class="detailsbutn" href="details13.html"><center>details</center></a>
        <a class="viewbutn" href="grillboxoffers.html"><center>offers</center></a>
        <a class="menubutn" href="grillboxmenu.html"><center>Menu</center></a>
        <a class="gallerybutn" href="grillboximages.html"><center>Restaurant Gallery</center></a>
    </div>
     <div class="box">
     <center><img src="golasizzlerslogo.png" width="160px" height="100px" class="image"></center>
 <a class="detailsbutn" href="details3.html"><center>details</center></a>
        <a class="viewbutn" href="#Hello"><center>offers</center></a>
        <a class="menubutn" href="golasizzlersmenu.html"><center>Menu</center></a>
        <a class="gallerybutn" href="golasizzlersimages.html"><center>Restaurant Gallery</center></a>
    </div>
	 </div>
<div class="container">
     <div class="box">
        <center><img src="annalakshmilogo.jpg" width="180px" height="100px" class="image"></center>
		  <a class="detailsbutn" href="details12.html"><center>details</center></a>
         <a class="viewbutn" href="#Hello"><center>offers</center></a>
        <a class="menubutn" href="annalakshmimenu.html"><center>Menu</center></a>
        <a class="gallerybutn" href="annalakshmiimages.html"><center>Restaurant Gallery</center></a></div>
		
        <div class="box">
       <center><img src="mealodramalogo.jpg" width="180px" height="100px" class="image"></center>
	     <a class="detailsbutn" href="details2.html"><center>details</center></a>
       <a class="viewbutn" href="#Hello"><center>offers</center></a>
        <a class="menubutn" href="mealodramamenu.html"><center>Menu</center></a>
      <a class="gallerybutn" href="mealodramaimages.html"><center>Restaurant Gallery</center></a></div>  
      
        <div class="box">
         <center><img src="pindbawarchilogo.jpg" width="160px" height="100px" class="image"></center>
      <a class="detailsbutn" href="details4.html"><center>details</center></a>
        <a class="viewbutn" href="#Hello"><center>offers</center></a>
        <a class="menubutn" href="pindbawarchimenu.html"><center>Menu</center></a>
        <a class="gallerybutn" href="pindbawarchiimages.html"><center>Restaurant Gallery</center></a>
    </div>
     <div class="box">
     <center><img src="savorylogo.jpg" width="160px" height="100px" class="image"></center>
  <a class="detailsbutn" href="details14.html"><center>details</center></a>
        <a class="viewbutn" href="savoryoffers.html"><center>offers</center></a>
        <a class="menubutn" href="savorymenu.html"><center>Menu</center></a>
        <a class="gallerybutn" href="savoryimages.html"><center>Restaurant Gallery</center></a>
    </div>

    </div>
  </div>
</div>

<script>
function myFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
</script>

</body>
</html>
