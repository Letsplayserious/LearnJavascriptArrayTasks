// Сортировать в порядке убывания
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);

// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.
function copySorted(arr) {
    let copy = [];
    copy = arr.map(item => item).sort();
    return copy;
}

let arr2 = ["HTML", "JavaScript", "CSS"];
let res = copySorted(arr2);
la