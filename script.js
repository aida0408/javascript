// function checkEven(a,b){
//     return a + b
// }
//
// console.log(checkEven(4, 34))

// function checkEven (num){
//     if (num % 2 === 0){
//         return 'Even'
//     }else {
//         return 'Old'
//     }
// }
//
// console.log(checkEven(22))
// console.log(checkEven(35))
//
// let str = "lorem ipsum"
// if (str.includes("a")){
//     console.log("yes")
// }else{
//     console.log("no")
// }
//
// let str1 = "It Dubai"
// if (str1.includes("a")){
//     console.log("yes")
// }else{
//     console.log("no")
// }
//
// let str2 = "Moskow"
// if (str2.includes("a")){
//     console.log("yes")
// }else{
//     console.log("no")
// }

// function task2(str){
//     return `Hello my dear ${str}!`
// }
//
// console.log(task2('Tima'))
// console.log(task2('Sima'))
// console.log(task2('Rina'))

// function task3(value){
//     return typeof value
// }
//
// console.log(task3(30))

// function task4(a, b){
//     if(a > b){
//         return "a bol'she b"
//     }else if ( a < b){
//         return "b bol'she a"
//     }else {
//         return "Oni ravny"
//     }
// }
//
// console.log(task4(34, 56))

// function task7(num){
//     return num.toString().length
// }
//
// console.log(task7(127))

// function  task11(a, b, c, d){
//     return Math.min(a, b, c, d)
//
// }
//
// console.log(task11(5, 3, 2, 4))
// console.log(task11(121, 10, 2, 4))

// function sum ( a, b){
//     return a + b
// }
//
// console.log(sum (3, 9))
// console.log(sum (5, 9))
// function task2 (str){
//     return `Hello my dear ${str}!`
// }
//
// console.log(task2("Dima"))
// console.log(task2("Lena"))
// console.log(task2("Maral"))
// console.log(task2("Aya"))

// Напишите функцию, которая принимает все, что угодно и возвращает его тип данных:

// function task3 (value){
//     return typeof value
// }
//
// console.log(task3(65))
// console.log(task3("Jhon"))

// Напишите функцию, которая принимает два числа, если первое число больше второго, вывести: a больше b, если второе больше первого, то вывести : b больше a, иначе: Они равны
// function task4 ( a, b ){
//     if (a > b){
//         return "a больше b"
//     }else if ( a < b){
//         return "b больше a"
//     }
//     return "Oni ravny"
// }
//
// console.log(task4( 45, 98))
// console.log(task4( 45, 34))
// console.log(task4( 45, 45))

// Напишите функцию, которая принимает число и проверяет его кратность пяти. Ответ представить в виде true или false:
// function task5 (num){
//     return num % 5 === 0
// }
//
// console.log(task5 (62))

// Напишите функцию, которая принимает строку и выводит длину строки:
// function task5 (str){
//     return str.length
// }
//
// console.log(task5 ('Hello my love'))
//Напишите функцию, которая принимает строку и выводит последний символ в этой строке:
// function task6 (str){
//     return str[str.length-1]
// }
//
// console.log(task6('Bogatstvo'))
// console.log(task6('Million'))

//Напишите функцию, которая принимает число и выводит квадратный корень этого числа :
// function task7 (num){
//     return Math.sqrt(num)
// }
//
// console.log(task7(25))
//Напишите функцию, которая принимает число n и выводит целое число в диапазоне от -n до n :

// function task8 (num){
//     return Math.floor(Math.random()* 20 - num)
// }
//
// console.log(task8(9))
// Напишите функцию, которая принимает число n и выводит количество цифр в числе :

// function task9 (num){
//     return num.toString().length
// }
//
// console.log(task9(65))
// Напишите функцию, которая принимает четыре числа и выводит минимальное :
// function task10 (a, b, c, d){
//     return Math.min(a, b, c, d)
// }
//
// console.log(task10(54, 65, 87,74))
// Реализуйте функцию finalValue, которая вычисляет итоговую оценку ученика на основе двух параметров: оценки за экзамен и количества законченных проектов.    Функция принимает два аргумента:
//     exam — оценка за экзамен, число от 0 до 100; projects — количество проектов, число от 0 и выше. Функция возвращает: число (итоговую оценку).
// Есть четыре возможных итоговых оценки:
// 100, если оценка за экзамен выше 90 или есть больше 10 проектов
// 90, если оценка за экзамен выше 75 и есть как минимум 5 проектов
// 75, если оценка за экзамен выше 50 и есть как минимум 2 проекта
// 0 в любом другом случае
// Вот как должна работать ваша функция:
// пример вызова // что должна вернуть функция при таком вызове

// function finalValue(exam, projects){
//     if(exam > 90 || projects > 10){
//         return 100
//     }else if(exam > 75 && projects >=5){
//         return 90
//     }else if(exam > 50 && projects >=2){
//         return  75
//     }else {
//         return 0
//     }
// }
// console.log(finalValue(100, 12))
// console.log(finalValue(99, 0))
// console.log(finalValue(10, 15))
// console.log(finalValue(85, 5))
// console.log(finalValue(55, 3))
// console.log(finalValue(55, 0))
// console.log(finalValue(20, 2))

// function reverseString (str){
//     return str.split("").reverse().join('')
// }
//
// console.log(reverseString("world"))
// console.log(reverseString("word"))
// function removeChar(str){
//     return str.substr(1)
// }
//
// console.log(removeChar('everyone'))

//1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
// let a = 20
// if (a === 10){
//     console.log("verno")
// }else{
//     console.log('neverno')
// }
// let a = 50
// let b = 100
// if (a > b){
//     console.log('a bolshe b')
// }else if (a < b){
//     console.log('a menshe b')
// }
// let a = -2
// if ( a > 0){
//     console.log('positive')
// }else if (a === 0){
//     console.log('ravno')
// }else if( a < 0){
//     console.log('negative')
// }
//
// let number = 2
// if(number % 5 === 0){
//     console.log("nechetnoe")
// }else if(number % 2 ===0){
//     console.log("chetnoe")
// }

// const car = {
//     model:"Tesla",
//     year: 2022,
//     color: "white"
// }
// console.log(car.model)

// function removeCart (str){
//     return str.substring(1, str.length-1)
// }
//
// console.log(removeCart("Karbalas"))

function isPalindrome(line) {
    return line.split("").reverse().join('').toLowerCase() === line.toLowerCase()

}

console.log(isPalindrome("anna"))
console.log(isPalindrome("dima"))
console.log(isPalindrome("tacocaT"))