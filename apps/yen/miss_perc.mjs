const args = process.argv.slice(2);
console.log(args);

const [ types, miss ] = args.map(Number);
console.log(types, miss);
