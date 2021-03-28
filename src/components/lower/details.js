import React from 'react';
import parse from 'html-react-parser';

export class DetailsArticle extends React.Component {
  renderDiv() {
    let dataDiv = <div></div>;
    if (this.props.data[0] === '<') {
      const withOutStyle = parse(this.props.data);
      dataDiv = <div className="table-div">{withOutStyle}</div>;
    }
    return dataDiv;
  }

  render() {
    const dataDiv = this.renderDiv();
    return (
      <article>
        <h4>Nyelvtani részletek</h4>
        {dataDiv}
      </article>
    );
  }
}
