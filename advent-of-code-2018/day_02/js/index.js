const input = require('./input');
const getBoxIDsCheckSum = require('./part-one');
const getCommonLetters = require('./part-two');

const boxIDs = input.value.split(input.separator);

console.log('Box IDs checksum: ', getBoxIDsCheckSum(boxIDs));
console.log('Common letters between the two correct box IDs is: ', getCommonLetters(boxIDs));
