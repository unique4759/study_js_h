setInterval(function() {
    let findSelect = document.querySelector('.app'),
        list = '';
    let date = new Date(),
    days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'ноября', 'декабря'];

    function endingWord(hour) {  
        return (hour == 1 || (hour > 19 && hour % 10 == 1)) ? 'час' :
        ((hour > 1 && hour < 5) || (hour > 19 && hour % 10 > 1 && hour % 10 < 5)) ? 'часа' : 'часов'; 
    } 

    function setNum(num){
        if (num > 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }

    list += '<p>' + 'Сегодня ' + days[date.getDay()] + ', ' + date.getDate() + ' ' + month[date.getMonth()] + ' ' + date.getFullYear() + ' года, ' + date.getHours() + ' ' + endingWord(date.getHours()) + ' ' + date.getMinutes() + ' минут ' + date.getSeconds() + ' секунд' + '</p>';
    list += '<p>' + setNum(date.getDate()) + '.' + (setNum(date.getMonth() + 1)) + '.' + date.getFullYear() + ' - ' + setNum(date.getHours()) + ':' + setNum(date.getMinutes()) + ':' + setNum(date.getSeconds()) + '</p>';

    findSelect.innerHTML = list;
}, 1000);