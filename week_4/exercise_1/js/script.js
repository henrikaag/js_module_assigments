/*
console.log("hello world");

const greeting = "Hello there people";
const lengthOfGreeting = greeting.length;
console.log("string chars:", lengthOfGreeting);

const emptyString = "";
console.log("empty string:", emptyString.length);

const spaceTest = "a b";
console.log("spaceTest:",spaceTest.length);
*/

/*
const firstName = " Henrik ";
console.log(firstName.length);

const trimmedName = firstName.trim();
console.log(trimmedName.length);

const space = " ";
console.log(space.length);
console.log(space.trim().length);
*/



const firstName = document.querySelector("#firstName");

firstName.addEventListener("keyup", logLength);

function logLength(event) {
  const inputValue = event.target.value.trim();
  const valueLength = inputValue.length;
  console.log(inputValue.length);
  
  if (valueLength > 0) {
    console.log("the input has a value");
  } else {
    console.log("the input does not have a value");
    
  }
}


