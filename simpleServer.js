const express = require('express');
const fetch = require('node-fetch');
const app = express();
const fs = require('fs');
const path = require('path');

const normalizePath = (path) => {
    return path.replaceAll('/', '_');
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get('/api/array', async (req, res)=> {
    const size = parseInt(req.query.size || 1000);
    const generatedArray = Array.from({length: size}).map(()=>getRandomInt(-1000000, -1000000));
    res.status(200);
    res.set('Content-Type', "application/json; charset=utf-8");
    res.send({ data: generatedArray });
})
app.get('/api/*', async (req, res)=>{
    const potentialResponseFile = path.join(__dirname, 'cachedApiFiles', normalizePath(req.url));
    let responseObject;
    if (fs.existsSync(potentialResponseFile)) {
        const fileContent = fs.readFileSync(potentialResponseFile, 'utf8');
        const { status, data, contentType } = JSON.parse(fileContent);
        responseObject = { status, data, contentType };    
    } else {
        await fetch(`https://api.nbp.pl/${req.url}`).then(async response=>{
            const dataToStore = {status: response.status, data: await response.text(), contentType: response.headers.get('content-type')};
            fs.writeFileSync(potentialResponseFile, JSON.stringify(dataToStore));
            responseObject = dataToStore;  
        })
    }
    res.status(responseObject.status);
    res.set('Content-Type', responseObject.contentType);
    res.send(responseObject.data);
});
app.use(express.static('./'))

app.listen(3000, () => {
    console.log('listening on http://localhost:3000/')
})
