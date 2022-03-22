// 0. Write a function that retuns "Hello World!"
// i.e., Q0() returns "Hello World"

var Q0 = function () {
    return "Hello World!";
};

// 1. Write a function that returns number 7.

var Q1 = function (){
		return 7;
}
Q1();
/* TODO */

// 2. Write a function that returns the same number that takes as a parameter
// i.e., Q2(7) returns 7.

function Q2(a){
		return a;
}

/* TODO */

// 3. Write a function that returns the a function that returns 7.
// i.e., Q3()() returns 7

function Q3(){
		return () => {
    		return 7;
    }
}

/* TODO */

// 4. Write a function that returns the a function that returns the number that
// was passed to the first function. i.e., Q3(7)() === 7.

function Q4(a){
		return () => {
				return a;
    }
}

/* TODO */

// 5. Write a function that returns a function that returns a one more than the
// number that was passed in to the first function, i.e., Q5(7)() === 8.

/* TODO */

function Q5(a){
		return () => {
    		return a + 1;
    }
}

// 5. Write a function that returns a function that returns a one more than the
// number that was passed in to the first function, but increases by one each
// time it is called, i.e.,
// var fn = Q5(7);
// fn() //returns 8.
// fn() //returns 9.

function Q5b(a){
		return () => {
		    return a = a + 1;
    }
}

var fg = Q5b(7);

/* TODO */

// 6. Write a function that returns a function that returns one more than the
// number it returned last time, starting with 1. i.e.,

// var fn = Q5();
// fn() //returns 1.
// fn() //returns 2.
// fn() //returns 3.

function QF6(a){
		return () => a = a + 1;
}

/* TODO */

// 6. Write a function that returns a new number each time it is called, i.e.,
// var fn = Q6;
// fn() //returns 1.
// fn() //returns 2.
// fn() //returns 3.
// HINT: IIFE

/* TODO */
function Q6b(a){
    (function () {
    	return a + 1;
    }());
}

var fn = Q6b;

fn();
// 7. Write a function that returns the next element in the fabonicci sequence
// each time it is called, i.e.,
// var fn = Q7;
// fn(); //returns 1
// fn(); //returns 2
// fn(); //returns 3
// fn(); //returns 5
function Q7(){
  let x = 1;
  let y = 0;
  return function(){
    let z = x + y;
    y = x;
    x = z;
    return x;
  }
}

var fn7 = Q7();

/* TODO */

// 8. Write a constructor function that returns an object  with two methods,
// getName() and setName() that allow you to change the name, i.e.,
// var person = new Q8('foo');
// person.getName() === 'foo' //true
// person.setName() = 'bar'
// person.getName() === 'bar' //true

function Q8(arg){

}

/* TODO */

// 9. Write a function that prints the current time to the console once every
// second after it is called. HINT: setInterval

/* TODO */

// A. Write a function that prints the current time to the console once every
// second after it is called, but stops after printing output 4 times, i.e,
// QA() //starts timer
// prints 22:40:00 GMT-0500 (Central Daylight Time)
// prints 22:40:01 GMT-0500 (Central Daylight Time)
// prints 22:40:03 GMT-0500 (Central Daylight Time)
// prints 22:40:05 GMT-0500 (Central Daylight Time)
// timer automatically stops.
// HINT: clearInterval

/* TODO */

// B. Write a constructor function that returns an object that represents
// a stopwatch, i.e.,
// var stopwatch = new QB();
// stopwatch.start() => starts timer
// stopwatch.getElapsedTime() => displays number of seconds since timer started
// stopwatch.stop() => stops timer
// stopwatch.ElapsedTime => displays number of seconds since timer started
// stopwatch.start() => resumes timer

/* TODO */

// C. Write a constructor function that takes a name and  returns an object
// that represents a Person with that name. Person has only 1 property Name.
// The object must have a method called getNumberOfPeopleCreatedThusFar() that
// returns the number of people ever created with this constructor function.
// i.e,
// var a = new QC();
// a.getNumberOfPeopleCreatedThusFar() //1
// var b = new QC();
// a.getNumberOfPeopleCreatedThusFar() //2
// b.getNumberOfPeopleCreatedThusFar() //2
// CONSTRAINT: don't use prototype inheritance.

/* HINT:
// This is the equivalent of the following C# class:

class QC
{
  private static int numberOfInstances;

  public QC()
  {
    numberOfInstances++;
  }

  public int GetNumberOfPeopleCreatedThusFar()
  {
    return numberOfInstances;
  }
}

*/

/* TODO */
