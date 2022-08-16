class GuessingGame {
    constructor() {
        // this.min = min;
        // this.max = max;
    }
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }
    guess() {
        return Math.round((this.min - this.max)/2) + this.max;

    }
    lower() {
        // this.max mid - 1
        this.max = (Math.round((this.min - this.max)/2) + this.max) 
    }

    greater() {
        // this.min mid + 1
        this.min = (Math.round((this.min - this.max)/2) + this.max) 
    }
}

module.exports = GuessingGame;
