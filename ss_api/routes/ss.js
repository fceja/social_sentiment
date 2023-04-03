
require('dotenv').config();

const AxiosClient = require('../framework/axios_client.js')
const express = require('express');

const router = express.Router();
const ssApiToken = process.env.SS_API_TOKEN;
const baseUrl = process.env.BASE_URL;

const client = new AxiosClient({
    baseURL: baseUrl,
    timeout: 5000,
    headers: { "Authorization": ssApiToken}
});

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