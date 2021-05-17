import React from 'react';
import Keyboard from './Keyboard';

export default class WordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      pair: this.props.pair,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.inputRef = React.createRef();
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

  componentDidUpdate() {
    this._input.focus();
  }
  render() {
    return (
      <div className="input-holder">
        <form
          onSubmit={(ev) => {
            this.props.onsubmit(ev);
            this.setState({ value: '' });
          }}
        >
          <input
            ref={(c) => (this._input = c)}
            value={this.state.value}
            onChange={this.handleChange}
            type="text"
            placeholder="Adj meg egy szót"
            required
          ></input>
          <button>Keresés</button>
        </form>
        <Keyboard onType={this.handleType} onDelete={this.handleDelete} />
      </div>
    );
  }
}
