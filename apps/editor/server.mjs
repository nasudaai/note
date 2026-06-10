import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';
console.log(readFileSync);

//console.log(createServer);

const html = readFileSync("./index.html", "utf-8");
console.log(html);

const js = 

const server = createServer((req, res) => {

  if (req.url === "/main.js") {
    res.end(js);
  }
  res.end(html);
});


server.listen(3000, () => {
  console.log("listen http://localhost:3000");
});
