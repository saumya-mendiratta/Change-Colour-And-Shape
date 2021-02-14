var cur = "square";

var shapes = ["square", "rectangle", "circle", "oval", "triangle-up", "triangle-down", "triangle-topleft", "triangle-bottomleft", "triangle-bottomright", "triangle-right"];

var colors = ["red", "orange", "green", "maroon", "pink", "violet"];


document.getElementById("shape").onclick = function () {
    var rand = shapes[Math.floor(Math.random() * shapes.length)];
    document.getElementById(cur).setAttribute("id", rand);
    cur = rand;
}

document.getElementById("color").onclick = function () {
    var randColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("block").style.backgroundColor = randColor;
}

console.log('heyy')