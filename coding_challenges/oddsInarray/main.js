arr = [2, 10, 5, 7];
odds = [];

function findOdds(e) {
    if (e % 2 == 1) {
        return true;
    } else {
        return false;
    }
}

for(let i=0; i < arr.length; i++){
    if(findOdds(arr[i])){
        odds.push(arr[i]);
    }
}

console.log(odds);