// Exercise 1: Filtering an Array

function detectEvenValues(...numbers){
    let evenValues = [];

    for(let i=0 ; i < numbers.length ; i++){
        if(numbers[i] % 2 == 0){
            evenValues.push(numbers[i]);
           

        }
    }
    return evenValues;
}

const result = detectEvenValues( 1 , 2 , 3 , 4, 5 , 6 , 7 , 8 , 9 , 10 , 16 , 19 , 22 );
console.log(`array with only even values => ${result} => first way`);


//another solution for Exercise 1
function detectEvenValues2(...numbers) {
    return numbers.filter(number => number % 2 == 0); 
}

const result2 = detectEvenValues( 1 , 2 , 3 , 4, 5 , 6 , 7 , 8 , 9 , 10 , 16 , 19 , 22 );
console.log(`array with only even values => ${result2} => second way`);
console.log("*************************************************************************");


/******************************************************************************************************* */
// Exercise 2 => the largest number in the array

function findLargestNumber(numbers) {
    let largest = numbers[0]; 

    if (numbers.length === 0) {
        throw new Error("The array is empty");
    }
    
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i]; 
        }
    }
    return largest;
}

const array = [3, 5, 7, 2, 8, -1, 4 , 12 , 18];
console.log("the largest number in array is " + findLargestNumber(array)); 
console.log("******************************************************************");


/********************************************************************************************************* */
// Exercise 3 => reverse the string

function reverseString(text) {
    let reversed = ""; 
    for (let i = text.length - 1 ; i >= 0 ; i--) {
        reversed += text[i]; 
    }
    return reversed;
}


console.log(reverseString("hello") + " => first way"); 


//another solution for Exercise 3

function reverseString2(str) {
   return str.split("").reverse().join("");
}


console.log(reverseString2("hello") + " => second way"); 
console.log("******************************************************************");


/******************************************************************************************************* */
//Exercise 4
function removeDuplicates(numbers) {
    let uniqueNumbers = []; 
        for (let i = 0; i < numbers.length ; i++) {
        if (!uniqueNumbers.includes(numbers[i])) {
            uniqueNumbers.push(numbers[i]); 
        }
    }
    return uniqueNumbers;
}


console.log("array afer removing duplicates " + removeDuplicates([1 , 1 , 2, 2, 3, 4, 4, 5 , 5 , 6]) + " => first way"); 


//another solution for Exercise 4
function removeDuplicates2(numbers) {
    return [...new Set(numbers)]; 
}


console.log("array afer removing duplicates " + removeDuplicates([1 , 1 , 2, 2, 3, 4, 4, 5 , 5 , 6]) + " => second way"); 







