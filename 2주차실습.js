
var count = 0;

function increase() {
    count++;
    document.getElementById("hug").src = "안아줘요incre.jpg";
    document.getElementById("counter").innerText = count;
}

function decrease() {
    count--;
    document.getElementById("hug").src = "안아줘요decre.png";
    document.getElementById("counter").innerText = count;
}

function reset() {
    count = 0;
    document.getElementById("hug").src = "안아줘요start.png";
    document.getElementById("counter").innerText = count;
}