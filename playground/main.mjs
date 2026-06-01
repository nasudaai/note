
function input() {

  const args = process.argv.slice(2);
  console.log(args);

  return args;
}

function main() {
  const vari = input();

  console.log("main");
  console.log(vari);
}

main();
