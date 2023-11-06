import React from "react";
import axios from "axios";

import ListResults from "./ListResults.js";

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchQuery: "",
      response: null,
      title: null,
      isLoading: null,
    };
  }

  handleInputChanged(event) {
    this.setState({
      searchQuery: event.target.value,
    });
  }

  handleButtonClick = (event) => {
    this.setState({
      searchQuery: event.target.value,
      response: null,
      isLoading: true,
    });

    const searchQ = this.state.searchQuery;
    axios
      .get(`http://localhost:7592/ss/${searchQ}`)
      .then((resp) => {
        this.setState({
          response: resp.data,
          title: searchQ,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  };

  render() {
    return (
      <div className="main-container">
        <div className="search-container">
          <input
            type="text"
            id="search-input"
            className="search-input"
            placeholder="Symbol"
            value={this.state.searchQuery}
            onChange={this.handleInputChanged.bind(this)}
          />
          <button onClick={this.handleButtonClick.bind(this)}>Search</button>
        </div>
        {this.state.isLoading && <div>Loading...</div>}
        {this.state.response && (
          <ListResults
            title={this.state.title}
            response={this.state.response}
          />
        )}
      </div>
    );
  }
}
