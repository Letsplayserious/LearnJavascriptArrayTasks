// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

function fibonachi(arg){
    let prev = 0, res = 1, sum;
    for(let i = 1; i < arg; i++){
        sum = prev + res;
        prev = res;
        res = sum;

    }
    return sum;
}
console.log(fibonachi(1250));