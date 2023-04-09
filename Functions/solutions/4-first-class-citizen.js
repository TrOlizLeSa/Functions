const convertLastCharacters = (str, num) => {
  if (str === "" || num > str.length) {
    return null;
  } else {
    return str.slice(-num).split("").reverse().join("");
  }
}

export default function run(text) {
  return convertLastCharacters(text, 4);
}