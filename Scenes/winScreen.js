function initWin(){
    congratulations = loadImage('Images/congratulations.png');
    youWin = loadImage('Images/youWin.png');
    yourScoreImg = loadImage('Images/YourScore.png');
    colon = loadImage('Images/colon.png');
}

function displayWin(){
    document.getElementById("playAgainButton").style.display = "block";
    let congratsWidth = congratulations.width/3
    let congratsHeight = congratulations.height/3
    let winWidth = youWin.width/3
    let winHeight = youWin.height/3
    let yourScoreImgWidth = yourScoreImg.width/6
    let yourScoreImgHeight = yourScoreImg.height/6
    let colonWidth = colon.width/6
    let colonHeight = colon.height/6
   
    image(congratulations, windowWidth/2-congratsWidth/2, 100, congratsWidth, congratsHeight);
    image(youWin, windowWidth/2-winWidth/2, 245, winWidth, winHeight);

    fill(255);
    textSize(50);
    textFont('Georgia');
    let yourScoreWidth = textWidth(yourScore + "")

    image(yourScoreImg, windowWidth/2-yourScoreImgWidth, 385, yourScoreImgWidth, yourScoreImgHeight);
    image(colon, windowWidth/2 + colonWidth/2, 410, colonWidth, colonHeight);

    text(yourScore + "", windowWidth/2-yourScoreWidth/2 + yourScoreImgWidth/2, 430);
}

