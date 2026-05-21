import { writeFileSync } from 'node:fs';
console.log(writeFileSync);

const memoContent = process.argv.slice(2);

console.log(memoContent);
