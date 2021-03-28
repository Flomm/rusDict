import React from 'react';
import './App.css';
import { Upper } from './components/upper/upperMain';
import { Lower } from './components/lower/lowerMain';
import { useState } from 'react';
import { parseHTML } from './resources/parser';

export const App = () => {
  const [queryWord, setQueryWord] = useState('');
  const [table, setTable] = useState('');
  function handleSubmit(ev) {
    ev.preventDefault();
    const inputField = ev.target.elements[0];
    const newWord = inputField.value;
    setQueryWord(newWord);
  }

  function handleClick(ev) {
    const selectedWord = ev.target.innerText;
    fetch(`https://en.wiktionary.org/api/rest_v1/page/html/${selectedWord}`)
      .then((response) => response.text())
      .then((data) => {
        const table = parseHTML(data);
        setTable(table);
      })
      .catch(() => console.log('Nem sikerült csatlakozni a szerverhez. Próbáld újra később.'));
  }

  return (
    <div className="wrapper">
      <header>Orosz-magyar, magyar-orosz szótár</header>
      <Upper onsubmit={handleSubmit} />
      <Lower qWord={[queryWord]} data={table} handleClick={handleClick} />
      <footer>Some random text</footer>
    </div>
  );
};
