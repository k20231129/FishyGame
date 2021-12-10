//Scene Setup
const TITLE = 0;
const CHARACTER_SELECT = 1
const GAME_ON = 2;
const INSTRUCTIONS = 3;
const END_GAME = 4;
const PAUSED = 5;
const WIN = 6;

let currentScene = TITLE;
let playerPicker = 1;
let pauseOrResume = 1;

let yourScore = 0;
let highScore = 0;
let playerChoice;

//Init Images
let otherFish1Img;
let otherFish2Img;
let otherFish3Img;
let otherFish4Img;

let playerOneAnimation;
let playerTwoAnimation;
let playerThreeAnimation;

let backgroundImage;
let backgroundImage1;
let backgroundImage2;

function preload() {
  playerOneAnimation = loadAnimation('Images/playerOne/Player1Fish_01.png', 'Images/playerOne/Player1Fish_18.png');
  playerTwoAnimation = loadAnimation('Images/playerTwo/Player2Fish_01.png', 'Images/playerTwo/Player2Fish_18.png');
  playerThreeAnimation = loadAnimation('Images/playerThree/Player3Fish_01.png', 'Images/playerThree/Player3Fish_12.png');
  otherFish1Img = loadImage('Images/otherFish1.png');
  otherFish2Img = loadImage('Images/otherFish2.png');
  otherFish3Img = loadImage('Images/otherFish3.png');
  otherFish4Img = loadImage('Images/otherFish4.png');
  backgroundImage1 = loadImage("Images/lightbackground.png");
  backgroundImage2 = loadImage("Images/background.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  initTitleScreen();
  initInstructions();
  initCharacterSelect();
  initEndScreen();
  initPauseScreen();
  initWin();
  backgroundImage = backgroundImage1;
}

function draw() {
  displayBackgroundImage();
  sceneSwitch();
}

function sceneSwitch(){
  switch (currentScene) {
    case TITLE: //0
      titleScreen();
      break;
    case CHARACTER_SELECT: //1
      displayCharacterSelect();
      break;
    case GAME_ON: //2
      runGame();
      break;
    case INSTRUCTIONS: //3
      displayInstructions();
      break;
    case END_GAME: //4
      displayEndScreen();
      break;
    case PAUSED: //5
      pauseScreen();
      break;
    case WIN: //6
      displayWin();
      break;
  }
}

function displayBackgroundImage() {
  image(backgroundImage, 0, 0, windowWidth, windowHeight);
}

function characterSelect() {
  currentScene = CHARACTER_SELECT //1
  document.getElementById("playButton").style.display = "none";
  document.getElementById("instructionButton").style.display = "none";
  document.getElementById("startButton").style.display = "block";
  document.getElementById("characterButton").style.display = "block";
  document.getElementById("playAgainButton").style.display = "none";
}

function startGame() {
  if (currentScene == CHARACTER_SELECT) {
    initGame();
    currentScene = GAME_ON //2
    document.getElementById("startButton").style.display = "none";
    document.getElementById("characterButton").style.display = "none";
    backgroundImage = backgroundImage2;
  }
}

function instructionPage() {
  if (currentScene == TITLE) {
    currentScene = INSTRUCTIONS //3
    document.getElementById("playButton").style.display = "none";
    document.getElementById("instructionButton").style.display = "none";
    document.getElementById("backButton").style.display = "block";
  }
}

function backToTitleScreen() {
  currentScene = TITLE //0
  document.getElementById("backButton").style.display = "none";
  document.getElementById("startButton").style.display = "none";
  document.getElementById("characterButton").style.display = "none";
  document.getElementById("playAgainButton").style.display = "none";
  document.getElementById("instructionButton").style.display = "block";
  document.getElementById("playButton").style.display = "block";
  backgroundImage = backgroundImage1;
}

function changeCharacter() {
  if (playerPicker % 3 === 1) {
    document.getElementById("characterButton").style.backgroundImage = "url('Images/playerThree.png')";
    document.getElementById("characterButton").style.marginTop = "0px";
    document.getElementById("characterButton").style.marginLeft = "20px";
    document.getElementById("characterButton").style.paddingBottom = "100px";
    playerPicker++

  }
  else if (playerPicker % 3 === 2) {
    document.getElementById("characterButton").style.backgroundImage = "url('Images/playerTwo.png')";
    document.getElementById("characterButton").style.marginTop = "50px";
    document.getElementById("characterButton").style.paddingBottom = "50px";
    playerPicker++
  }

  else if (playerPicker % 3 === 0) {
    document.getElementById("characterButton").style.backgroundImage = "url('Images/playerOne.png')";
    document.getElementById("characterButton").style.marginTop = "0px";
    document.getElementById("characterButton").style.marginLeft = "80px";
    document.getElementById("characterButton").style.paddingBottom = "100px";
    playerPicker++
  }
}

function gameOver() {
  if (currentScene == GAME_ON) {
    currentScene = END_GAME //4
  }
}

function pause() {
  if (currentScene == GAME_ON || currentScene == PAUSED) {
    if (pauseOrResume % 2 === 1) {
      document.getElementById("pauseButton").style.backgroundImage = "url('Images/resume.png')";
      currentScene = PAUSED; //5
    }
    else if (pauseOrResume % 2 === 0) {
      currentScene = GAME_ON; //2
      document.getElementById("pauseButton").style.backgroundImage = "url('Images/pause.png')";
    }
    pauseOrResume++
  }
}

function win() {
  currentScene = WIN; //6
}

