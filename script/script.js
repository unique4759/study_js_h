setInterval(function() {
    let date = new Date(),
    days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'ноября', 'декабря'];

function endingWord(hour, titles) {  
    let cases = [2, 0, 1, 1, 1, 2];  
    return titles[(hour % 100 > 4 && hour % 100 < 20) ? 2 : cases[(hour % 10 < 5) ? hour % 10 : 5]];  
} 

function setNum(num){
	if (num > 0 && num < 10) { 
		return '0' + num;
	} else {
		return num;
	}
}

console.log('Сегодня ' + days[date.getDay()] + ', ' + date.getDate() + ' ' + month[date.getMonth()] + ' ' + date.getFullYear() + ' года, ' + date.getHours() + ' ' + endingWord(date.getHours(), ['час', 'часа', 'часов']) + ' ' + date.getMinutes() + ' минут ' + date.getSeconds() + ' секунд');
console.log(setNum(date.getDate()) + '.' + (setNum(date.getMonth() + 1)) + '.' + date.getFullYear() + ' - ' + setNum(date.getHours()) + ':' + setNum(date.getMinutes()) + ':' + setNum(date.getSeconds()));

}, 1000);