import { readFileSync } from 'node:fs';

console.log(readFileSync);

const data = readFileSync("./out/out.txt");
console.log(data);
