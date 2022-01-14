// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

function unique(arr) {
    let counting = {}, answer = [];
    for(let i of arr){
        counting[i] = 1;
    }
    for(let i in counting){
        answer.push(i);
    }
    return answer;
}

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

let result = unique(strings);