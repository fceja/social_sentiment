
const axios = require('axios');

class AxiosClient {
    constructor(data){
        let axios_client = axios.create({
            baseURL: data.baseURL,
            timeout: data.timeout,
            headers: data.headers
        });
        return axios_client
    }
}

module.exports = AxiosClient