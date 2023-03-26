export default (companyOne, companyTwo) => {
  const propsToCompare = ['name', 'state', 'website'];
  for (const item of propsToCompare) {
    if (companyOne[item] !== companyTwo[item]) {
      return false;
    }
  }
  
  
  return true;
};