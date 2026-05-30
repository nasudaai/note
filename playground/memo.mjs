import { writeFileSync } from 'node:fs';
console.log(writeFileSync);

const memoContent = process.argv.slice(2);
const memo = memoContent[0];

console.log(memoContent);


writeFileSync("./out/memo.md", memo);
