"use strict";

//Tapşırıq 1: map metodu
//Verilmiş ədədlər massivini ikiqat artıran yeni bir massiv yaradın.

/*const numbers = [10, 22, 35, 1, 19];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // [20,44,70,2,38];*/




//Tapşırıq 2: filter metodu
//Verilmiş massivdən yalnız cüt ədədləri seçərək yeni bir massiv yaradın.

/*const numbers = [3, 66, 7, 65, 67, 90, 100, 34];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // [66,90,100,34]



Tapşırıq 3:
Verilmiş ədədlər massivinin cəmini hesablayın.

const numbers = [6,7,8,9];

let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // 30*/

//Tapşırıq 4: find metodu
//Verilmiş massivdə 5-ə bərabər olan ilk elementi tapın.

/*const numbers = [6, 7, 45, 56, 67, 87, 5, 4, 78];

const foundNumber = numbers.find(num => num === 5);

console.log(foundNumber); // 5 */

//Tapşırıq 5: some metodu
//Verilmiş massivdə ən az bir elementin 10-dan böyük olduğunu yoxlayın.

/*const numbers = [1, 2, 11, 7, 8];
const hasGreaterThanTen = numbers.some(num => num > 10);

console.log(hasGreaterThanTen); // true*/


//Tapşırıq 6: every metodu
//Verilmiş massivdəki bütün ədədlərin müsbət olduğunu yoxlayın

/*const numbers = [9,6,8,98,76];
const allPositive = numbers.every(num => num > 0);

console.log(allPositive); // true*/


//Tapşırıq 7: includes metodu
//Verilmiş massivdə 3 ədədinin olub-olmadığını yoxlayın.

/*const numbers = [4, 8, 9, 7, 8];
const hasThree = numbers.includes(3);

console.log(hasThree); // false*/


//Tapşırıq 8: sort metodu
//Verilmiş ədədlər massivini artan sıraya düzün.

/*const numbers = [6, 5, 8, 9, 70, 98];
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);*/

//Tapşırıq 9: splice metodu
//Verilmiş massivdən ikinci elementi silin.
/*const numbers = [1, 2, 3, 4, 5];
numbers.splice(1, 1);

console.log(numbers);*/

//Tapşırıq 10: slice metodu
//Verilmiş massivdən yalnız bir hissəsini çıxarın.

/*const numbers = [1, 2, 3, 4, 5];
const slicedNumbers = numbers.slice(1, 4);

console.log(slicedNumbers); // [2, 3, 4]*/





//Tapşırıq 11: forEach metodu
//Verilmiş massivdəki bütün ədədləri konsola yazdırın.

/*const array = [1, 2, 3, 4, 5];
array.forEach(num => console.log(num));*/


//Tapşırıq 12: Massivi tərsinə çevirin

/*const reversedArray = array.reverse();
console.log(reversedArray);*/


//Tapşırıq 13: "hello" stringinin olub-olmadığını yoxlayın

/*const mixedArray = ['hello', 1, 2, 3];
const containsHello = mixedArray.includes('hello');
console.log(containsHello); // true*/



//Tapşırıq 14: Massivdə ən az bir elementin ədədi olub olmadığını yoxlayın

/*const hasNumber = mixedArray.some(item => typeof item === 'number');
console.log(hasNumber); // true*/


//Tapşırıq 15: ədədləri vergül ilə birləşdirərək string yaradın

/*const numberString = array.join(', ');
console.log(numberString); // "1, 2, 3, 4, 5"*/


//Tapşırıq 16: Verilmiş stringi böyük hərflərə çevirin

/*const str = "aylin esmanur";
const upperStr = str.toUpperCase();
console.log(upperStr); // "AYLIN ESMANUR"*/


//Tapşırıq 17: Verilmiş stringi kiçik hərflərə çevirin
/* const str = "AYLIN ESMANUR";
const lowerStr = str.toLowerCase();
console.log(lowerStr); // "aylin esmanur"*/


//Tapşırıq 18: charAt metodu
//Verilmiş stringin üçüncü hərfini tapın.
/*const str="aylin"
const thirdChar = str.charAt(2);
console.log(thirdChar);//'l'*/

//Tapşırıq 19: substring metodu
//Verilmiş stringdən 2-ci və 5-ci indekslər arasındakı hissəni çıxarın.

/*const str = "aylin esmanur";
const result = str.substring(2,5);
console.log(result);//lin*/




//Tapşırıq 20: slice metodu
//Verilmiş stringin son 4 simvolunu çıxarın.

/*const str = "gunay aylin";
const lastFourChars = str.slice(-4);
console.log(lastFourChars); // "ylin"*/


//Tapşırıq 38: replaceAll metodu
//Verilmiş stringdəki bütün "e" hərflərini "E" ilə əvəz edin
/*const str = "mese eyvan";
const replacedStr = str.replaceAll("e", "E");
console.log(replacedStr); // "mEsE Eyvan"*/



//Tapşırıq 37:
//Verilmiş stringdə "Script" sözünün olub-olmadığını yoxlayın.
/*const str = "men  java script oyrenirem";
const containsScript = str.includes("Script");
console.log(containsScript); // true*/

Tapşırıq 35: slice metodu
Verilmiş stringin ilk 5 simvolunu çıxarın.



















