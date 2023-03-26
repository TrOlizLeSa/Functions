// BEGIN
//const pick = (obj, keys) => {
  export default function pick(obj, keys) {
    const result = {};
    for (const item of keys) {
      if (obj.hasOwnProperty(item)) {
        result[item] = obj[item]
      }
    }
    
   
    return result;
  }