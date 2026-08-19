const args = process.argv.slice(2);
console.log(args);

const content = JSON.stringify(args);
process.stdout.write(content);
