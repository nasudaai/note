import { writeFileSync } from 'node:fs';
import { dateTime } from './date.mjs'
console.log(writeFileSync);

const args = process.argv.slice(2);

const obj = {
  yen: args[0],
  correct: args[1],
  typesPerOfSecond: args[2],
  miss: args[3],
  cource: args[4],
};

//console.log(obj.yen);
//console.log(obj.typesPerOfSecond);

for (let i = 0; i < args.length; i++) {
 console.log(Object.values(obj)[i]); 
}

const values = Object.values(obj);
console.log(values);

writeFileSync("./out/out.txt", "test");
