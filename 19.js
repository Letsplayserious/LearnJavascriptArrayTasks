// Напишите функцию filterFalse(arr), которая очищает массив от ложных (false) значений:
// false, null, undefined, 0, –0, NaN и "" (пустая строка).
// array = [NaN, 0, 77, false, -17, '',undefined, 99, null];


function filterFalse(arr){
    let answer = [];
    for(let i = 0; i < arr.length; i++){
      let y = arr[i];
      if(arr[i]){
        answer.push(arr[i])
      }
    }
    return answer;
  }

  let array = [NaN, 0, 77, false, -17, '',undefined, 99, null];

  filterFalse(array);