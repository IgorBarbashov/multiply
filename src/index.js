module.exports = function multiply(first, second) {
  const getMaxMinByLength = (first, second) => {
    if (first.length >= second.length) {
      return [first, second];
    } else {
      return [second, first];
    }
  };

  const multiplyByDigit = (number, digit) => {
    const composition = [...number].reduceRight(
      (acc, el) => {
        const [result, perenos] = acc;
        const intermediateResult = el * digit + perenos;
        const nextResult = `${intermediateResult % 10}${result}`;
        const nextPerenos = (intermediateResult / 10) ^ 0;
        return [nextResult, nextPerenos];
      },
      ["", 0]
    );
    return composition[1] === 0
      ? composition[0]
      : `${composition[1]}${composition[0]}`;
  };

  const sumTwoNumbers = (first, second) => {
    const [max, min] = getMaxMinByLength(first, second);
    const reversedMax = [...`0${max}`].reverse();
    const reversedMin = [...min].reverse();

    const summary = reversedMax.reduce(
      (acc, el, index) => {
        const [result, perenos] = acc;
        const fromMinNumber =
          index >= reversedMin.length ? 0 : +reversedMin[index];
        const intermediateResult = +el + fromMinNumber + perenos;
        const nextResult = `${result}${intermediateResult % 10}`;
        const nextPerenos = (intermediateResult / 10) ^ 0;
        return [nextResult, nextPerenos];
      },
      ["", 0]
    );

    const directResult = [...summary[0]].reverse().join("");
    const itog = directResult[0] === "0" ? directResult.slice(1) : directResult;
    return itog;
  };

  const [max, min] = getMaxMinByLength(first, second);

  const multiplyArray = [...min].reverse().map((el, index) => {
    const intermediateResult = multiplyByDigit(max, +el);
    const result = `${intermediateResult}${"0".repeat(index)}`;
    return result;
  });

  return multiplyArray.reduce((acc, el) => sumTwoNumbers(acc, el));
};
