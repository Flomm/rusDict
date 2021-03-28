export const Switch = (props) => {
  return (
    <div className="toggle-holder">
      <label>Válassz nyelvpárt</label>
      <label className="switch">
        <input type="checkbox" onChange={props.handleChange}></input>
        <span className="slider round"></span>
      </label>
      <label>{props.pair}</label>
    </div>
  );
};
