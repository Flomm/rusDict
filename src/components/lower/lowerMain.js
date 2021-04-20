import ResultsArticle from './results';

export const Lower = (props) => {
  return (
    <div className="lower main">
      <div className="lower holder">
        <div className="lower-parts">
          <ResultsArticle word={props.qWord} handleClick={props.handleClick} />
        </div>
      </div>
    </div>
  );
};
