const fs = require("fs");

async function readInputs() {
  try {
    const data = await fs.promises.readFile("input.txt");
    return data.toString();
  } catch (error) {
    console.log(error);
  }
}

function presents(formula) {
  const splitted = formula.split("x");
  const l = parseInt(splitted[0]);
  const w = parseInt(splitted[1]);
  const h = parseInt(splitted[2]);
  const total = 2 * l * w + 2 * w * h + 2 * h * l;
  const smallestSide = Math.min(l * w, w * h, h * l);
  return total + smallestSide;
}

function ribbons(formula) {
  const splitted = formula.split("x");

  const l = parseInt(splitted[0]);
  const w = parseInt(splitted[1]);
  const h = parseInt(splitted[2]);

  const array = [l, w, h];

  const smallestSide1 = Math.min(array[0], array[1], array[2]);
  const smallestSideIndex = array.findIndex((arr) => {
    return arr === smallestSide1;
  });
  array.splice(smallestSideIndex, 1);
  const smallestSide2 = Math.min(array[0], array[1]);

  const wrap = 2 * smallestSide1 + 2 * smallestSide2;
  const bow = l * w * h;

  return wrap + bow;
}

async function main() {
  let inputs = await readInputs();
  let formulae = inputs.split("\n");
  let sum = 0;

  formulae.forEach((formula) => {
    /*     sum += presents(formula); */
    sum += ribbons(formula);
  });

  console.log(sum);
  return sum;
}

main();
