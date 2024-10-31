const fs = require("fs");

const solution = "1a6e1g1i1l1m1n1o2r2s2u1y";

async function readAddresses() {
  try {
    const data = await fs.promises.readFile("C24_adresses.txt");
    return data.toString();
  } catch (error) {
    console.log(error);
  }
}

function getPrint(address) {
  const letters = [];

  for (let i = 0; i < address.length; i++) {
    letters.push(address[i]);
  }

  letters.sort();
  const print = [];
  let prevLetter = "";
  let letterCount = 0;

  for (let i = 0; i <= letters.length; i++) {
    if (letters[i] !== prevLetter) {
      if (prevLetter !== "") {
        print.push(letterCount, prevLetter);
      }
      letterCount = 1;
      prevLetter = letters[i];
    } else {
      letterCount++;
    }
  }
  const result = { address: address, print: print.join("") };
  return result;
}

async function main() {
  let addresses = await readAddresses();

  const prints = [];
  const addressArray = addresses.split("\n");

  addressArray.forEach((address) => {
    let optiAdress = address.replaceAll(" ", "").replaceAll("-", "");
    prints.push(getPrint(optiAdress));
  });

  let result = "";
  for (const [key, value] of Object.entries(prints)) {
    if (value.print === solution) {
      console.log(value.address);
      result = value.address;
    }
  }
  console.log(result);
}

main();
