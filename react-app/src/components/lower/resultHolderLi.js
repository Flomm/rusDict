export const ResultHolderLi = (props) => {
  const genderData = props.data.gender ? <span>Nem: {props.data.gender}</span> : <span> </span>;
  return (
    <li
      data={props.data}
      onClick={() => {
        props.handleClick(props.data.RU);
      }}
    >
      <p>
        <span className="ru">
          <span></span> <strong>{props.data.RU}</strong>
        </span>
        <span className="hu">
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
