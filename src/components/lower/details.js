import React from 'react';
import parse from 'html-react-parser';

export class DetailsArticle extends React.Component {
  renderDiv() {
    let dataDiv = <div></div>;
    if (this.props.data[0] === '<') {
      const withOutStyle = parse(this.props.data);
      dataDiv = <div className="table-div">{withOutStyle}</div>;
    } else if (this.props.data.slice(0, 3) === 'Hop') {
      dataDiv = (
        <div className="table-div">
          <p>{this.props.data}</p>
        </div>
      );
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
