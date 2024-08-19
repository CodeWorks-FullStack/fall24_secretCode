console.log('app loaded')

// NOTE Primitive types

// NUMBERS
var number1 = 10 // number, not really used at all any more, lots of overlap and overwriting concerns
let number2 = 25 // number, your go to, should be used over var in like 99%
const number3 = 100.75 //number, const is immutable. CANNOT CHANGE

// STRINGS
let greeting = "Mick's Favorite greeting is 'Howdy' "
const myName = 'Micks Favorite greeting is "Howdy"'
const dog = 'Dipper'
let animalName = `Mick's Dog's 
name is "${dog}"`

// Booleans
let yes = true
let no = false

// Boolean likes, or (Truthy/Falsey)
// any number with a value, either negative or positive is true, and 0 is false
let trueNumber = 1//truthy
let isItTrueOrIsItFalse = -10//truthy
let falseNumber = 0// falsey

let trueString = "this is true" //truthy
let questionableString = " " // truthy
let falseString = "" // falsey


// Null, Undefined, NaN, these are all falsey
let knownNothing = null
let unknownNothing = undefined
let alsoUndefined
let notANumber = NaN

if (true) {
  console.log('it was true!');

}



let hellos = 100
// hellos = 99

// functions

function helloWorld() {
  // let hellos = 0
  hellos++
  console.log('Hello 🙋‍♂️', hellos);

}

hellos++


const secret = '5678'

let userInput = ''

function pressOne() {
  userInput += '1'
  console.log('pressed 1', userInput);

  const inputElement = document.getElementById('user-input')
  console.log(inputElement, inputElement.innerText);
  inputElement.innerText = userInput
}

function pressTwo() {
  userInput += '2'
  console.log('2️⃣', userInput);

  const inputElement = document.getElementById('user-input')
  console.log(inputElement, inputElement.innerText);
  inputElement.innerText = userInput
}

function pressThree() {
  userInput += '3'
  console.log('three', userInput);

  const inputElement = document.getElementById('user-input')
  console.log(inputElement, inputElement.innerText);
  inputElement.innerText = userInput
}

function pressButton(number) {
  userInput += number
  console.log('pressed a button', number, userInput);

  const inputElement = document.getElementById('user-input')
  console.log(inputElement, inputElement.innerText);
  inputElement.innerText = userInput
}

function submitCode() {
  if (secret == userInput) {
    console.log('You got it');
  } else {
    console.log('You stink!');

  }
}






