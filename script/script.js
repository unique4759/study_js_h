function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

change.addEventListener('click', function () {
    let color = '';

    for (let i = 0; i < 6; i++) {
        color += getRandomIntInclusive(0, 9);
    }

    document.body.style.backgroundColor = '#' + color;
    document.querySelector('#color').textContent = '#' + color;
});