function initInstructions(){
    instructionTitle = loadImage('Images/Instructions.png');
    instructions = loadImage('Images/actualInstructions.png');
}
function displayInstructions(){
    // document.getElementById("defaultCanvas0").style.backgroundImage = "url('Images/lightbackground.png')";
    w1 = instructionTitle.width/1.5
    h1 = instructionTitle.height/1.5
    w2 = instructions.width/3
    h2 = instructions.height/3
    image(instructionTitle, windowWidth/2-w1/2, 40, w1, h1);
    image(instructions, windowWidth/2-w2/2, 100, w2, h2);
}
