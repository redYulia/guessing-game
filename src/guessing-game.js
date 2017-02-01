"use strict";

class GuessingGame {
    constructor(num) {
        this.secretNum = num;
    }

    setRange(min, max) {
        this.minNum = min;
        this.maxNum = max;
        this.averageNum = max;
    }

    guess() {
        var num = this.averageNum;
        if (num!=this.secretNum) {
            num = (this.maxNum-this.minNum)/2 + this.minNum;
            
            if (!((num ^ 0) === num)) {
                num++;
                num = Math.floor(num);
            }
        }
        this.averageNum = num;
        console.log("guess = ",this.averageNum);
        return this.averageNum;
        
    }

    lower() {
        this.maxNum = this.averageNum;
    }

    greater() {
        this.minNum = this.averageNum;
    }
}
module.exports = GuessingGame;
