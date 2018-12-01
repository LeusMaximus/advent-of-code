const getTwiceRepeatedFrequency = values => {
  let frequencies = {};
  let currentFrequency = 0;

  while (true) {
    for (let val of values) {
      currentFrequency += Number(val);

      if (frequencies[currentFrequency]) {
        return currentFrequency;
      }

      frequencies[currentFrequency] = true;
    }
  }
};

module.exports = getTwiceRepeatedFrequency;
