const getBoxIDsCheckSum = boxIDs => {
  const lettersRepeated = boxIDs.reduce(
    (acc, boxID) => {
      const lettersCount = [...boxID].reduce(
        (letters, letter) => ({
            ...letters,
            [letter]: letter in letters ? letters[letter] + 1 : 1
        }),
        {}
      );

      const lettersNumber = Object.values(lettersCount);

      return {
        twice: acc.twice + (lettersNumber.includes(2) ? 1 : 0),
        thrice: acc.thrice + (lettersNumber.includes(3) ? 1 : 0)
      };
    },
    {
      twice: 0,
      thrice: 0
    }
  );

  return lettersRepeated.twice * lettersRepeated.thrice;
};

module.exports = getBoxIDsCheckSum;