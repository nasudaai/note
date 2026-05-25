import { createServer } from 'node:http';
import { writeFileSync } from 'node:fs';
console.log(writeFileSync);

console.log(createServer);

const server = createServer((req, res) => {
  res.end("hi");
});

server.listen(3000, () => {
  console.log("listen http://localhost:3000");
});


