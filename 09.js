// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:
/*
let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 1, 2]
*/

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--){
        let k = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[k]] = [arr[k], arr[i]];
    }

}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

shuffle(arr);