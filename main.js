const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];
let invalidCred = [];
let validCred = [];

//Validate a single card
function validateCred(card) {
    let checkForModulo = 0;

    let lastDigit = card[card.length - 1];
    //console.log('Last Digit: ' + lastDigit);

    let newArray = card.slice(0, -1);
    newArray.reverse();
    //console.log('New Array: ' + newArray);

    //loop through string and double value of odd numbers and then subtract 9 from any items greater than 9 using assignment operators and adds value to variable
    for (let i = 0; i < newArray.length; i += 2) {
        newArray[i] *= 2;
        if (newArray[i] > 9) {
            newArray[i] -= 9;
        }
        checkForModulo += newArray[i];
    }

    //loop through string sums variable we've been incrementing, adds the value of the last digit we removed from it earlier, then checks whether the sum modulo has a remainder of 0
    for (let j = 1; j < newArray.length; j += 2) {
        checkForModulo += newArray[j];
    }
    return (checkForModulo + lastDigit) % 10 === 0;
}

// batch.forEach(element => console.log(validateCred(element)));

function findInvalidCards(element) {
    batch.forEach(function (element) {
        // console.log(validateCred(element));
        if (validateCred(element) == false) {
            invalidCred.push(element);
        }
    })
};
findInvalidCards();
// console.log(invalidCred);

invalidCardCompanies = [];

function idInvalidCardCompanies() {
    //looping through the invalidCred array
    for (let i = 0; i < invalidCred.length; i++) {
        const badCard = invalidCred[i];
        for (let j = 0; j < 1; j++) {
            switch (badCard[j]) {
                case badCard[j][0] = 3:
                    invalidCardCompanies.push(' Amex');
                    break;
                case badCard[j][0] = 4:
                    invalidCardCompanies.push(' Visa');
                    break;
                case badCard[j][0] = 5:
                    invalidCardCompanies.push(' MasterCard');
                    break;
                case badCard[j][0] = 6:
                    invalidCardCompanies.push(' Discover');
                    break;
                default:
                    invalidCardCompanies.push(' Company not found');
            }
        }
    }
}

idInvalidCardCompanies();

function removeDuplicates(array) {
    return array.filter((a, b) => array.indexOf(a) === b)
};

console.log('Companies that have submitted invalid cards are: ' + removeDuplicates(invalidCardCompanies));
