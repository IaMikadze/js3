//1
let fruits = ["apple", "mango", "avocado", "kiwi"];
fruits[fruits.length - 1] = "strawberry";
console.log(fruits);
//2
let info = "good day";
let day = info.indexOf("day");
let dayfinal = info.slice(day);
console.log(dayfinal);
//3
function stringCounter(string) {
  return string.length;
}
console.log(stringCounter("hello"));
//4
let array = [5, 25, 89, 120, 36];
console.log(array);
array.push("javascript", "python");
console.log(array);
array.unshift("html", "css");
console.log(array);
array.shift();
console.log(array);
array.pop();
console.log(array);
//5
let arrayFruits = ["banana", "kiwi", "orange"];
console.log(arrayFruits.length);
arrayFruits.push("Apple", "Pineapple");
console.log(arrayFruits);
arrayFruits.unshift("Watermelon");
console.log(arrayFruits);
console.log(arrayFruits.length);
arrayFruits.splice(2, 0, "Mango");
console.log(arrayFruits);
//6
let array3 = [1, 2, 3, 4, 5];
array3.splice(2, 0, 3, "a", "b", "c");
console.log(array3);
//7
let array7 = [15, 100, 25, 10, 36];
array7.splice(3, 1);
console.log(array7);
//or if we dont know the position of the number which we want to delete
let array72 = [15, 100, 25, 10, 36];
for (let i = 0; i < array7.length; i++) {
  if (array72[i] === 15) {
    array72.splice(i, 1);
    console.log(array72);
  } else {
    console.log(array72);
  }
}

//8
let array8 = [1, 2, 3, 4, 5];
array8.splice(2, 1, "three");
console.log(array8);
//9
let array4 = [1, 2, 3, 4, 5];
let sum = 0;
array4.forEach((number) => {
  sum += number;
});
console.log(sum);

//10

let array2 = [14, 150, "css", null, "javascript", 25];

let newArray = array2.map((element) => {
  if (typeof element === "number") {
    return element * element;
  } else if (typeof element === "string") {
    return element.toUpperCase();
  } else {
    return element;
  }
});

console.log(newArray);
//11
const correctCapital = "tbilisi";
const userAnswer = prompt("Is it the capital of Georgia?").toLowerCase();

if (userAnswer === correctCapital) {
  console.log("correct");
} else {
  console.log("false");
}
//12
let array5 = [12, 25, 3, 6, 8, 14, 7, 23];
let newArray1 = array5.map((element) => element / 3);

console.log(newArray1);
//13
let array1 = ["hello1", 14, 24, "hello2"];

let numbers = array1.filter((element) => typeof element === "number");

console.log(numbers);
//14
let languages = ["html", "css", "javascript", "python", "php"];
let newLanguages = languages.filter((word) => word.length > 3);
console.log(newLanguages);
//15
let words = ["Madrid", "rome", "Milan", "berlin"];
let filteredWords = words.filter(function (word) {
  return word.indexOf("m") !== -1 || word.indexOf("M") !== -1;
});
console.log(filteredWords);
//16

//17

let array6 = [-1, -2, -3, 4];
let Positive = array6.some(function (element) {
  return element > 0;
});
console.log(Positive);
//18
const str = "12345";
const sum1 = str.split("").reduce((sum, char) => sum + parseInt(char), 0);
console.log(sum1);
//19
const numArray = [1, 2, 3, 4, 5];
const totalSum = numArray.reduce((total, current) => total + current, 0);
console.log(totalSum);
//20
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];
let combinedArray = arr1.concat(arr2, arr3);
