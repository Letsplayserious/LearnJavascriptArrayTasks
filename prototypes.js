// У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?

let hamster = {
    eat(food) {
      if(!this.stomach){
      this.stomach = [];
      this.stomach.push(food);
      }
      else{
        this.stomach.push(food);
      }
    }
  };

  let speedy = {
    __proto__: hamster
  };

  let lazy = {
    __proto__: hamster
  };

  speedy.eat("apple");