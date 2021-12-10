let otherFish = []; 

function initGame(playerPicker) {
    otherFish = [];
    for (let i = 0; i < 5; i++) { //5
        otherFish.push(new OtherFishOne(otherFish1Img));
        otherFish.push(new OtherFishTwo(otherFish2Img));
        otherFish.push(new OtherFishThree(otherFish3Img));
        otherFish.push(new OtherFishFour(otherFish4Img));
    }
    playerOne = new PlayerFish(playerOneAnimation);
    playerTwo = new PlayerFish(playerTwoAnimation);
    playerThree = new PlayerFish(playerThreeAnimation);

}

function determinePlayer(){
    if (playerPicker%3 == 1){
        playerOne.display();
        playerChoice = playerOne;
    }
    if (playerPicker%3 == 2){
        playerThree.display();
        playerChoice = playerThree;
    }
    if (playerPicker%3 == 0){
        playerTwo.display();
        playerChoice = playerTwo;
    }
    return playerChoice;
}

function displayFish(){
    for (let i = 0; i < otherFish.length; i++) { 
        let fish = otherFish[i];
        fish.display();
    }
}

function winGame(){
    for (let i = 0; i < otherFish.length; i++) { 
        let fish = otherFish[i];
        if (playerChoice.h >= 400){
            yourScore = playerChoice.points;
                if (yourScore > highScore){
                    highScore = yourScore; 
                }
            win();
        }
    }
}

function checkCollision(){
    for (let i = 0; i < otherFish.length; i++) { 
        let fish = otherFish[i];
        if (fish.isColliding(playerChoice) == true) {
            if (playerChoice.w*playerChoice.h > fish.w*fish.h){
                playerChoice.collectPoints(fish); 
                fish.respawn();
            }
            else{
                yourScore = playerChoice.points;
                if (yourScore > highScore){
                    highScore = yourScore; 
                }
                gameOver();
            }
            
        }
    }
}

function runGame() {
    determinePlayer();
    displayFish();
    winGame();
    checkCollision();
}
