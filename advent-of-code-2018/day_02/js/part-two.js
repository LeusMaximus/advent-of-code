const removeDifferentLetter = (str1, str2) => {
  let differentCount = 0;
  let differentIndex = null;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      differentCount += 1;

      if (differentCount > 1) {
        return '';
      }

      differentIndex = i;
    }
  }

  return differentIndex !== null ? str1.slice(0, differentIndex) + str1.slice(differentIndex + 1) : '';
};


const getCommonLetters = boxIDs => {
  const idsNumber = boxIDs.length;

  for (let i = 0; i < idsNumber; i++) {
    const isLastItem = i === idsNumber - 1;

    if (isLastItem) {
      return '';
    }

    for (let j = i + 1; j < idsNumber; j++) {
      const parsedId = removeDifferentLetter(boxIDs[i], boxIDs[j]);

      if (parsedId.length) {
        return parsedId;
      }
    }
  }

  return '';
}

module.exports = getCommonLetters;
