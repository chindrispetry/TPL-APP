import React from "react";

export default class Route extends React.Component {
  render() {
    return (
      <div className="route">
        <label>De la</label>
        <select>
          <option>Burdujeni</option>
          <option>Itcani</option>
          <option>Obcini</option>
        </select>
        <label>Pana la</label>
        <select>
          <option>Burdujeni</option>
          <option>Itcani</option>
          <option>Obcini</option>
        </select>
        <button>Cauta traseu</button>
      </div>
    );
  }
}
