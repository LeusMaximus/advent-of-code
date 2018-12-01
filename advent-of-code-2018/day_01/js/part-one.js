const sumFrequencies = values => values.reduce(
  (sum, value) => sum + Number(value),
  0
);

module.exports = sumFrequencies;