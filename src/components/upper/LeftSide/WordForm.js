import React from "react";
import Keyboard from "./Keyboard";

export default class WordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleType(val) {
    this.setState({ value: `${this.state.value}${val}` });
  }

  handleDelete() {
    const newVal = this.state.value.slice(0, -1);
    this.setState({ value: newVal });
  }

  render() {
    return (
      <div className="input-holder">
        <form>
          <input
            value={this.state.value}
            onChange={this.handleChange}
            type="text"
            placeholder="Adj meg egy szót"
          ></input>
          <button>Keresés</button>
        </form>
        <Keyboard onType={this.handleType} onDelete={this.handleDelete} />
      </div>
    );
  }
}
