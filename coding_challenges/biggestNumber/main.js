arr = [2, 10, 5, 7];
targetNumber = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (targetNumber < arr[i]) {
        targetNumber = arr[i];
    }
}
console.log(targetNumber);