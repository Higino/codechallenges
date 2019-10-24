console.log ("Hello");
var assert = require('assert');


function findNumFrequency(array) {

    // Create a hash like structure to store frequencies


    var freqmap = new Map();
    var frequencyArray = [-1];
    array.forEach(element => {
        if( freqmap.get(element) ) {
            freqmap.set(element, freqmap.get(element) + 1);
            frequencyArray[freqmap.get(element)] = element;
        } else {
            freqmap.set(element, 1);
            frequencyArray[1] = element;
        }
    });


    if( frequencyArray.length-1 === 1 )
        return -1;
    return frequencyArray[frequencyArray.length-1];
}


//findNumFrequency([4,2,3,4]);
//*
assert( findNumFrequency([]) === -1);
assert( findNumFrequency([3]) === -1);
assert( findNumFrequency([1,2,3,4]) === -1);
assert( findNumFrequency([1,2,1,4]) === 1);
assert( findNumFrequency([4,2,3,4]) === 4);
assert( findNumFrequency([1,2,3,4,7,2,4,1,5,7,8]) === 7); // When more than one return biggest number
console.log('All tests passed successfully');
//*/