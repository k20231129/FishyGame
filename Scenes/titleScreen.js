function initTitleScreen(){
    title = loadImage('Images/Fishy.png');
}

function titleScreen(){
    let width = title.width/2
    let height = title.height/2
    image(title, windowWidth/2-width/2, 100, width, height);
    document.getElementById("pauseButton").style.backgroundImage = "url('Images/pause.png')";
}