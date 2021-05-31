import { ResultsArticle } from './results';

export const Lower = (props) => {
  return (
    <div className="main lower">
      <div className="lower holder">
        <ResultsArticle callResult={props.callResult} handleClick={props.handleClick} />
      </div>
    </div>
  );
};
