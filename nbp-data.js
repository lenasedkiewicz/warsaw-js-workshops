fetch('http://api.nbp.pl/api/exchangerates/tables/A/?format=json').then(function(res){
    return res.json()
}).then(function(r){
    const rates = r[0].rates;
    // console.log(rates);
    for (rate of rates) {
        appendRow("exchange_rate", [rate.currency, rate.mid + ` zł`])
    }
})