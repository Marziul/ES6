
// Optional Chaining
//-------------------------

const user = {
    dog: {
        name: "Alex"
    }
};
    
console.log(user.cat?.name); //undefined
console.log(user.dog?.name); //Alex
// console.log(user.cat.name); // Cannot read properties of undefined