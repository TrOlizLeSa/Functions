const cloneShallow = (obj) => {
  const newObject = {};
  for (const item in obj) {
    newObject[item] = obj[item];
  }
  return newObject;
};


export default cloneShallow;