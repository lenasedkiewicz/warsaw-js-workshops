# Workshop JavaScript intermediate
Bellow you will find list of many task which we are going to handle in our application. Because workshop is quite short we won't be able to implement all of them, but of course if you finish your task before others don't be afraid to take next task.

During the workshop we are going to use `http://api.nbp.pl/`

## Task separated by topics
### Promises
1. Subpage `Current exchange rate` currently doesn't load any data, use NBP api and display current price of all currencies which NBP has
2. Create function fetching data about currencies rate unfortunately api from nbp doesn't have data for every date, in this situation instead of throw error try to fetch data from previous day.
3. Subpage `Investor calculator` should for provided inputs return correct values of invested amount depending on currency. Decide which one was the most worthy to display. Here you will need to get data from api by sending many request. Pay attention for performance of solution.

### Saving data in memory
1. During our development we need to refresh our site many times, unfortunately we always come back to first page. Try to save using [Session storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) last previewed subpage and later during first load the app load it again. All your changes should be done inside email
2. `My savings` extend my savings functionality for offline support, try use casual memory storage, if you think it's to easy try go with IndexDB.
3. Some request getting historical data won't change, try to use memorization to avoid sending not needed requests.

### Others
1. Extend first loading of site
2. On `My savings` subpage, fill list of currencies with all currencies available on NBP api page.
3.  Implement `My savings` functionality, after fill the form add record to our table and update final score. Try to split it for two functions. One responsible to return object needed to render and  second responsible for just rendering table.
