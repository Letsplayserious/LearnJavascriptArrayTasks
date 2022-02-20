// Напишите функцию, которая проверит, что на каждую открывающуюся скобку есть закрывающаяся

function checkbrackets(arg){
    let stack = [];

    for(let i = 0; i < arg.length; i++){
        if(arg[i] ==="(" || arg[i] === ")"){
            if(arg[i] === "("){
                stack.push(arg[i]);
            }
            if(arg[i] ===")"){
                let k = stack.pop();
                if(!k) {
                    return false;
                }
            }

        }
    }
    stack.length === 0 ? console.log(true) : console.log(false);

}

let str = "()()";

checkbrackets(str)