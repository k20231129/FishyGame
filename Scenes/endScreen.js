function initEndScreen(){
    yourScoreImg = loadImage('Images/YourScore.png');
    highScoreImg = loadImage('Images/HighScore.png');
}

function displayEndScreen(){
    document.getElementById("playAgainButton").style.display = "block";
    let yourScoreImgWidth = yourScoreImg.width/3
    let yourScoreImgHeight = yourScoreImg.height/3
    let highScoreImgWidth = highScoreImg.width/5
    let highScoreImgHeight = highScoreImg.height/5

    fill(255);
    textSize(120);
    textFont('Georgia');
    let yourScoreWidth = textWidth(yourScore +"")
    let highScoreWidth = textWidth(highScore +"")

    image(yourScoreImg, windowWidth/2-yourScoreImgWidth/2, 100, yourScoreImgWidth, yourScoreImgHeight);
    image(highScoreImg, windowWidth/2-highScoreImgWidth/2-highScoreWidth/2, 370, highScoreImgWidth, highScoreImgHeight)

    text(yourScore + "", windowWidth/2 - yourScoreWidth/2, 320);
    textSize(70);
    text(highScore + "", windowWidth/2 + highScoreImgWidth/2 - highScoreWidth/2 + 5, 430)
}

