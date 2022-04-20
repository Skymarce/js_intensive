// Task 1

const firstValue = prompt('');
const secondValue = prompt('');
const result = parseInt(firstValue).toString(parseInt(secondValue))

if (Number.isInteger(parseInt(firstValue)) && Number.isInteger(parseInt(secondValue))) {
    console.log(parseInt(result));
} else {
    console.log('Некорректный ввод!');
}