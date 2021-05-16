import React from 'react';

export default class ResultsArticle extends React.Component {
  renderResults(words) {
    return words.map((word, i) => {
      return (
        <li key={`key${i}`} onClick={this.props.handleClick}>
          {word}
        </li>
      );
    });
  }

  render() {
    let resultDiv = <ul></ul>;
    if (this.props.word[0] !== '') {
      const results = this.renderResults(this.props.word);
      resultDiv = <ul>{results}</ul>;
    }
    return (
      <article>
        <div className="results-div">
          <h3>Találatok</h3>
          <div className="label-div">
            <label>Limit:</label>
            <select>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>
        </div>
        {resultDiv}
      </article>
    );
  }
}
