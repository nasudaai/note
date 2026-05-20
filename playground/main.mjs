function input() {

  const args = process.argv.slice(2);
  console.log(args);
}

function main() {
  input();
  console.log("main");
}

main();
