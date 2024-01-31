const tickRate = 1000 / 30; // 30 frames per second(fps)
let score = 0;

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

// Manual click function, add one point to score per click
function scorePlusPlus() {
    score++;
}

// Everything in the following function updates every tick as set at the top
function updatePage() {
    document.getElementById('score').innerHTML = score;
    bagel.buttonState();
    croissant.buttonState();
    doughnut.buttonState();
    cinnamonRoll.buttonState();
    pie.buttonState();
}
setInterval(updatePage, tickRate);
