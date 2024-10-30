const fs = require("fs");

async function readAddresses() {
  try {
    const data = await fs.promises.readFile("C24_adresses.txt");
    return data.toString();
  } catch (error) {
    console.log(error);
  }
}

let addresses = readAddresses().toString();

addresses.split("\n");
console.log(addresses);
