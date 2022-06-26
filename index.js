var myVar;

function random(max, min) {
    return time = Math.floor(Math.random() * max - min) + min
}

function myFunction() {
    myVar = setTimeout(showPage, random(3200, 900));
    
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}