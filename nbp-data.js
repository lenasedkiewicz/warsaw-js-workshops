fetch('http://api.nbp.pl/api/exchangerates/tables/A/?format=json').then(function(res){
    return res.json()
}).then(function(r){
    console.log(r)
})