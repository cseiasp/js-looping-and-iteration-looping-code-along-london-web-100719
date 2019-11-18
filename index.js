import { endianness } from "os";

// Code your solutions in this file
function writeCards(cards, name){
     let array = []
    for (let i = 0; i < cards.length; i++){
        array.push(`Thank you, ${cards[i]}, for the wonderful ${name} gift!`)
    }

    return array
}

function countDown(integer) {
    while (integer > 0){
        console.log(integer)
        integer -= 1
    }
    console.log(integer)
}

