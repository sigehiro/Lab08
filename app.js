let num1 = 10
let num2 = 5

console.log('num1 + num2 = ' + (num1 + num2))
console.log('num1 - num2 = ' + (num1 - num2))
console.log('num1 * num2 = ' + (num1 * num2))
console.log('num1 / num2 = ' + (num1 / num2))


let firstname = 'Shigehiro '
let lastname = 'Omiya'
let fullname = firstname + '' + lastname
console.log(fullname)

// let
{
    let x = 5;
    console.log("Inside block - x:", x); // 5
}
// console.log("Outside block - x:", x); //error: x is not defined

// var
{
    var y = 10;
    console.log("Inside block - y:", y); // 10
}
console.log("Outside block - y:", y); // 10

let counter = 0
counter++
counter++
counter++
counter++
counter++
console.log('counter is ' +counter)

let num3 = '123'
let num4 = '567'
let result = Number(num3) + Number(num4)
console.log('num3 + num4 is ' + result)


let num5 = 98
let result2 =String(num5)
console.log(result2 + ' years old') 


