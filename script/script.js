let lang = prompt('Выберите язык перевода', 'ru');

if (lang === 'ru') {
    console.log(['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']);
}
if (lang === 'en') {
    console.log(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
}

switch (lang) {
    case 'ru':
        console.log(['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']);
        break;
    case 'en':
        console.log(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
        break;
    default:
        console.log(['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']);
}

let arrLang = [];
arrLang['ru'] = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
arrLang['en'] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(arrLang[lang]);

let namePerson = prompt('Введите имя:');
console.log(namePerson === 'Артем' ? 'директор' : namePerson === 'Максим' ? 'преподаватель' : 'студент');

//ДЗ2
// let num = 266219;

// num = num.toString().split('');

// let result = 1;

// num.forEach(item => {
//     result *= +item;
// });

// result = result ** 3;

// result = result.toString().slice(0, 2);

// console.log(result); 