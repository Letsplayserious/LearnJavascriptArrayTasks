// Верните текущую дату в формате - Пн, 24 января 2022, 16:12
function otherDate(){
    const weekArray = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    const monthArray = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря",];

    const date = new Date();
    const day = weekArray[date.getDay()];
    const number = (date.getDate()).toString().padStart(2, "0");
    const month = monthArray[date.getMonth()];
    const year = date.getFullYear();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const answer = `${day}, ${number} ${month} ${year}, ${minutes}:${seconds}`;
    return answer;
}

console.log(otherDate());