// Code your solutions in this file
function writeCards( array, surprise) {
    let cards = []
    for ( let i=0; i < array.length; i++) {
        cards.push( `Thank you, ${array[i]}, for the wonderful ${surprise} gift!` )
    }
    return cards
 }

 function countDown(num) {
    while (num > 0) {
        console.log( num);
        num -= 1;
    }
    console.log ( num );
 }