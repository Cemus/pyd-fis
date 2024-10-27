function herculito(array) {
  let totalStones = 0;
  let lastHeight = null;
  for (let i = 0; i < array.length; i++) {
    if (lastHeight && lastHeight > array[i]) {
      totalStones += (lastHeight - array[i]) / 10 + 1;
    }
    lastHeight = array[i];
  }
  console.log(totalStones);
  return totalStones;
}

herculito([
  0, 20, 10, 120, 40, 170, 40, 60, 50, 100, 50, 180, 170, 180, 80, 130, 10, 150,
  120, 130, 80, 170, 60, 110, 10, 60, 20, 180, 40, 50, 10, 70, 40, 190, 80, 130,
  110, 190, 60, 170, 10, 200, 20, 50, 20, 180, 30, 70, 30, 130, 80, 120, 100,
  140, 100, 110, 70, 170, 160, 180, 170, 200, 50, 170, 100, 130, 60, 70, 10,
  180, 150, 180, 100, 140, 110, 120, 60, 100, 90, 180, 160, 190, 80, 90, 80, 90,
  60, 90, 30, 80, 70, 110, 10, 110, 60, 70, 50, 180, 90, 140, 70, 160, 90, 200,
  110, 160, 110, 150, 30, 100, 50, 120, 30, 160, 150, 200, 40, 120, 40, 90, 50,
  170, 60, 140, 60, 150, 110, 200, 120, 130, 20, 110, 100, 170, 20, 200, 130,
  180, 70, 140, 20, 30, 20, 90, 50, 80, 60, 110, 50, 120, 30, 180, 160, 170,
  140, 180, 100, 170, 20, 130, 50, 100, 70, 190, 170, 200, 180, 190, 30, 50, 30,
  40, 30, 150, 30, 70, 20, 180, 40, 60, 50, 190, 70, 170, 90, 150, 30, 100, 60,
  100, 10, 60, 20, 150, 130, 180, 140, 190, 70, 150, 140, 180, 0,
]);
