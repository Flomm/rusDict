import { useState } from 'react';
import WordForm from './LeftSide/WordForm';
import { useGlobState } from '../context';
import { Switch } from './switch';

export const Upper = (props) => {
  const [pair, setPair] = useState('RUS-HU');
  const [state, dispatch] = useGlobState();

  function handleChange() {
    let newPair = '';
    pair === 'RUS-HU' ? (newPair = 'HU-RUS') : (newPair = 'RUS-HU');
    setPair(newPair);
    dispatch({ lang: newPair });
  }

  if (state.error) {
    dispatch({ lang: 'error' });
  }

  return (
    <div className="main upper">
      <div className="upper holder">
        <div className="upper-left">
          <WordForm onsubmit={props.onsubmit} />
        </div>
        <div>
          <Switch pair={pair} handleChange={handleChange} />
        </div>
      </div>
    </div>
  );
};
