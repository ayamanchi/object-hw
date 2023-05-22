    // 1. Создать объект user с полями name, age и email. Вывести значения полей в консоль.
//      -Добавить ключ id со значением 1 
//      -Добавить ключ second name
//      -Удалить ключ age
//      -Изменит значение ключа email
//      -Сделать так чтоб в дальнейшем этот объект не могли изменять



// const user = {
//     name: "Ayana",
//     age: 18,
//     email: "ayamanchi@gmail.com"
// }

// user.id = 1
// user["second name"] = "Imanbaeva"

// delete user.age

// user.email = "ayana.imanbaeva@icloud.com"

// Object.freeze(user)

// console.log(user);




// 2. Создайте объект заработных плат obj = {Ширин: '1000',
//    Айжан:'500', Атай: '200'}; Выведите на экран зарплату Атая и Ширин.


// const obj = {
//     Ширин: 1000,
//     Айжан: 500,
//     Атай: 200
// }

// delete obj.Айжан


// console.log(Object.values(obj));



// 3. Создать объект team с полем members, представляющим собой массив имен участников. 
//    Добавить нового участника в массив и вывести обновленный объект в консоль. 
//    (Учитываем, то что мы можем не знать список участников которые уже записаны)


// const team = {
//     members:  ["Aliya", "Meder", "Samat"]
// }

// let newMember = "Ayana"

// team.members.push(newMember)

// console.log(team);