import React from 'react';
import { globalStateContext } from './context';
import { Upper } from './upper/upperMain';
import { Lower } from './lower/lowerMain';
import { DetailsArticle } from './lower/details';
import { useState, useContext } from 'react';
import { parseHTML } from '../supportFuncsAndObjects/parser';

export const Wrapper = () => {
  const [callResult, setCallResult] = useState([]);
  const [table, setTable] = useState('');
  const [shadiness, setShadiness] = useState('');
  const queryDetails = useContext(globalStateContext);

  async function handleSubmit(ev) {
    try {
      ev.preventDefault();
      const newWord = ev.target.elements[0].value;
      const queryObject = { word: newWord, ...queryDetails };
      const response = await fetch(
        `http://127.0.0.1:5000/api/${queryObject.lang.slice(0, 2)}/${queryObject.word}/${queryObject.lim}`
      );
      const parsed = await response.json();
      if (!response.ok) {
        throw new Error(parsed.error);
      } else {
        setCallResult(parsed.result);
      }
    } catch (err) {
      console.log(err);
      setCallResult([{ message: err.message }]);
    }
  }

  function handleResClick(ev) {
    const selectedWord = ev.target.innerText;
    fetch(`https://en.wiktionary.org/api/rest_v1/page/html/${selectedWord}`)
      .then((response) => {
        if (response.status < 200 || response.status > 300) {
          throw new Error('Hopsz, úgy tűnik ez a szó nem található, vagy probléma van a Wikipédia szerverrel.');
        } else {
          return response.text();
        }
      })
      .then((data) => {
        const newTable = parseHTML(data);
        setTable(newTable);
        setShadiness('shady');
      })
      .catch((err) => setTable(err.message));
  }

  function renderTable() {
    if (table) {
      return (
        <div className="details">
          <button onClick={escTable}>X</button>
          <DetailsArticle data={table} />
        </div>
      );
    }
  }

  function escTable() {
    setTable('');
    setShadiness('');
  }

  return (
    <div className="bg">
      {renderTable()}
      <div className={`wrapper ${shadiness}`}>
        <header>Orosz-magyar, magyar-orosz szótár</header>
        <Upper onsubmit={handleSubmit} />
        <Lower callResult={callResult} data={table} handleClick={handleResClick} />
        <footer>Some random text</footer>
      </div>
    </div>
  );
};
