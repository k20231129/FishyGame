function initPauseScreen(){
    pausedImg = loadImage('Images/Paused.png');
}

function pauseScreen(){
    let width = pausedImg.width/2
    let height = pausedImg.height/2
    image(pausedImg, windowWidth/2-width/2, 100, width, height);
}