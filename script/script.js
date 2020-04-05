let date = new Date(),
    days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    findSelect = document.querySelector('.days'),
    list = '';

days.forEach((day, key) => {
    if(key == date.getDay()) {
        if (key == 0 || key == 6) {
            list += '<li>' + day.bold().italics() + '</li>';
        } else {
            list += '<li>' + day.bold() + '</li>';
        }
    }
    else {
        if (key == 0 || key == 6) {
            list += '<li>' + day.italics() + '</li>';
        }
        else {
            list += '<li>' + day + '</li>';
        }
    }
});

findSelect.innerHTML = list;
