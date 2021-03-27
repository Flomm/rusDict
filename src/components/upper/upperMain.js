import WordForm from './LeftSide/WordForm';
import { InfoPart } from './RightSide';

export const Upper = () => {
  return (
    <div className="upper main">
      <div className="upper-holder">
        <div className="upper-left">
          <WordForm />
        </div>
        <div className="upper-right">
          <InfoPart />
        </div>
      </div>
    </div>
  );
};
