// Rebuild your map function, this time instead of using a for loop, use your own forEach function that you just defined. Call this new function mapWith.

// console.log(mapWith([1, 2, 3], addTwo)); should output [ 3, 4, 5 ]

function addTwo(num) {
    return num + 2;
  }

function forEach(array, callback){
    for(let i = 0; i < array.length; i++){
        callback(array[i]);
    }
}


function mapWith(array, changingArray){
    let newArr = [];
    forEach(array, (item) => {
        newArr.push(callback(item));
    });
    return newArr;
}

console.log(mapWith([1, 2, 3], addTwo))