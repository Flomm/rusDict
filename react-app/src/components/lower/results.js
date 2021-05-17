import React from 'react';
import { useGlobState } from '../context';

export const ResultsArticle = (props) => {
  const [state, dispatch] = useGlobState();
  function renderResults(words) {
    return words.map((word, i) => {
      return (
        <li key={`key${i}`} onClick={props.handleClick}>
          {word}
        </li>
      );
    });
  }

  function renderList() {
    let resultList = <ul></ul>;
    if (props.word[0] !== '') {
      // const results = renderResults(props.word);
      resultList = <ul>{renderResults(props.word)}</ul>;
    }
    return resultList;
  }

  function handleSelect(val) {
    dispatch({ lim: val });
  }

  return (
    <article>
      <div className="results-div">
        <h3>Találatok</h3>
        <div className="label-div">
          <label>Limit:</label>
          <select
            onChange={(e) => {
              handleSelect(parseInt(e.target.value));
            }}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
      {renderList()}
    </article>
  );
};
