class Building {
    constructor(buttonId, buildingType, price, baseBPS) {
        this.price = price;
        this.baseBPS = baseBPS;
        this.button = document.getElementById(buttonId);
        this.buildingType = buildingType;
    }

    price;
    baseBPS;
    currentBPS = 0;
    button;
    buildingType;
    buildingCount = 0;

    // Triggered when the player buys a Building
    bake() {
        score -= this.price;
        this.price = Math.ceil(this.price * 1.15);
        this.currentBPS += this.baseBPS;
        var bakeRate = 1000 / this.currentBPS;
        setInterval(scorePlusPlus, bakeRate);
        this.buildingCount++;
    }

    // Updates the button, grey if can't afford, price, number owned, etc
    buttonState() {
        this.button.disabled = score < this.price;
        this.button.innerHTML =
            'Bake a ' +
            this.buildingType +
            '!<br />+' +
            this.baseBPS +
            ' BPS<br />Price: ' +
            this.price +
            '<br />[Owned: ' +
            this.buildingCount +
            ']';
    }
}
