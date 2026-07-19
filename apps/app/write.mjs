import { writeFileSync } from 'node:fs';
console.log(writeFileSync);

const args = process.argv.slice(2);
console.log(args);

writeFileSync("./out/memo.md", "test");
