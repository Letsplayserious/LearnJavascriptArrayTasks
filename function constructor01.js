// Напишите функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.

function Accumulator(startingValue){
    this.startingValue = startingValue;
    this.buffer = this.startingValue;
    this.value = 0;
    this.read = function(ask = +prompt()){
      this.feedback = ask;
      this.value = this.value + this.buffer + this.feedback;
      this.buffer = 0;
    }
  }