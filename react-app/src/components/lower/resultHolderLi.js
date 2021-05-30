export const ResultHolderLi = (props) => {
  return (
    <li key={props.key} data={props.data} onClick={props.handleClick}>
      <p>
        <span>
          <strong>{props.data.RU}</strong>
        </span>
        <span>{props.data.HU}</span>
      </p>
      {props.data.gender && (
        <p>
          <span>Nem: {props.data.gender}</span>
        </p>
      )}
      <p>
        <span>Szófaj: {props.data.pos}</span>
      </p>
    </li>
  );
};
