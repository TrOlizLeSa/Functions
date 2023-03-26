export default function fill(obj, keys, data) {
  if (keys.length === 0){
    Object.assign(obj, data);
  } 
  else{
    keys.reduce((acc, key) => {
      if (key in data) {
        acc[key] = data[key];
      }
      return acc;
    }, obj);
  }
   
  
  return obj;
}