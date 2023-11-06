import React from "react";

export default class ListResults extends React.Component {

  render() {
    if (this.props.isLoading) {
      return <div>Loading Results...</div>
    }

    return (
      <div className="results-container">
        <h2>{this.props.title.toUpperCase()}</h2>
        <ul>
          {Object.values(this.props.response).map((item, index) => (
            <li key={index} id={index}>
              {`
                  date: ${item.date};
                  positive-score: ${item.positive_score};
                  negative-score: ${item.negative_score};
                  activity: ${item.activity}
                `}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
