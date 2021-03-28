import React from 'react';

export default class ResultsArticle extends React.Component {
  renderResults(words) {
    return words.map((word, i) => {
      return (
        <p key={`key${i}`} onClick={this.props.handleClick}>
          {word}
        </p>
      );
    });
  }

  render() {
    let resultDiv = <div></div>;
    if (this.props.word[0] !== '') {
      const results = this.renderResults(this.props.word);
      resultDiv = <div>{results}</div>;
    }
    return (
      <article>
        <h4>Találatok</h4>
        {resultDiv}
      </article>
    );
  }
}
