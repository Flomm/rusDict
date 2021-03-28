import { DetailsArticle } from './details';
import ResultsArticle from './results';

export const Lower = (props) => {
  return (
    <div className="lower main">
      <div className="lower holder">
        <div className="lower-parts">
          <ResultsArticle word={props.qWord} />
        </div>
        <div className="lower-parts">
          <DetailsArticle />
        </div>
      </div>
    </div>
  );
};
