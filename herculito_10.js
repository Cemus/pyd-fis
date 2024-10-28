/*
total < 1000
n < b*2
b < r < n
777 * b + r + n = b * r * n
*/

function herculito() {
  let b = 1;
  let r = 2;
  let n = 3;

  while (b + r + n < 1000) {
    let total = b + r + n;
    let multiple = b * r * n;
    const limit = 777 * total;
    if (multiple < limit) {
      b += 1;
      r += 2;
      n += 3;
    } else {
      break;
    }
    console.log("blancs", b);
    console.log("roux", r);

    console.log("noirs", n);

    console.log("boeufs", total);
    console.log("multiple", multiple);
    console.log("limit", limit);
  }
}

herculito();
