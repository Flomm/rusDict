import React from 'react';
import parse from 'html-react-parser';

export class DetailsArticle extends React.Component {
  renderContent() {
    if (this.props.data.message) {
      return <div className="errorous">{this.props.data.message}</div>;
    }
    return <div>{parse(this.props.data)}</div>;
  }

  render() {
    return (
      <div className="flex-center table-div">
        <h4 className="flex-center">Nyelvtani részletek</h4>
        {this.renderContent()}
      </div>
    );
  }
}
