console.log ("Hello");
var assert = require('assert');


function findNumFrequency(array) {

    // Create a hash like structure to store frequencies


    var freqmap = new Map();
    array.forEach(element => {
        if( freqmap.get(element) ) {
            freqmap.set(element, freqmap.get(element) + 1);
        } else {
            freqmap.set(element, 1);
        }
    });

    var numoccur = 1; 
    var biggesOccurencyNum = -1; //When no occurencies -1 signals that no particular number is more frequent than the other
    freqmap.forEach( (freq, num) =>  {
        if( freq > numoccur ) {
            biggesOccurencyNum = num;
            numoccur = freq;
        } else if( freq === numoccur && freq > 1) {
            if( biggesOccurencyNum < num ) {
                biggesOccurencyNum = num;
            }
        }
    });

    
    return biggesOccurencyNum;
}

// findNumFrequency([4,2,3,4]);
//*
assert( findNumFrequency([]) === -1);
assert( findNumFrequency([1,2,3,4]) === -1);
assert( findNumFrequency([1,2,1,4]) === 1);
assert( findNumFrequency([4,2,3,4]) === 4);
assert( findNumFrequency([1,2,3,4,7,2,4,1,5,7,8]) === 7); // When more than one return biggest number
//*/