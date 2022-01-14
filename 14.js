// Напишите функцию возвращающую уникальные элементы массива

const arr = [1, 1, 1, 2, 3, 3, 3, 4, 5, 5, 5, 6, 7, 7, 7, 8];

// first solve
function uniqueElement(arg){
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
    return result;
}

let answer = uniqueElement(arr);


// second solve

function uniqueElement2(arr){
    let accum = {};
    let result = [];
    for(let i in arr){
        if(accum[arr[i]] == undefined){
            accum[arr[i]] = 1;
        }
        else{
            accum[arr[i]]++;
        }

    }

    for(let k in accum){
        if(accum[k] == 1){
            result.push(k);
        }
    }
    return result;
}

let answer2 = uniqueElement2(arr);