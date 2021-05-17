import React from 'react';
import { GlobState } from './components/context';
// import { GlobState, globalStateContext } from './components/context';
// import { Upper } from './components/upper/upperMain';
// import { Lower } from './components/lower/lowerMain';
// import { DetailsArticle } from './components/lower/details';
// import { useState, useContext } from 'react';
// import { parseHTML } from './supportFuncsAndObjects/parser';
import { Wrapper } from './components/wrapper';

export const App = () => {
  // const [queryWord, setQueryWord] = useState('');
  // const [table, setTable] = useState('');
  // const [shadiness, setShadiness] = useState('');
  // const queryDetails = useContext(globalStateContext);

  // function handleSubmit(ev) {
  //   ev.preventDefault();
  //   const newWord = ev.target.elements[0].value;
  //   const queryObject = { word: newWord, ...queryDetails };
  //   console.log(queryObject);
  //   setQueryWord(newWord);
  // }

  // function handleResClick(ev) {
  //   const selectedWord = ev.target.innerText;
  //   fetch(`https://en.wiktionary.org/api/rest_v1/page/html/${selectedWord}`)
  //     .then((response) => {
  //       if (response.status < 200 || response.status > 300) {
  //         throw new Error('Hopsz, úgy tűnik ez a szó nem található, vagy probléma van a Wikipédia szerverrel.');
  //       } else {
  //         return response.text();
  //       }
  //     })
  //     .then((data) => {
  //       const newTable = parseHTML(data);
  //       setTable(newTable);
  //       setShadiness('shady');
  //     })
  //     .catch((err) => setTable(err.message));
  // }

  // function renderTable() {
  //   if (table) {
  //     return (
  //       <div className="details">
  //         <button onClick={escTable}>X</button>
  //         <DetailsArticle data={table} />
  //       </div>
  //     );
  //   }
  // }

  // function escTable() {
  //   setTable('');
  //   setShadiness('');
  // }

  return (
    <GlobState>
      <Wrapper></Wrapper>
    </GlobState>
    // <GlobState>
    //   <div className="bg">
    //     {renderTable()}
    //     <div className={`wrapper ${shadiness}`}>
    //       <header>Orosz-magyar, magyar-orosz szótár</header>
    //       <Upper onsubmit={handleSubmit} />
    //       <Lower qWord={[queryWord]} data={table} handleClick={handleResClick} />
    //       <footer>Some random text</footer>
    //     </div>
    //   </div>
    // </GlobState>
  );
};
