const args = process.argv.slice(2);
console.log(args);

const [ miss, types ] = args.map((value) => {
  return Number(value);
});

const missPer = miss / types;

console.log(missPer);
