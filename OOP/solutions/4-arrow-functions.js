// BEGIN
export default (objects, callback) => {
    objects.forEach((obj) => callback.call(obj));
  };
  
// END
