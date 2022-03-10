// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.

function Calculator(){
    this.a;
    this.b;
    this.read = function(){
      let x = + prompt("Введите значение №1");
      let y = + prompt("Введите значение №2")
      this.a = x;
      this.b = y;
      }
    this.sum = function(){
      return this.a + this.b;
    }
    this.mul = function(){
      return this.a * this.b;
    }
  }