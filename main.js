var ph = document.getElementById("cool-photo-div");
var title = document.getElementById("title-text");

function neonBorder(element, color) {
    element.style.borderColor = color;
    element.style.boxShadow = "0 0 5vw " + color;
    element.style.backgroundColor = color;
}// neonBorder(element, color)

function neonText(element, color) {
    element.style.color = color;
    element.style;
    title.style.textShadow = "0 0 3vw " + color;
    
}// neonText(element, color)

function startRgb() {
    let i = 0;

    var interval1 = setInterval(() => {
        if(i > 360) i = 0;

        neonBorder(ph, "hsl(" + i + ", 100%, 50%)");
        //neonText(title, "hsl(" + (i) + ", 100%, 50%)");

        i++;
    }, 10);
}// startRgb()

startRgb();