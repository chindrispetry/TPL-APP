import React from "react";
import NewsTemplate from "./NewsTemplate";

export default class Admin extends React.Component {
  render() {
    return (
      <div className="panel-admin">
        <button className="btn-create-news" onClick={this.props.stiri}>
          Creaza stire
        </button>
        <div className="content">
          <label>Cauta dupa</label>
          <label> Date :</label>
          <input type="date" />
          <label> Title : </label>
          <input type="text" />
          <NewsTemplate />
        </div>
      </div>
    );
  }
}
