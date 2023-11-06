
import { response } from 'express';
import React from 'react';
const axios = require('axios');

export default class SocialSentiment extends React.Component {
    constructor(props){
        super(props)
        this.state = {api_response : ''}
    }

    componentDidMount(){
        axios.get('http://localHost:9000/ss/social')
        .then(res => {
            this.setState({api_response: res.data})
            console.log('here ' + this.state.api_response)
        })
        // this.setState({api_response: 'api-response-data'})
    }

    render() {
        // console.log('tests')
        // const { data } = this.props;
        // const { datas } = this.state.api_response;
        return(
            // <span>Here: {this.state.api_response}</span>
            // {datas.map((value, key) =>
            // {datas.map(data =><span>{data.data}</span>)}
            <span>Test</span>
            // datas.map(data =><span>{data.data}</span>)
        )
    }
}
