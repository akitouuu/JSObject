for(let i = 0; i <= 10; i++) {
    let name = prompt('Введите имя пользователя')
    let age = +prompt('Введите возраст пользователя')
    
    const user = {
        name: name,
        age: age
    };

    for(const key in user) {
        console.log('Имя пользователя: ' + user.name);
        console.log('Возраст пользователя: ' + user.age);
    }
}