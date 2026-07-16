const args = process.argv.slice(2);
console.log(args);
//console.log("main");

const input = args.length !== 0 ? true : false;
console.log(input);

function cheak() {
  
  const input = args.length !== 0 ? true : false;
  console.log(input);
}

function main () {
//  console.log("main");
  if (input === true) {

    console.log(args);
  } else {
    console.log("please args!")
  }
};

main();
