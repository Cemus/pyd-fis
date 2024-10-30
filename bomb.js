function defuse(number) {
  let array = number.toString();
  let U = array.slice(0, array.length / 2);
  let N = array.slice(array.length / 2, array.length);
  N = parseInt(N);
  console.log("N", N);
  console.log("U", U);
  for (let i = 0; i < N; i++) {
    U *= 13;
    U = U.toString();
    console.log("U * 13", U);
    U = U % 1000;
    console.log("U % 100", U);
    U = parseInt(U);
  }

  console.log(U);
}

defuse(797114);
