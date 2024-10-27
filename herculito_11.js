function herculito() {
  const pyramid = [];
  let result = 0;

  for (let i = 0; i < 50; i++) {
    pyramid.push(i * i);
  }

  for (const floor of pyramid) {
    if (floor % 3 == 0) {
      result += floor;
    }
  }

  console.log(result);
}

herculito();
