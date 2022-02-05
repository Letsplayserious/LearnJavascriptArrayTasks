// Напишите код, который отсортирует массив объектов litmir по значению свойства title.
/*
var litmir = [
    { author: 'Хэленка', title: 'Улетела сказка'},
    { author: 'Коул Кресли', title: 'Восстание Аркан'},
    { author: 'Райчел Мид', title: 'Золотая лилия'}
];
*/

var litmir = [
    { author: 'Хэленка', title: 'Улетела сказка'},
    { author: 'Коул Кресли', title: 'Восстание Аркан'},
    { author: 'Райчел Мид', title: 'Золотая лилия'}
];

litmir.sort((a, b) => a.title > b.title ? 1 : -1)

console.log(litmir);