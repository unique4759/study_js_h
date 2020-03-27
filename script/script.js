let num = 266219;

num = num.toString().split('');

let result = 1;

num.forEach(item => {
    result *= +item;
});

result = result ** 3;

result = result.toString().slice(0, 2);

console.log(result); 