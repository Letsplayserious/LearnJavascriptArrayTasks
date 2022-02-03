// Напишите функцию sumOfSquares(arr), которая возвращает сумму квадратов значений массива.
// [1, 2, 3, 4, 5]; // 55

function sumOfSquares(arg) {
    let sum = 0, square = 0;

    for(let i of arg){
        square = i*i;
        sum = sum + square;
    }
    return sum;
}

let arr = [1, 2, 3, 4, 5];

sumOfSquares(arr);