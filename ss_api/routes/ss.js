
var express = require('express');
var router = express.Router();

const apiInfo = require('../config/default.json')

const AxiosClient = require('../framework/axios_client.js')
const client = new AxiosClient({
    baseURL: apiInfo.api.ss.baseUrl,
    timeout: apiInfo.api.ss.timeout,
    headers: apiInfo.api.ss.headers
});

/* GET users listing. */
router.use((req, res, next) => {
    next()
})

router.get('/*/test', (req, res) => {
    res.send('this works')
})

router.get('/*', (req, res) => {
    const symbol = req.params[0];

    client.request({
        method: 'get',
        url:`/stocks/${symbol.toUpperCase()}/sentiment/daily`,
    })
    .then(response => {
        res.send(response.data)
    })
    .catch(error=>{
        console.log(`Error: ${error}`);
    });
});

module.exports = router;