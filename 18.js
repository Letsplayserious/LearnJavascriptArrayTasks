// Напишите код, который определяет сумму и произведение значений массива.

// [ 1, 2 , 3 , 4 , 5 , 6 , 7, 8 ,9]
// Сумма : 45, Произведение : 362880;
function sumAndProduct(arg){
    let sum = 0, product = 1;
    for(let i in arg){
        sum = sum + arg[i];
        product = product*arg[i];
    }
    return document.write(`Сумма значений массива - ${sum}. Произведение значений массива - ${product}.`);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

sumAndProduct(arr);