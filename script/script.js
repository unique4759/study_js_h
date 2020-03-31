function checkArgument(value) {
    if(typeof value === 'string' && value.trim()) {
        console.log((value.trim()).length >= 30 ? value.trim().slice(0, 30) + '...' : value.trim());
    } else {
        alert('Аргумент должен быть строкой!');
    }
}

checkArgument(['    Аргумент должен быть строкой и точка!  ']);