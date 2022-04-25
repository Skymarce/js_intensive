function selectFromInterval(currentArray, startInterval, endInterval) {
    if (Array.isArray(currentArray) && currentArray.every(item => typeof item === 'number')) {
        const filteredArray = currentArray.filter(item => {
            if (Number.isInteger(item) && startInterval < endInterval) {
                return item >= startInterval && item <= endInterval ? true : false;
            } else if (startInterval > endInterval) {
                return item <= startInterval && item >= endInterval ? true : false;
            } else {
                throw new Error('Произошла ошибка...');
            }
        });
        return filteredArray;
    } else {
        throw new Error('Произошла ошибка...');
    } 
}

try {
    selectFromInterval(['aaa'], 2, 3);
} catch (error) {
    throw new Error(error.message);
} finally {}