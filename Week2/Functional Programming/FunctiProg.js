//!-------------------------------Why is JavaScript a Multi-Paradigm Language ?

//* A paradigm can be defined as an approach to solving a problem. A programming paradigm is
//*  a way to solve problems by using a programming language.

//* As you know, each problem needs a specific approach to its solution. So,
//*  we would have a set of paradigms for different sets of problems. As programming
//*  languages are a way to solve the problems using the code, they will offer support to these paradigms.

//* So, any programming language which offers multiple programming paradigms is
//* referred to as a multi-paradigm programming language.Some of the well-known paradigms are mentioned below.



//?-------------------------------Object-Oriented Programming Paradigm

//* This is an approach where the solution is designed around communication between
//* the Objects or Classes, which hold the data and the methods to act upon that data.
//* A programming language with this approach will have code with a series of operations
//* involving defining classes and interaction among these classes with the help of associated methods.
//* Some of the languages supporting this paradigm are C++, Java, C#, JavaScript,


//?--------Functional Programming Paradigm - Hasell


//* This is a declarative approach where the solution is designed around applying and composing functions.
//* A programming language with this approach will have a series of function calls and function compositions,
//* where each function takes an input state and returns consistent output value independent of the program state.
//* Some of the languages supporting this paradigm are Haskell, JavaScript





//?--------The Big Freeze

const Freeze = [56, 66, 4, 7, 8, 9]

Object.freeze(Freeze)
Freeze.push(300)
console.log(Freeze)




//?--------Spread, Concat, and Slice


const groceryList = Object.freeze([
  { "item": "carrots",           "haveIngredient": false },
  { "item": "onions",            "haveIngredient": true  },
  { "item": "celery",            "haveIngredient": false },
  { "item": "cremini mushrooms", "haveIngredient": false },
  { "item": "butter",            "haveIngredient": true  }
]);


const UpdatedList = [...groceryList, { "item": "Milk", "haveIngredient": true }]

console.log(UpdatedList)

//?------Concat

const arr1 = [89, 96, 63]
const arr2 = [5, 6, 4]

const NewArray = arr1.concat(arr2)
console.log(NewArray)







//!-------------------------------Map and Filter
//?-------.map()

const animals = ["leopard ", "giraffe", "zebra", "elephant", "monkey", "lion"]

for (eachAnimal of animals) {
    console.log(eachAnimal)
}
animals.map(function (oneElem) {
    console.log(oneElem)

})

animals.map(function (oneElem) {
    return oneElem + " is awesome"

})
// ! the new version of the array it need be stored inside variable 

const awesomeAnimals = animals.map(function (oneElem, idx) {
    return `${idx} - ${oneElem} +  is awesome`

})
console.log(awesomeAnimals)



const values = [1, 2, 3, 4, 5];
const cubes = values.map(val => val ** 3);


//?-------.filter()

const filteredAnimals = animals.filter((eachOneAnimal) => {
    if (eachOneAnimal.length <= 5) {
        return true
    } else {
        return false
    }

})
console.log(filteredAnimals)

const ternaryFilter = animals.filter((bob) => {
    return bob.length <= 5
})
// const betterFilter = animals.filer(bob => bob.length <= 5)

const values1 = [1, 2, 3, 4, 5];
const evenss = values.filter(val => val % 2 === 0);



const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries.filter(item => item.includes("o"));



const values2 = [1, 2, 3, 4, 5];
const oddCubes = values.filter(val => val % 2 !== 0).map(val => val ** 3);
