import { useState } from 'react';
import WordForm from './LeftSide/WordForm';
// import { InfoPart } from './RightSide';
import { useGlobState } from '../context';
import { Switch } from './middle';

export const Upper = (props) => {
  const [pair, setPair] = useState('RUS-HU');
  const [state, dispatch] = useGlobState();

  function handleChange() {
    let newPair = '';
    pair === 'RUS-HU' ? (newPair = 'HU-RUS') : (newPair = 'RUS-HU');
    setPair(newPair);
    dispatch({ lang: newPair });
  }

  return (
    <div className="main upper">
      <div className="upper holder">
        <div className="upper-left">
          <WordForm pair={pair} onsubmit={props.onsubmit} />
        </div>
        <div>
          <Switch pair={pair} handleChange={handleChange} />
        </div>
        {/* <div className="upper-right">
          <InfoPart />
        </div> */}
      </div>
    </div>
  );
};
