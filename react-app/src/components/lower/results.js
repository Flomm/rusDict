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
        <h4>Találatok</h4>
        {resultDiv}
      </article>
    );
  }
}
