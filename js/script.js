// Task 1

const firstValue = prompt('');
const secondValue = prompt('');
const result = parseInt(firstValue).toString(parseInt(secondValue))

if (Number.isInteger(parseInt(firstValue)) && Number.isInteger(parseInt(secondValue))) {
    console.log(parseInt(result));
} else {
    console.log('Некорректный ввод!');
}

// Task 2

const firstAnswer = prompt('');
const secondAnswer = prompt('');
const sum = parseInt(firstAnswer) + parseInt(secondAnswer);
const quotient = parseInt(firstAnswer) / parseInt(secondAnswer);

if (Number.isInteger(parseInt(firstAnswer)) && Number.isInteger(parseInt(secondAnswer))) {
    console.log(`Ответ: ${sum}, ${quotient}`);
} else {
    console.log('Некорректный ввод!');
}