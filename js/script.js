let val = prompt();
let numChars = val.length;
let valChar1 = val.charAt(0);
let valChar2 = val.charAt(1);
let valChar3 = val.charAt(2);
let res = '';

let arr1 = ['нуль', 'один', 'два', 'три', 'чотири', 'п’ять', 'шість', 'сім', 'вісім', 'дев’ять'];
let arr2 = ['нуль', 'одинадцять', 'дванадцять', 'тринадцять', 'чотирнадцять', 'п’ятнадцять', 'шістнадцять', 'сімнадцять', 'вісімнадцять', 'дев’ятнадцять'];
let arr3 = ['нуль', 'десять', 'двадцять', 'тридцять', 'сорок', 'п’ятдесят', 'шістдесят', 'сімдесят', 'вісімдесят', 'дев’яносто'];
let arr4 = ['нуль', 'сто', 'двісті', 'триста', 'чотириста', 'п’ятсот', 'шістсот', 'сімсот', 'вісімсот', 'дев’ятсот'];

function getStringNum () {
    /* if one char */
    if (numChars === 1) {
        res = arr1[valChar1];
        /* if two char */
    } else if (numChars === 2) {
        /* if second char = 0 */
        if (+valChar2 === 0) {
            res = arr3[valChar1];
            /* if first char = 1 */
        } else if (+valChar1 === 1) {
            res = arr2[valChar2];
        } else {
            res = arr3[valChar1] +' '+ arr1[valChar2];
        }
        /* if three char */
    } else if (numChars === 3) {
        /* if second and third char = 0 */
        if (+valChar2 === 0 && +valChar3 === 0) {
            res = arr4[valChar1];
            /* if third char = 0 */
        } else if (+valChar3 === 0) {
            res = arr4[valChar1] +' '+ arr3[valChar2];
            /* if second char = 0 */
        } else if (+valChar2 === 0) {
            res = arr4[valChar1] +' '+ arr1[valChar3];
            /* if second char = 1 */
        } else if (+valChar2 === 1) {
            res = arr4[valChar1] +' '+ arr2[valChar3];
        } else {
            res = arr4[valChar1] +' '+ arr3[valChar2] +' '+ arr1[valChar3];
        }
    }
    return alert(res);
}

getStringNum(val);