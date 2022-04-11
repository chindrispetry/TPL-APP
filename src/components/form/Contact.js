import React from "react";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "error",
      classMSG: "",
      email: "",
      nume: "",
      prenume: "",
      textarea: "",
      phone: ""
    };
    this.validateContact = this.validateContact.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setNume = this.setNume.bind(this);
    this.setPrenume = this.setPrenume.bind(this);
    this.setTextArea = this.setTextArea.bind(this);
    this.setPhoneNumber = this.setPhoneNumber.bind(this);
  }
  validateContact(e) {
    e.preventDefault();
    if (this.state.nume.length < 3) {
      this.setState({ message: "name less than 3 chars!" });
      this.setState({ classMSG: "error" });
    } else if (this.state.prenume.length < 3) {
      this.setState({ message: "prenume less than 3 chars!" });
      this.setState({ classMSG: "error" });
    } else if (this.state.email.indexOf("@") == -1) {
      this.setState({ message: "e-mail incorrect!" });
      this.setState({ classMSG: "error" });
    } else if (this.state.phone.length < 10) {
      this.setState({ message: "phone incorrect!" });
      this.setState({ classMSG: "error" });
    } else if (this.state.textarea.length < 10) {
      this.setState({ message: "textul este prea scurt!" });
      this.setState({ classMSG: "error" });
    } else {
      this.setState({ message: "Mesajul a fost trimis cu success!" });
      this.setState({ classMSG: "done" });
    }
  }
  setEmail(e) {
    this.setState({ email: e.target.value });
  }
  setNume(e) {
    this.setState({ nume: e.target.value });
  }
  setPrenume(e) {
    this.setState({ prenume: e.target.value });
  }
  setTextArea(e) {
    this.setState({ textarea: e.target.value });
  }
  setPhoneNumber(e) {
    this.setState({ phone: e.target.value });
  }
  render() {
    const classMSG = "message-box " + this.state.classMSG;
    return (
      <div className="login-register">
        <form className="contact" onSubmit={this.validateContact}>
          <span className="login-register-close" onClick={this.props.close}>
            X
          </span>
          <h2>Contact</h2>
          <div className={classMSG}>{this.state.message}</div>
          <label>Nume</label>
          <input type="text" onChange={this.setNume} />
          <label>Prenume</label>
          <input type="text" onChange={this.setPrenume} />
          <label>E-mail</label>
          <input type="text" onChange={this.setEmail} />
          <label>Telefon</label>
          <input type="text" onChange={this.setPhoneNumber} />
          <label>Text</label>
          <textarea rows="10" cols="50" onChange={this.setTextArea}></textarea>
          <button>Send</button>
        </form>
      </div>
    );
  }
}
