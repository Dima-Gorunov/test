const arr = [
  "адрес",
  "среда",
  "парк",
  "карп",
  "торг",
  "грот",
  "ропот",
  "топор",
  "тропа",
  "апорт",
];

function anagr(arr) {
  const cache = {};
  const result = [];
  arr.forEach((element) => {
    const sortWord = element.split("").sort().join("");
    console.log(sortWord);
    if (cache.hasOwnProperty(sortWord)) {
      cache[sortWord].push(element);
    } else {
      cache[sortWord] = [element];
    }
  });

  for (const key in cache) {
    result.push(cache[key]);
  }
  return result;
}

console.log(anagr(arr));
