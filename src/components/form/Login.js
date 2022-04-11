import React from "react";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "error",
      classMSG: "",
      email: "",
      password: ""
    };

    this.validateLogin = this.validateLogin.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }
  validateLogin(e) {
    e.preventDefault();
    if (this.state.email.indexOf("@") == -1) {
      this.setState({ message: "e-mail incorrect!" });
      this.setState({ classMSG: "error" });
    } else if (this.state.password.length < 6) {
      this.setState({ message: "password incorrect!" });
      this.setState({ classMSG: "error" });
    } else {
      this.setState({ message: "Autentificare..." });
      this.setState({ classMSG: "done" });
    }
  }
  setEmail(e) {
    this.setState({ email: e.target.value });
  }
  setPassword(e) {
    this.setState({ password: e.target.value });
  }
  render() {
    const classMSG = "message-box " + this.state.classMSG;
    return (
      <div className="login-register">
        <form className="login login-position" onSubmit={this.validateLogin}>
          <span className="login-register-close" onClick={this.props.close}>
            X
          </span>
          <h2>Autentificare</h2>
          <div className={classMSG}>{this.state.message}</div>
          <label>E-mail</label>
          <input type="e-mail" onChange={this.setEmail} />
          <label>Password</label>
          <input type="password" onChange={this.setPassword} />
          <p>
            Nu ai cont ?{" "}
            <a href="#" onClick={this.props.showRegister}>
              Inregistreaza-te!
            </a>{" "}
          </p>
          <p>
            Autentificare ca necunoscut? <a href="#">Necunoscut</a>{" "}
          </p>
          <button>Autentificare</button>
        </form>
      </div>
    );
  }
}
