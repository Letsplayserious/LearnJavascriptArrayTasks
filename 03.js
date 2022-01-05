// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
// Функция должна возвращать новый массив и не изменять исходный.

function filterRange(arr, a, b){
    let answer = arr.filter((item) =>{
       return item>=a && item <=b;
    });
    return answer;
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);