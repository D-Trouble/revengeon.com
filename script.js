var frames = [
    "anim/1.svg",
    "anim/1.svg",
    "anim/1.svg",
    "anim/1.svg",
    "anim/2.svg",
    "anim/2.svg",
    "anim/3.svg",
    "anim/3.svg",
    "anim/3.svg",
    "anim/3.svg",
    "anim/4.svg"
]

var speed = 150 //in milliseconds

var i = 0 //first frame
var n = frames.length - 1 //frames count

function animation() {
    setInterval(function(){ 
        console.log(i)
        document.getElementById("player").src = frames[i]
        i += 1
        
        if (i > n) {
            i = 0
           }
    }, speed);
}