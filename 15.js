// Напишите функцию compareNumbers(arr), которая возвращает массив, элементы которого отсортированы по убыванию их значений.

function compareNumbers(arr) {
    arr.sort((a, b) =>  a - b);
    return arr;
}

var numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];
compareNumbers(numbers);