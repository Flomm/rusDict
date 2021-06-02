import { useState } from 'react';
import WordForm from './LeftSide/WordForm';
import { Switch } from './switch';

export const Upper = (props) => {
  const [keyType, setKeyType] = useState('RU');

  function handleChange() {
    const newKeyType = keyType === 'RU' ? 'HU' : 'RU';
    setKeyType(newKeyType);
  }

  return (
    <div className="main upper">
      <div className="upper holder">
        <div className="upper-left">
          <WordForm keyType={keyType} onsubmit={props.onsubmit} />
        </div>
        <div>
          <Switch handleChange={handleChange} />
        </div>
      </div>
    </div>
  );
};
