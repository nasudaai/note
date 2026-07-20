import { readFileSync } from 'node:fs';

const data = readFileSync("./out/memo.md");

console.log(data);
