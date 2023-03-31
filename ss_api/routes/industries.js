var express = require('express');
var router = express.Router();

const apiInfo = require('../config/default.json')

const AxiosClient = require('../framework/axios_client.js')
const client = new AxiosClient({
    baseURL: apiInfo.api.ss.baseUrl,
    timeout: apiInfo.api.ss.timeout,
    headers: apiInfo.api.ss.headers
});

router.get('/', function(req, res, next) {
    client.request({
        method: 'get',
        url:`/industries`,
    })
    .then(response => {
        let resultIndustries = {}

        for (let value of Object.values(response.data.results)){
            if (value.name != 'n/a') {
                resultIndustries[value.id] = value.name
            }
        }

        res.send(resultIndustries)
    })
    .catch(error=>{
        console.log(`Error: ${error}`);
    });
});

router.get('/*/sentiment/daily', function(req, res, next) {
    const id = req.params[0];

    client.request({
        method: 'get',
        url:`/industries/${id}/sentiment/daily`,
    })
    .then(response => {
        res.send(response.data)
    })
    .catch(error=>{
        console.log(`Error: ${error}`);
    });
});

module.exports = router;