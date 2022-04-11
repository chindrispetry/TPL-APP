import React from "react";

export default class UnderMenu extends React.Component {
  render() {
    let arr = this.props.values[this.props.poz];
    let lst = arr.map((elem) => <li>{elem}</li>);

    return (
      <div className="under-navigation-bar">
        <ul>{lst}</ul>
      </div>
    );
  }
}
