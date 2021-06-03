import { globalStateContext } from '../context';

export const ResultListItem = (props) => {
  const globalState = globalStateContext;
  const genderData = props.data.gender ? <span>Nem: {props.data.gender}</span> : <span> </span>;

  return (
    <li
      data={props.data}
      onClick={() => {
        if (!globalState.isMobile) {
          props.handleClick(props.data.RU);
        }
      }}
    >
      <p>
        <span className="up">
          <span></span> <strong>{props.data.RU}</strong>
        </span>
        <span className="down">
          <span></span> <strong>{props.data.HU}</strong>
        </span>
      </p>
      <p>
        <span>Szófaj: {props.data.pos}</span>
        {genderData}
      </p>
    </li>
  );
};
