# Workshop JavaScript intermediate
Bellow you will find list of many task which we are going to handle in our application. Because workshop is quite short we won't be able to implement all of them, but of course if you finish your task before others don't be afraid to take next one.

## Project setup
download repo and run `npm install`
when you are ready run website using `npm start`

## Api documentation
During the workshop we are going to use `http://api.nbp.pl/`.
Because we are going to send there many similar requests we want to prevent sending the same request over and over and be blocked by NBP. For security reasons we will use our proxy.
Instead of using `https://api.nbp.pl/api/` url for request please send them to `http:localhost:3000/api`/.
For example `https://api.nbp.pl/api/exchangerates/tables/A/?format=json` -> `http:localhost:3000`

# Tasks
## Exchange rate
1. page currently doesn't load any data, use NBP api and display current price of all currencies which NBP has
2. Create function fetching currencies rate for specific day about, unfortunately nbp api doesn't have data for every date, in this situation instead of throw error try to fetch data from previous day. 
2. Conect created function from second point to filter visible on site

## Application functionalities
1. During our development we need to refresh our site many times, unfortunately we always come back to first page. Try to keep information which website was visited recently, all changes should be done inside navigation.js.
2. Currently when we load website we don't have yet data from npb api. Find inside the code #loader div and remove class hide. Later add logic to show the website when data from NBP will be already loaded.
3. Add extend fetching currencies functionality with memorization mechanism to avoid fetching the same data over and over

## Investor calculator
1. For provided input return historic comparison of investment value in different currency in specific months. To be able make calculation fetch all necessary historic data reusing function from third point.
2. If user chose `Show path to become rich` checkbox instead of showing him historic data try to prepare for him information what kind of investment could bring him the best return. Suppose that after every month he exchange his bought currency to different one and later with "luck" buy currencies which grows the fastest.

## Array Sorter
1. Array sorter is task not connected strictly with our application, but good example of explainig how workers work,
try connect to our api and fetch big array. Size can be defined on your own. http://localhost:3000/api/array?size=100000 query param `size` define size of array. Try to sort them on frontend side first without worker and how website will behave, later use worker for it.

## Tracking savings
1. Implement `My savings` functionality, after fill the form add record to our table and update final score. Try to split it for two functions. One responsible to return object needed to rendering and second responsible for just rendering table.
2. Update select with possible currencies based on currencies available inside NBP api.
3. Try to save provided data by user to local storage
4. Add functionality to recreate wallet saving list with data stored in local storage


## Offline support
1. Try to use service worker to cache fetched files.
2. Add service worker functionality to automatically update itself
3. Implement cache first with network fallback strategy for service worker.
4. Try to store currencies data inside indexDB instead cache mechanism.


