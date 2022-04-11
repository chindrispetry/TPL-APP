import React from "react";
import logo from "../img/favicon.ico";
import searchIcon from "../img/search.png";
import UnderMenu from "./UnderMenu";

let listMenu = {
  Program: ["Linii", "Microbuze", "Autobuze"],
  Tarife: ["Gratuitati", "Abonamente", "Pret Bilete"],
  Despre: ["Conducerea TPL", "Personal", "Istorie", "Despre TPL"]
};
let admin = true;
export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      under: null,
      acasa: "Acasa",
      program: "Program",
      tarife: "Tarife",
      despre: "Despre",
      contact: "Contact",
      stiri: "Stiri"
    };
  }
  handlerAdmin = () => {
    admin = false;
  };
  handlerMenu(val) {
    if (val.length > 0)
      this.setState({
        under: <UnderMenu values={listMenu} poz={val} />
      });
    else this.setState({ under: null });
  }
  render() {
    const list = [];
    const bar = [];
    const btn = [];

    if (!admin) {
      list.push(<li onClick={this.props.home}>{this.state.acasa}</li>);
      list.push(
        <li onClick={this.handlerMenu.bind(this, "Program")}>
          {this.state.program}
        </li>
      );
      list.push(
        <li onClick={this.handlerMenu.bind(this, "Tarife")}>
          {this.state.tarife}
        </li>
      );
      list.push(
        <li onClick={this.handlerMenu.bind(this, "Despre")}>
          {this.state.despre}
        </li>
      );
      list.push(<li onClick={this.props.showContact}>{this.state.contact}</li>);
      bar.push(<input type="text" className="search-bar" />);
      bar.push(
        <button className="btn-search">
          <img src={searchIcon} className="icon" alt="search" />
        </button>
      );
      btn.push(
        <button className="btn btn-register" onClick={this.props.showLogin}>
          Autentificare
        </button>
      );
    } else {
      list.push(<li onClick={this.props.news}>{this.state.stiri}</li>);
      btn.push(
        <button className="btn btn-register" onClick={this.handlerAdmin}>
          Logout
        </button>
      );
    }
    return (
      <nav className="top-navigation">
        <img src={logo} className="logo" alt="logo" />
        <ul>{list}</ul>
        <div className="search-bar-and-btn">{bar}</div>
        {btn}
        {this.state.under}
      </nav>
    );
  }
}
