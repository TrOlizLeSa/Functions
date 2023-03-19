// BEGIN
const solution = () => {
    const json = `
      {
        "name": "John",
        "age": 30,
        "city": "New York",
        "hobbies": [
          "swimming",
          "reading"
        ],
        "isMarried": true,
        "spouse": {
          "name": "Jane",
          "age": 28
        }
      }
    `;
    
    return JSON.parse(json);
  };
  
  export default solution;
// END