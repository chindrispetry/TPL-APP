import React from "react";

export default class Stire extends React.Component {
  constructor(props) {
    super(props);
  }
  validateStire = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="login-register">
        <form className="login stire-form" onSubmit={this.validateStire}>
          <h2>Stire Noua</h2>
          <label>Titlu</label>
          <input type="text" />
          <label>Continut </label>
          <textarea cols="20" rows="30"></textarea>
          <div className="btn-stire">
            <button onClick={this.props.closeStire}>Cancel</button>
            <button>Creeaza</button>
          </div>
        </form>
      </div>
    );
  }
}
