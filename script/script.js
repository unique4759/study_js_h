let arr = ['368', '643', '278', '1506', '4908', '8978', '423'];

arr.forEach((value) => {
    if (value.startsWith('2') || value.startsWith('4')) {
      console.log(value);
    }
});

for (let i = 2; i <= 100; i++){
    for(var j = 2; j <= i; j++){
        if (i % j == 0) break;
    }
    if(j == i) console.log('Делители этого числа: 1 и ' + i);
}