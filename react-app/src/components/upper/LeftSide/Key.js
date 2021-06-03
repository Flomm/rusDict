import React from 'react';

export default class Key extends React.Component {
  render() {
    return (
      <button
        className={this.props.className}
        onClick={() => {
          this.props.onclick(this.props.writeIn);
        }}
      >
        {this.props.value}
      </button>
    );
  }
}
