class Calculator {
    constructor(firstNumber, secondNumber) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }

    checkNumber() {
        if (Number.isInteger(this.firstNumber) && Number.isInteger(this.secondNumber)) {
            return true;
        } 
    }

    setX(newValue) {
        if (this.checkNumber()) {
            return this.firstNumber = newValue;
        } else {
            throw new Error('Произошла ошибка...');
        }
    }

    setY(newValue) {
        if (this.checkNumber()) {
            return this.secondNumber = newValue;
        } else {
            throw new Error('Произошла ошибка...');
        }
    }

    logSum() {
        if (this.checkNumber()) {
            return this.firstNumber + this.secondNumber
        } else {
            throw new Error('Произошла ошибка...');
        }
    }

    logMul() {
        if (this.checkNumber()) {
            return this.firstNumber * this.secondNumber
        } else {
            throw new Error('Произошла ошибка...');
        }
    }

    logSub() {
        if (this.checkNumber()) {
            return this.firstNumber - this.secondNumber
        } else {
            throw new Error('Произошла ошибка...');
        }
    }

    logDiv() {
        if (this.checkNumber() && this.secondNumber !== 0) {
            return this.firstNumber / this.secondNumber
        } else {
            throw new Error('Произошла ошибка...');
        }
    }
}

const calc = new Calculator(38, 0);
calc.setX(10);
calc.setY(76);
calc.logSum();
calc.logMul();
calc.logSub();
calc.logDiv();