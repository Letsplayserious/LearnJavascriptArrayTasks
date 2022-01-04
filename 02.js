// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b.
// То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.

function filterRangeInPlace(arr, a, b){
    arr = arr.filter((item, index)=>{
        if( !(item >= a && item <= b) ){
            arr.splice(index,1);
        }
    });

    return arr;
}

let arr = [5, 3, 8, 2, 4, 1.25, 13, 1];

filterRangeInPlace(arr, 1, 4);