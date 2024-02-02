class Building {
    constructor(buttonId, buildingType, basePrice, baseBPS) {
        this.price = price;
        this.baseBPS = baseBPS / (1000 / tickRate);
        this.button = document.getElementById(buttonId);
        this.buildingType = buildingType;
    }

    basePrice;
    price = this.basePrice;
    baseBPS;
    currentBPS = 0;
    button;
    buildingType;
    buildingCount = 0;

    // Triggered when the player buys a Building
    bake() {
        score -= this.price;
        this.buildingCount++;
        this.price = Math.ceil(this.price * 1.15 ** this.buildingCount);
        this.currentBPS += this.baseBPS;
        overallBPS += this.baseBPS;
        overallBPS = parseFloat(overallBPS.toFixed(1));
        this.bakeRate = 1000 / this.currentBPS;
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
