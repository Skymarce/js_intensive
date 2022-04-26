Array.prototype.myFilter = function(callback, forthis) {
    const array = [];
    for (let i = 0; i < this.length; i++)  {
        if (callback.call(forthis, this[i], i, this)) {
            array.push(this[i])
        }
    }
    return array;
}