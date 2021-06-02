export const Switch = (props) => {
  return (
    <div className="toggle-holder">
      <label>Válassz billentyűzetet</label>
      <label className="switch">
        <input type="checkbox" onChange={props.handleChange}></input>
        <span className="slider round"></span>
      </label>
    </div>
  );
};
