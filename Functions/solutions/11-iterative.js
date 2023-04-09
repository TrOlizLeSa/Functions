
    // BEGIN
const smallestDivisor = (number) => {
  if (number < 1){
    return NaN;
  }
  if (number === 1){
    return 1;
  }
      let divider = 2;
    
      while (number % divider !== 0){
        divider += 1;
      }
      return divider;
    };
    // END
  
export default smallestDivisor;
  