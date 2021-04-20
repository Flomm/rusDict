import React from 'react';
import { Upper } from './components/upper/upperMain';
import { Lower } from './components/lower/lowerMain';
import { DetailsArticle } from './components/lower/details';
import { useState } from 'react';
import { parseHTML } from './resources/parser';

export const App = () => {
  const [queryWord, setQueryWord] = useState('');
  const [table, setTable] = useState('');
  const [shadiness, setShadiness] = useState('');

  function handleSubmit(ev) {
    ev.preventDefault();
    const inputField = ev.target.elements[0];
    const newWord = inputField.value;
    setQueryWord(newWord);
  }

  function handleClick(ev) {
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
        <div className="lower holder details">
          <div className="table-main">
            <button onClick={escTable}>X</button>
            <DetailsArticle data={table} />
          </div>
        </div>
      );
    }
  }

  function escTable() {
    setTable('');
    setShadiness('');
  }

  return (
    <div>
      {renderTable()}
      <div className={`wrapper ${shadiness}`}>
        <header>Orosz-magyar, magyar-orosz szótár</header>
        <Upper onsubmit={handleSubmit} />
        <Lower qWord={[queryWord]} data={table} handleClick={handleClick} />
        <footer>Some random text</footer>
      </div>
    </div>
  );
};
