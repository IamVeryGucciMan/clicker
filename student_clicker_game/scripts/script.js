const tickRate = 1000 / 30; // 30 frames per second(fps)
let score = 0;
let overallBPS = 0;

// Buildings are made from classes here.
let bagel = new Building('bakeBagelButton', 'Bagel', 15, 0.1);
let croissant = new Building('bakeCroissantButton', 'Croissant', 100, 1);
let doughnut = new Building('bakeDoughnutButton', 'Doughnut', 1100, 8);
let cinnamonRoll = new Building(
    'bakeCinnamonRollButton',
    'Cinnamon Roll',
    12000,
    47
);
let pie = new Building('bakePieButton', 'Pie', 130000, 260);
let cake = new Building('bakeCakeButton', 'Cake', 1400000, 1400);

// Manual click function, add one point to score per click
function scorePlusPlus() {
    score++;
}

function updateButtons() {
    bagel.buttonState();
    croissant.buttonState();
    doughnut.buttonState();
    cinnamonRoll.buttonState();
    pie.buttonState();
    cake.buttonState();
}

function incScore() {
    score +=
        bagel.currentBPS +
        croissant.currentBPS +
        doughnut.currentBPS +
        cinnamonRoll.currentBPS +
        pie.currentBPS +
        cake.currentBPS;
}

// Everything in the following function updates every tick as set at the top
function updatePage() {
    incScore();
    document.getElementById('overallBPS').innerHTML = overallBPS;
    updateButtons;
}
setInterval(updatePage, tickRate);
