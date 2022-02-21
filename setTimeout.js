// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

function printNumbers(from, to){
  let beginning = from*1000;
  let diff = (to - from)*1000;

  let tick = () => {
    console.log(1);
  }

  let ticking = function(){
    let ticking = setInterval(tick, 1000)
    setTimeout(()=>{clearInterval(ticking)}, diff);
  };
  setTimeout(ticking, beginning);
}

printNumbers(5, 9);