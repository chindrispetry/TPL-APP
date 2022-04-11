import React from "react";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "error",
      classMSG: "",
      email: "",
      password: "",
      username: "",
      age: "",
      tip: "Alege tip"
    };
    this.validateRegister = this.validateRegister.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setUserName = this.setUserName.bind(this);
    this.setAge = this.setAge.bind(this);
    this.setTipCont = this.setTipCont.bind(this);
  }
  validateRegister(e) {
    e.preventDefault();
    console.log(this.state.tip);
    if (this.state.username.length < 3) {
      this.setState({ message: "username less than 3 chars!" });
      this.setState({ classMSG: "error" });
    } else if (this.state.password.length < 6) {
      this.setState({ message: "password incorrect!" });
      this.setState({ classMSG: "error" });
    } else if (this.state.email.indexOf("@") == -1) {
      this.setState({ message: "e-mail incorrect!" });
      this.setState({ classMSG: "error" });
    } else if (this.state.age < 14) {
      this.setState({ message: "age incorrect form!" });
      this.setState({ classMSG: "error" });
    } else if (this.state.tip.localeCompare("Alege tip") == 0) {
      this.setState({ message: "tip cont incorrect!" });
      this.setState({ classMSG: "error" });
    } else {
      this.setState({ message: "Inregistrare efectuata cu success!" });
      this.setState({ classMSG: "done" });
    }
  }
  setEmail(e) {
    this.setState({ email: e.target.value });
  }
  setPassword(e) {
    this.setState({ password: e.target.value });
  }
  setUserName(e) {
    this.setState({ username: e.target.value });
  }
  setAge(e) {
    this.setState({ age: e.target.value });
  }
  setTipCont(e) {
    this.setState({ tip: e.target.value });
  }
  render() {
    const classMSG = "message-box " + this.state.classMSG;
    return (
      <div className="login-register">
        <form className="login" onSubmit={this.validateRegister}>
          <span className="login-register-close" onClick={this.props.close}>
            X
          </span>
          <h2>Inregistrare</h2>
          <div className={classMSG}>{this.state.message}</div>
          <label>Username</label>
          <input type="text" onChange={this.setUserName} />
          <label>Password</label>
          <input type="password" onChange={this.setPassword} />
          <label>E-mail</label>
          <input type="e-mail" onChange={this.setEmail} />
          <label>Age</label>
          <input type="number" onChange={this.setAge} />
          <label>Tip Cont</label>
          <select onClick={this.setTipCont} value={this.state.tip}>
            <option>Alege tip</option>
            <option>1-Cont Elev(copii intre 14-18 ani</option>
            <option>2-Student</option>
            <option>3-Mai mare(40+ ani)</option>
          </select>
          <p>
            Ai deja cont?{" "}
            <a href="#" onClick={this.props.showLogin}>
              Autentificare!
            </a>
          </p>
          <button>Inregistrare</button>
        </form>
      </div>
    );
  }
}
