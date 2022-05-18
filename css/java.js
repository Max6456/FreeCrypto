var vid = document.getElementById("fon");


function playVid() {
    vid.style.opacity = 1;
    vid.play();
    vid.requestFullscreen();
} 