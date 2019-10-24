var assert = require('assert');



function palindrome (str) {
    var reverse = [];
    var reverseIndex = str.length;


    str.forEach((element, index) => {
        reverse[reverseIndex-index-1] = element;
    });

    for (var i = 0; i < str.length -1; i++) {
        if( reverse[i] !== str[i] ) {
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