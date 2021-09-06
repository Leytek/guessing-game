class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.g = Math.ceil((this.max + this.min) / 2);
    }

    lower() {
        this.max = this.g;
    }

    greater() {
        this.min = this.g;
    }
}

module.exports = GuessingGame;
