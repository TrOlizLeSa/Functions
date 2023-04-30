// BEGIN
const magic = (...args) => {
    const sum = args.reduce((acc, arg) => acc + arg, 0);
  
    const innerMagic = (...innerArgs) => {
      if (!innerArgs.length) {
        return sum;
      }
      return magic(...args, ...innerArgs);
    };
  
    innerMagic.valueOf = () => sum;
  
    return innerMagic;
  };
  
  export default magic;
  
// END
