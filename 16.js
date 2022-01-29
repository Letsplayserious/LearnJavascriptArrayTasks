// Напишите код, который находит наиболее часто используемый элемент массива.

var arr1 = [7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7];

function mostUsed(arg){
    let obj = {};

    for(let i in arg) {
        let a = arg[i];
        if (obj[a] == undefined){
            obj[a] = 1;
        }
        else{
            obj[a]++;
        }
    }


    let mass = Object.entries(obj);

    mass.sort((a, b) => b[1] - a[1]);

    return mass[0][0];
}

console.log(mostUsed(arr1));