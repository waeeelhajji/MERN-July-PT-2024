// console.log("Hello New MERN Ninjas")

//! -------------- Scope

var name = "bob";

function SayHi() {
    name = "alice";
    console.log(name)
}
SayHi() //? -----
console.log(name) //? ----

//! -------------- HOISTING

const x = 5 // x = 5
let a = 4
console.log(x) // var x ;


//! -------------- const and let



const nums = [11, 22, 33, 44]
nums[1] = 5
nums.push(5)
console.log(nums)

//? primitive datatypes

// string
const str = "example"
str = "5"
// numbers
// Boolean
// undefined / Null

//? complex datatypes
// Arrays
// Objects

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
}
person.firstName = "Wael"
console.log(person)


//! --------------  Destructuring


const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};

// const email = person.email;
// const password = person.password
// const createdAt = person.createdAt
const { firstName, email, password, createdAt } = person
console.log(Username,UserPsw,nickName)


const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// const animal1 = animals[1]
// const animal2 = animals[2]

const [,animal1,dfgfgfd,animal2] = animals

console.log(animal1,animal2,dfgfgfd)