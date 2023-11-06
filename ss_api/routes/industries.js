require('dotenv').config();

const AxiosClient = require('../framework/axios_client.js')
const express = require('express');

const router = express.Router();

const ssApiToken = process.env.SS_API_TOKEN;
const baseUrl = process.env.BASE_URL;

const client = new AxiosClient({
    baseURL: baseUrl,
    timeout: 5000,
    headers: { "Authorization": ssApiToken }
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