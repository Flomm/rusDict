import React from 'react';
import './App.css';
import { Upper } from './components/upper/upperMain';
import { Lower } from './components/lower/lowerMain';
import { useState } from 'react';

export const App = () => {
  const [queryWord, setQueryWord] = useState('');
  const [selectedWord, setSelectedWord] = useState('');
  function handleSubmit(ev) {
    ev.preventDefault();
    const inputField = ev.target.elements[0];
    const newWord = inputField.value;
    setQueryWord(newWord);
  }

  return (
    <div className="wrapper">
      <header>Orosz-magyar, magyar-orosz szótár</header>
      <Upper onsubmit={handleSubmit} />
      <Lower qWord={[queryWord]} sWord={selectedWord} />
      <footer>Some random text</footer>
    </div>
  );
};
