// module.exports = function multiply(first, second) {
function multiply(first, second) {
  
  const getMaxMinByLength = (first, second) => {
    if (first.length >= second.length) {
      return [first, second];
    } else {
      return [second, first];
    }
  };
  
  const multiplyByDigit = (number, digit) => {
    const composition = [...number].reduceRight((acc, el) => {
      const [result, perenos] = acc;
      const intermediateResult = el * digit + perenos;
      const nextResult = `${intermediateResult % 10}${result}`;
      const nextPerenos = (intermediateResult / 10) ^ 0;
      return [nextResult, nextPerenos];
    }, ['', 0]);
    return composition[1] === 0 ? composition[0] : `${composition[1]}${composition[0]}`;
  };

  const [max, min] = getMaxMinByLength(first, second);

  const multiplyArray = [...min].reverse().map((el, index) => {
    const intermediateResult = multiplyByDigit(max, +el);
    const result = `${intermediateResult}${'0'.repeat(index)}`;
    return result;
  });

  const sumTwoNumbers = (first, second) => {
    console.log('first:', first);
    console.log('second:', second);
    
    const [max, min] = getMaxMinByLength(first, second);
    console.log('max:', max);
    console.log('min:', min);

    const reversedMax = [...max].reverse();
    const reversedMin = [...min].reverse();
    console.log('reversedMax:', reversedMax);
    console.log('reversedMin:', reversedMin);

    const summary = reversedMin.reduce((acc, el, index) => {
      console.log(`in reduce (acc, el, index): [${acc}], ${el}, ${index}`);
      console.log(`in reduce reversedMax[index]: ${reversedMax[index]}`);
      
      const [result, perenos] = acc;
      const intermediateResult = (+el) + (+reversedMax[index]) + perenos;
      const nextResult = `${result}${intermediateResult % 10}`;
      const nextPerenos = (intermediateResult / 10) ^ 0;
      return [nextResult, nextPerenos];
    }, ['', 0]);
    return summary[1] === 0 ? [...summary[0]].reverse() : `${summary[1]}${[...summary[0]].reverse()}`;
  };


  const yy = sumTwoNumbers('89', '123456');
  console.log(yy);
  
  
  

  // const arrayForSum = [...first]

  
  // const sum = (first, second) => {
  //   const max = first.length >= second.length ? first : second;
  //   const min = first.length < second.length ? first : second;


  // }


  // const uu = multiplyByDigit(first, parseInt(second));
  // console.log((uu));
  

}

multiply('222', '123');