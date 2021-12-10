function initCharacterSelect(){
    selectTitle = loadImage('Images/CharacterSelect.png');
}

function displayCharacterSelect(){
    let titleWidth = selectTitle.width/2.5
    let titleHeight = selectTitle.height/2.5
    image(selectTitle, windowWidth/2-titleWidth/2, 60, titleWidth, titleHeight);
    
    fill(255);
    textSize(40);
    textFont('Courier New');
    let instructWidth = textWidth('Click the image to select your character!')
    text('Click the image to select your character!', windowWidth/2-instructWidth/2, 215);
}
