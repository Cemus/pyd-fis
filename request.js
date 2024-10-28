function fetchPy() {
  fetch("https://pydefis.callicode.fr/defis/ExempleURL/get/Euthyphron/66eed")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      console.log(data);
      const splittedData = data.split("\n");
      const signature = splittedData[0];
      const total = parseInt(splittedData[1]) + parseInt(splittedData[2]);
      const result = { sig: signature, rep: total };
      console.log(result);
      sendPy(result);
    })
    .catch((error) => {
      console.error(error);
    });
}

function sendPy(result) {
  fetch("https://pydefis.callicode.fr/defis/ExempleURL/post/Euthyphron/66eed", {
    method: "POST",
    headers: {
      "Content-Type": "text/plain",
    },
    body: JSON.stringify(result),
  })
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}
fetchPy();
