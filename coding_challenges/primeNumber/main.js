let primeNumbers = [];

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function getPrimeNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primeNumbers.push(arr[i]);
        }
    }
}

let arr = [];
for (let i = 1; i <= 100; i= i+2) {
    arr.push(i);
}
/*
why to call a funtion?
if we dont call a funtion it never goes for execution.. it only holds its definition

*/
getPrimeNumbers(arr);
console.log(primeNumbers);
