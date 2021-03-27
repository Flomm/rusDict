import React from "react";
import { abc } from "../../../resources/abc";
import Key from "./Key";

export default class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      case: "lower",
    };
    this.handleCase = this.handleCase.bind(this);
  }

  handleCase() {
    if (this.state.case === "upper") {
      this.setState({
        case: "lower",
      });
    } else {
      this.setState({
        case: "upper",
      });
    }
  }

  renderKeys(abc) {
    let keysArray = [];
    for (let i = 0; i < abc.length - 3; i++) {
      let value = "";
      if (
        this.state.case === "lower"
          ? (value = abc[i])
          : (value = abc[i].toUpperCase())
      )
        keysArray.push(
          <Key
            value={value}
            key={`${i}key`}
            writeIn={value}
            className="key"
            case={this.state.case}
            onclick={this.props.onType}
          />
        );
    }
    return keysArray;
  }

  renderSpecialKeys(abc) {
    let keysArray = [];
    for (let i = abc.length - 3; i < abc.length; i++) {
      let onClick = this.props.onType;
      let val = abc[i];
      if (i === abc.length - 3) {
        onClick = this.handleCase;
      } else if (i === abc.length - 2) {
        onClick = this.props.onDelete;
      } else if (i === abc.length - 1) {
        val = " ";
      }
      keysArray.push(
        <Key
          value={abc[i]}
          writeIn={val}
          key={`${i}key`}
          className={`key ${abc[i]}`}
          onclick={onClick}
        />
      );
    }
    return keysArray;
  }

  render() {
    const keyboardRu = this.renderKeys(abc);
    const specialKeys = this.renderSpecialKeys(abc);
    return (
      <div className="keyboard">
        {keyboardRu}
        {specialKeys}
      </div>
    );
  }
}
