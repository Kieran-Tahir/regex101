const ex1 = 'The quick brown fox jumped over the lazy dog';
const ex2 = 'A1B2C3D4E5F6G7H8I9J10';
const ex3 = 'The salad costs $9.99';
const ex4 = 'Contact customer support on 0800 300 500';
const ex5 = 'You can contact me on Twitter @codebubb or james@juniordevelopercentral.com';

// Exercise 01
// Using a regex pattern, get the 3 letter words in the ex1 string.

const reg1 = ex1.match(/\b(\w{3})\b/g)




// Exercise 02
// Using a regex pattern, remove all of the numbers from the ex2 string.

const reg2 = ex2.replace(/[\d]/g, '')



// Exercise 03
// Using a regex pattern, find the monetary value contained within the ex3 string.

const reg3 = ex3.match(/\$\d{1,3}\.\d{2}/g)



// Exercise 04
// Using a regex pattern, find the telephone number contained within the ex4 string.

const reg4 = ex4.match(/(\d{3,4}\s?){3}/g)




// Exercise 05
// Using a regex pattern, find the email address contained within the ex5 string.

const reg5 = ex5.match(/\S+@\S+\.\S{2,6}/g)

console.log(reg1)
console.log(reg2)
console.log(reg3)
console.log(reg4)
console.log(reg5)