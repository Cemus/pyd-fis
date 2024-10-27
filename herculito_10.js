function herculito() {
  let b = 3;
  let r = 4;
  let n = 5;

  while ( ) {
    let total = b + r + n;
    const limit = 777 * total;
    if (b * r * n < limit) {
      b *= 3;
      r *= 3;
      n *= 3;
    }

    console.log(total);
  }
}

herculito();
