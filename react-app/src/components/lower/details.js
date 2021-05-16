import React from 'react';
import parse from 'html-react-parser';

export class DetailsArticle extends React.Component {
  renderDiv() {
    let content;
    if (this.props.data[0] === '<') {
      content = parse(this.props.data);
    } else if (this.props.data.slice(0, 3) === 'Hop') {
      content = this.props.data;
    }
    return (
      <div className="table-div">
        <h4>Nyelvtani részletek</h4>
        {content}
      </div>
    );
  }

  render() {
    const dataDiv = this.renderDiv();
    return dataDiv;
  }
}
