// У нас есть объект salaries с зарплатами:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.

function topSalary(arg){
    let theRichestGuy = 0;
    let theNameOfRichest = "";
    let x = Object.entries(arg);

    if (x.length == 0){
      return null;
    }
    else {
      for(let [name, price] of x){
        if(price >= theRichestGuy){
          theRichestGuy = price;
          theNameOfRichest = name;
        }
      }
    }
    return theNameOfRichest;
  }

  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
    "Vasia": 0,
    "Svyat": 2500000000
  };

  topSalary(salaries);