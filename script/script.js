let date = new Date(),
    days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    findSelect = document.querySelector('.days'),
    list = '';

days.forEach((day, key) => {
    let nowDay;

    if(date.getDay() == 0) {
        nowDay = 6;
    }
    else {
        nowDay = date.getDay() - 1;
    }

    if(key == nowDay) {
        if (key == 5 || key == 6) {
            list += '<li>' + day.bold().italics() + '</li>';
        } else {
            list += '<li>' + day.bold() + '</li>';
        }
    }
    else {
        if (key == 5 || key == 6) {
            list += '<li>' + day.italics() + '</li>';
        }
        else {
            list += '<li>' + day + '</li>';
        }
    }
});

findSelect.innerHTML = list;
