const args = process.argv.slice(2);

const obj = {
  yen: args[0],
  correct: args[1],
  typesPerOfSecond: args[2],
};

console.log(obj.yen);
console.log(obj.typesPerOfSecond);
