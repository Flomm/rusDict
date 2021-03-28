import React from 'react';

export default class ResultsArticle extends React.Component {
  handleClick(ev) {
    const selectedWord = ev.target.innerText;
    fetch(
      `https://en.wikipedia.org/w/api.php?action=query&prop=revisions&titles=${selectedWord}&rvslots=%2A&rvprop=content&formatversion=2&format=json`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  renderResults(words) {
    return words.map((word, i) => {
      return (
        <p key={`key${i}`} onClick={this.handleClick}>
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
