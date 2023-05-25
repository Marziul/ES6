
// Array Destructure
//-------------------------

// let numbers = [10,20,30,40,50]
// let [num1, num2, num3, num4, num5] = numbers
// console.log(num1)
// console.log(num2)


// Array Destructure
//-------------------------

// let numbers = [10,20,30,40,50]
// let [num1, num2, ...z] = numbers
// console.log(z)


// Swap Variables
//-------------------------

// let a=10, b=20;
// [a,b] = [b,a]

// console.log(a)
// console.log(b)


// Object and Nasted Destructure
//-------------------------

const studentInfo = {
    id : 101,
    fullName: 'Anisul Islam',
    gpa : 3.92,
    lang : {
        native : 'bangla',
        beginner : 'english'
    }
}

const {fullName, lang} = studentInfo

console.log(fullName) 
console.log(lang.beginner)