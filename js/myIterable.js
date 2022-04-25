class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
      this.message = message;
    }
}

const myIterable = {
    from: "100",
    to: 90
}

myIterable[Symbol.iterator] = function() {
    return {
        currentValue: myIterable.from,
        lastValue: myIterable.to,

        next() {
            if (this.currentValue <= this.lastValue) {
                return {
                    done: false,
                    value: this.currentValue++
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }

}

function runIterable() {
    if(typeof myIterable.from === 'string' || typeof myIterable.to === 'string') {
        throw new ValidationError("From and To should not be strings");
    }
    if (myIterable.from > myIterable.to) {
        throw new ValidationError("From should not be more to");
    }
    if(myIterable.from === undefined || myIterable.to === undefined) {
        throw new ValidationError("From and To should not be empty");
    }

    for (let item of myIterable) {
        return item;
    }   
}

try {
    runIterable();
} catch(error) {
    throw new Error(error.message)
} finally {}