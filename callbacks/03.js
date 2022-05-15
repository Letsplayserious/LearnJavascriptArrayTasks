// Create a function called map that takes two inputs:
// an array of numbers (a list of numbers)
// a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
// Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.


function map(array, increasingArray){
    let result = [];
    for(let i = 0; i < array.length; i++){
        result.push(increasingArray(array[i]));
    }
    return result;
}

let arr = [1, 2, 3, 4, 5];

map(arr, function(arg){
    answer = (arg + 2);
    return answer;
});