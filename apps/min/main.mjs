import { writeFileSync } from 'node:fs';
console.log(writeFileSync);

const obj = {};

function main() {

  const args = process.argv.slice(2);
  console.log(args);
  console.log("main");
};

main();
