/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.
*/

function hasOddNumber(arr) {
    return arr.some(function(n) {
        return n % 2 === 1;
    })
}

/*
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false
*/

function hasAZero(num) {
    const numArray = Array.from(String(num));
    return numArray.some(function(n) {
        return n === '0';
    })
}

/*
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false. 
*/

function hasOnlyOddNumbers(arr) {
    return arr.every(function(n) {
        return n % 2 === 1;
    })
}

/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.
*/

function hasNoDuplicates(arr) {
    return arr.every(function(value, index) {
        return arr.indexOf(value) === index;
    })
}

/*
Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.
*/

function hasCertainKey(arr, key) {
    return arr.every(function(obj) {
        return obj[key] !== undefined;
    })
}

/*
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.
*/

function hasCertainValue(arr, key, searchValue) {
    return arr.every(function(obj) {
        return obj[key] === searchValue;
    })
}
