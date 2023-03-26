const get = (data, keys) => {
  let result = data;
  for (const item of keys) {
    if (!Object.hasOwnProperty.call(result, item)) {
      return null;
    }
    result = result[item];
  }
  return result;
  };
  
  
  
  export default get;
  // END