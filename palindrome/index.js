var assert = require('assert');



function palindrome (str) {
    var reverse = [];
    var norm = [];
    var reverseIndex = str.length -1;


    for(var index=0; index < str.length-1 ; index++) {
        reverse[index] = str[reverseIndex-index];
        norm[index] = str[index];
        if( index === reverseIndex - index-1 || index === reverseIndex - index) {
            break;
        }        
    }
    
    /*str.forEach((element, index) => {
        reverse[reverseIndex-index-1] = element;
        norm[index] = element;
    });*/

    console.log(norm);
    console.log(reverse);
    for (var i = 0; i < str.length -1; i++) {
        if( reverse[i] !== norm[i] ) {
            return false;
        }
    }

    return true;
}



assert (palindrome(['A','S','K','J','A','N','S','D','A','S','D']) === false);
assert (palindrome(['A','K','A']) === true);
assert (palindrome(['A','K','K','A']) === true);
assert (palindrome(['A','K','K','A','W']) === false);
assert (palindrome([]) === true);
console.log('All tests passed');