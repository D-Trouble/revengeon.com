const frames = [
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

const speed = 150

let index = 0

function animation() {
    setInterval(function(){ 
        document.getElementById("player").src = frames[index]
        index = (index + 1)  % (frames.length)
    }, speed)
}
