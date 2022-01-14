// Напишите функцию возвращающую уникальные элементы массива

const arr = [1, 1, 1, 2, 3, 3, 3, 4, 5, 5, 5, 6, 7, 7, 7, 8];
let result = [];

for(let i = 0; i < arr.length; i++) {
    let accum = 0;
    for(let j = 0; j < arr.length; j++) {
        if(arr[i] == arr[j]){
            accum++;
        }
    }
    if(accum == 1){
        result.push(arr[i]);
    }
}

console.log(result);