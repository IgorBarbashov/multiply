// module.exports = function multiply(first, second) {
function multiply(first, second) {
  
  const multiplyByDigit = (number, digit) => {
    const composition = [...number].reduceRight((acc, el) => {
      const [result, perenos] = acc;
      const intermediateResult = el * digit + perenos;
      const nextResult = `${intermediateResult % 10}${result}`;
      const nextPerenos = (intermediateResult / 10) ^ 0;
      return [nextResult, nextPerenos];
    }, ['', 0]);
    return composition[1] === 0 ? composition[0] : `${composition[1]}${composition[0]}`;
  }

  // const arrayForSum = [...first]

  
  // const sum = (first, second) => {
  //   const max = first.length >= second.length ? first : second;
  //   const min = first.length < second.length ? first : second;


  // }
  





  const uu = multiplyByDigit(first, parseInt(second));
  console.log((uu));
  



}

multiply('9567670980891220466767', 8);