import React, { useEffect, useState } from 'react';
import { Upper } from './upper/upperMain';
import { DetailsArticle } from './details';
import { ResultsArticle } from './results/results';
import { parseHTML } from '../supportFuncsAndObjects/parser';

export const Wrapper = () => {
  const [callResult, setCallResult] = useState([]);
  const [queryWord, setQueryWord] = useState('');
  const [table, setTable] = useState('');
  const [shadiness, setShadiness] = useState('');
  const setRemoteCall = (data) => {
    setCallResult(data);
  };
  useEffect(() => {
    setRemoteCall(callResult);
  }, []);

  async function handleSubmit(ev, newQueryWord, limit) {
    try {
      ev.preventDefault();
      setQueryWord(newQueryWord);
      const response = await fetch(`http://127.0.0.1:5000/api/dict/${newQueryWord}/${limit}`);
      const parsed = await response.json();
      if (!response.ok) {
        throw new Error(parsed.error);
      }
      setRemoteCall(parsed.result);
    } catch (err) {
      console.log(err);
      if (err instanceof TypeError) {
        setRemoteCall([{ message: 'Hopsz. Szerver hiba történt. Kérlek próbáld újra később.' }]);
      } else {
        setRemoteCall([{ message: err.message }]);
      }
    }
  }

  async function handleResClick(word) {
    try {
      const response = await fetch(`https://en.wiktionary.org/api/rest_v1/page/html/${word}`);
      const parsed = await response.text();
      if (!response.ok) {
        throw new Error('Hopsz, úgy tűnik ez a szó nem található, vagy probléma van a Wikipédia szerverrel.');
      }
      const newTable = parseHTML(parsed);
      setTable(newTable);
    } catch (err) {
      setTable({ message: err.message });
    } finally {
      setShadiness('shady');
    }
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
        <div className="main lower">
          <div className="lower holder">
            <ResultsArticle
              handleFetch={handleSubmit}
              queryWord={queryWord}
              callResult={callResult}
              handleClick={handleResClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
