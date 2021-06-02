import React, { useState } from 'react';
import { useGlobState } from '../context';
import { ResultListItem } from './resultListItem';

export const ResultsArticle = (props) => {
  const [state, dispatch] = useGlobState();
  function renderResults(results) {
    return results.map((result, i) => {
      if (result.message) {
        return (
          <div key={`key${i}`} className="errorous">
            {result.message}
          </div>
        );
      }
      return (
        <ResultListItem
          key={`key${i}`}
          lang={state.lang.slice(0, 2)}
          handleClick={props.handleClick}
          data={result}
        ></ResultListItem>
      );
    });
  }

  function renderList() {
    if (props.callResult.length) {
      return <ul>{renderResults(props.callResult)}</ul>;
    }
  }

  function handleSelect(e) {
    const newLimit = e.target.value;
    dispatch({ lim: newLimit });
    if (props.queryWord) {
      props.handleFetch(e, props.queryWord, newLimit);
    }
  }

  if (state.error) {
    dispatch({ lim: '5' });
  }

  return (
    <article>
      <div className="results-div">
        <h3>Találatok</h3>
        <div className="label-div">
          <label>Limit:</label>
          <select
            onChange={(e) => {
              handleSelect(e);
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
