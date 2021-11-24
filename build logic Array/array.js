// const arr = [3,5,6];

// let sum = 0;
// for(let i=0; i < arr.length; i++){
//    sum += arr[i]


// }


//  console.log(sum)



//---- Average

// const arr = [3,5,6];
// let sum = 0;
// for(let i=0; i < arr.length; i++){
//    sum += arr[i]
//    console.log(sum)

// let average = sum/arr.length
// console.log(average)

// }

// -- find max and min

// const arr = [3,5,6];
// let max = 0

// for(let i=0; i < arr.length; i++){
//  if (arr[i] > max)
//  max= arr[i];
// }

// console.log(max)

// let min = arr[0]

// for(let i=0; i<arr.length; i++){
//   if(arr[i] < min)
//   min = arr[i];
// }

// console.log(min)

// find the median and mode

// const arr = [3,5,6];



// let sum = 0;
// for(let i=0; i < arr.length; i++){
//    sum += arr[i]; 
// }

// let median = (sum + 1)/2
// console.log(median)

//----
//finding sum of two arrays



// const arrOne = [3,5,2,9,4];
// const arrTwo = [6,2,8,1,3];


// function one (){
// let sumOne= 0;
// for(let i=0; i < arrOne.length; i++){
//    sumOne += arrOne[i]

// }
// //console.log(sumOne)- output will come from here
// return sumOne
// // console.log(sumOne) - output  will not come from here

// }



// function two () {
//   let sumTwo = 0;
// for(let i=0; i < arrTwo.length; i++){
//    sumTwo += arrTwo[i]
// }
// // console.log(sumTwo);
// return sumTwo;
// }

// let total = one() + two();
// console.log(total)



//finding mode from array


// const arr = [2, 3, 4, 2, 5];

// let mode = 0;
// let currentValue = 0;
// let highestCounter = 0;

// for (let i = 0; i < arr.length; i++) {
//     let counter = 0
//     for (j = 0; j < arr.length; j++) {
//         if (arr[i] === arr[j]) {
//             counter = counter + 1
//         }

//         if (counter > highestCounter) {
//             highestCounter = counter;
//             currentValue = arr[i]
//         }
//     }
// }

// console.log(`value of mode is ${currentValue}`)

//----
//----
//Q:Find number of constants and vowels in a string.

// const vowels = ["a", "e", "i", "o", "u"];
const userInput = document.querySelector("#userInput");
const button = document.querySelector("#btn");
const output = document.querySelector('#output')



// console.log(vowels.length)



// button.addEventListener("click",
//     matching)

// function wordToSplit() {
//     let word = userInput.value;
//     console.log(word)
   
//     return word
// }





// function matching() {

  
//     const splitArr = wordToSplit().split("")
//     console.log(splitArr)

//     let matchCount = 0;

//     for (let i = 0; i < splitArr.length; i++) {

//         for (let j = 0; j < vowels.length; j++) {
//             if (vowels[j] === splitArr[i]) {
//                 matchCount = matchCount + 1;
                
//             }
           
//         }
       
//     }

//     let countOfConsonants = splitArr.length - matchCount;
//     output.innerHTML  = `<div>count of consonants is ${countOfConsonants}</div>
//     <div>count of vowel is ${matchCount}</div>`;    
// }

//-----

const array = [1,2,3,4,5]

function rotateRight () {
    for( let i=0; i<array.length; i++){
        let last = array.pop();
        array.unshift(last)
        console.log(array)
    }
     
}

rotateRight()

// next level up of this question : take input from user then shift each letter or number to right and last one becomes the first one