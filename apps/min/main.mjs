import { writeFileSync } from 'node:fs';
import { readFileSync } from 'node:fs';
console.log(readFileSync);
//console.log(writeFileSync);

const obj = {};

function main() {

  const args = process.argv.slice(2);
  const inputData = JSON.stringify(args);
  console.log(inputData);

//  writeFileSync('./out/memo.md', "test");

  writeFileSync("out/out.txt", inputData);


  console.log(args);
  console.log("main");
};

main();
