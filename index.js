// Code your solutions in this file

function writeCards(nameArray, eventName) {
    let cardArray = [];

    for (let i = 0; i < nameArray.length; i++) {
        cardArray.push(`Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`);
    }
    
    return cardArray;
}

function countDown(start) {
    let count = start;

    while (count>=0) {
        console.log(count);
        count--;
    }
}