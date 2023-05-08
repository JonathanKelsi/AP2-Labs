// Demonstration of getElementById and onClick event to display an alert
var btnFoo = document.getElementById("foo");

btnFoo.onclick = function() {
    alert("Barrrr");
}

// Demonstration of getElementsByTagName and onmouseover/onmouseout events to change background color
var p = document.getElementsByTagName("p");

p[0].onmouseover = function() {
    p[0].style.backgroundColor = "red";
}

p[0].onmouseout = function() {
    p[0].style.backgroundColor = "blue";
}

// Using onfocus/onblur/onkeydown/onkeyup events to change div's innerHTML
var divBaz = document.getElementById("baz")
var inputCaz = document.getElementById("caz");

inputCaz.onfocus = function() {
    divBaz.innerHTML = "Focused";
}

inputCaz.onblur = function() {
    divBaz.innerHTML = "Blurred";
}

inputCaz.onkeydown = function() {
    divBaz.innerHTML = "Keydown";
}

inputCaz.onkeyup = function() {
    divBaz.innerHTML = "Keyup";
}

// Using onchange event to change div's innerHTML
var selectBar = document.getElementById("bar");
var divQux = document.getElementById("qux");

selectBar.onchange = function() {
    divQux.innerHTML = "Changed";
}

