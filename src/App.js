import React from 'react';
import './App.css';
import { Upper } from './components/upper/upperMain';

export const App = () => {
  return (
    <div className="wrapper">
      <header>Orosz-magyar, magyar-orosz szótár</header>
      <Upper />
      <div className="lower main">d</div>
      <footer>Some random text</footer>
    </div>
  );
};
