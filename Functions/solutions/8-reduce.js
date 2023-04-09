// BEGIN
export default function groupObjectsByKey(arr, key) {
  return arr.reduce((result, obj) => {
    if (!result[obj[key]]) {
      result[obj[key]] = [];
    }
    result[obj[key]].push(obj);
    return result;
  }, {});
};

// END