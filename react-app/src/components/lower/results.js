import React from 'react';
import { useGlobState } from '../context';

export const ResultsArticle = (props) => {
  const [state, dispatch] = useGlobState();
  function renderResults(results) {
    return results.map((result, i) => {
      if (result.message) {
        return <div key={`key${i}`}>{result.message}</div>;
      }
      return (
        <li key={`key${i}`} onClick={props.handleClick}>
          {result.RU}
        </li>
      );
    });
  }

  function renderList() {
    if (props.callResult.length) {
      let resultList = <ul></ul>;
      resultList = <ul>{renderResults(props.callResult)}</ul>;
      return resultList;
    }
  }

  function handleSelect(val) {
    dispatch({ lim: val });
  }

  if (state.error) {
    dispatch({ lim: 0 });
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
