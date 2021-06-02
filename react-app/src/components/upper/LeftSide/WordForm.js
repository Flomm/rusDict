import React from 'react';
import Keyboard from './Keyboard';
import { globalStateContext } from '../../context';

export default class WordForm extends React.Component {
  static contextType = globalStateContext;

  constructor(props) {
    super(props);
    this.state = {
      value: '',
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
            this.props.onsubmit(ev, this.state.value, this.context.lim);
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
        <Keyboard keyType={this.props.keyType} onType={this.handleType} onDelete={this.handleDelete} />
      </div>
    );
  }
}
