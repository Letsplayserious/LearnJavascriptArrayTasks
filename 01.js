// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(str){
    let splitted = str.split("");
    let cloned = [];
    for(let i = 0; i < splitted.length; i++){
        if(splitted[i] != "-"){
            cloned.push(splitted[i])
        }
        else{
            cloned.push(splitted[i+1].toUpperCase());
            i++;
        }
    }
    return(cloned.join(""));
}

let example = camelize("background-color");