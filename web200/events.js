// Page load event
window.addEventListener("load", function () {
    document.getElementById("loadMessage").innerHTML =
        "The page finished loading!";
});


// Click event
document.getElementById("clickButton").addEventListener("click", function () {
    document.getElementById("clickText").innerHTML =
        "You clicked the button!";
});


// Mouseover event
document.getElementById("hoverText").addEventListener("mouseover", function () {
    document.getElementById("hoverText").style.color = "purple";
    document.getElementById("hoverText").innerHTML =
        "You moved the mouse over me!";
});


// Keyup event
document.getElementById("nameInput").addEventListener("keyup", function () {
    document.getElementById("keyText").innerHTML =
        "You typed: " + document.getElementById("nameInput").value;
});


// Extra event - change background color
document.getElementById("colorButton").addEventListener("click", function () {
    document.body.style.backgroundColor = "lightpink";
});
