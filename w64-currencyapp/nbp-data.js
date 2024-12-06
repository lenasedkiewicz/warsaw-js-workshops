fetch("http://api.nbp.pl/api/exchangerates/tables/A/?format=json")
  .then(function (res) {
    return res.json();
  })
  .then(function (r) {
    const rates = r[0].rates;
    // console.log(rates);
    for (rate of rates) {
      appendRow("exchange_rate", [rate.currency, rate.mid + ` zł`]);
    }
  });

function getPreviousDay(date = new Date()) {
  const previous = new Date(date.getTime());
  previous.setDate(date.getDate() - 1);

  return previous;
}

function getRatesForSpecificDate(date, numberOfRetry = 0) {
  return fetch(
    `https://api.nbp.pl/api/exchangerates/tables/A/${date}?format=json`
  )
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      return data[0].rates;
    })
    .catch(function (error) {
      const dateFormat = new Date(date);
      const previousDay = getPreviousDay(dateFormat);
      if (numberOfRetry > 4) {
        throw "DDOS under way... stop it :P";
      }
      return getRatesForSpecificDate(
        previousDay.toJSON().slice(0, 10),
        numberOfRetry + 1
      );
    });
}

const date = "2021-11-01";
getRatesForSpecificDate(date).then((rates) => {
  // console.log(rates);
  for (let i = 0; i < rates.length; i++) {
    appendRow("exchange_rate", [rates[i].currency, rates[i].mid]);
  }
});

document
  .querySelector("#exchange-rate-date")
  .addEventListener("change", function (e) {
    cleanTable("exchange_rate");
    getRatesForSpecificDate(e.target.value).then((rates) => {
      for (let i = 0; i < rates.length; i++) {
        appendRow("exchange_rate", [rates[i].currency, rates[i].mid + ` zł`]);
      }
    });
  });
