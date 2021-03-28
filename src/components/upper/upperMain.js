import { useState } from 'react';
import WordForm from './LeftSide/WordForm';
import { InfoPart } from './RightSide';
import { Switch } from './middle';

export const Upper = (props) => {
  const [pair, setPair] = useState('orosz-magyar');

  function handleChange() {
    let newPair = '';
    pair === 'orosz-magyar' ? (newPair = 'magyar-orosz') : (newPair = 'orosz-magyar');
    setPair(newPair);
  }

  return (
    <div className="upper main">
      <div className="upper holder">
        <div className="upper-left">
          <WordForm pair={pair} onsubmit={props.onsubmit} />
        </div>
        <div>
          <Switch pair={pair} handleChange={handleChange} />
        </div>
        <div className="upper-right">
          <InfoPart />
        </div>
      </div>
    </div>
  );
};
