const args = process.argv.slice(2);
console.log(args);

const [ types, miss ] = args.map((value) => {
  return Number(value);
});

const missPer = miss / types;

console.log(missPer);
