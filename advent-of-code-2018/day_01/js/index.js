const input = require('./input');
const sumFrequencies = require('./part-one');
const getTwiceRepeatedFrquency = require('./part-two');

const values = input.value.split(input.separator);

console.log('Resulting Frequency is: ', sumFrequencies(values));
console.log('The first frequency of the device reaches twice is: ', getTwiceRepeatedFrquency(values));