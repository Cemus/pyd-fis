function herculito(text) {
  const namesList = text.split(" ");
  const finalList = {};

  namesList.forEach((name) => {
    const nameInNumbers = [];

    for (let i = 0; i < name.length; i++) {
      const number = name.charCodeAt(i);
      nameInNumbers.push(number - 64);
    }

    let total = 0;

    for (let i = 0; i < nameInNumbers.length; i++) {
      total += nameInNumbers[i];
    }

    finalList[name] = total;
  });

  const sortedList = [];

  for (const name in finalList) {
    sortedList.push([name, finalList[name]]);
  }

  sortedList.sort(function (a, b) {
    return a[1] - b[1];
  });

  sortedList.forEach((group) => {
    group.pop();
  });

  const finalString = sortedList.flat().join(" ");
  console.log(finalString);
}

herculito(
  "ARTEMIS ASCLEPIOS ATHENA ATLAS CHARON CHIRON CRONOS DEMETER EOS ERIS EROS GAIA HADES HECATE HEPHAISTOS HERA HERMES HESTIA HYGIE LETO MAIA METIS MNEMOSYNE NYX OCEANOS OURANOS PAN PERSEPHONE POSEIDON RHADAMANTHE SELENE THEMIS THETIS TRITON ZEUS"
);
