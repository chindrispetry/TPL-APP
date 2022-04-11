import React from "react";
import BarLanguage from "../components/BarLanguage";
import NavigationBar from "../components/NavigationBar";
import GalerieFoto from "../components/GalerieFoto";
import News from "../components/News";
import Route from "../components/Route";
import Login from "../components/form/Login";
import Register from "../components/form/Register";
import Footer from "./Footer";
import Contact from "../components/form/Contact";
import Admin from "../components/Admin";
import Stire from "./form/Stire";
const CLASS_DESIGN_LOGIN_REGISTER = "back-login-register";
const news = [
  "What is Lorem Ipsum?",
  "Why do we use it?",
  "Where can I get some?",
  "Where does it come from?",
  "What is Lorem Ipsum?",
  "Where does it come from?",
  "Why do we use it?",
  "Where can I get some?",
  "What is Lorem Ipsum?",
  "Where does it come from?",
  "What is Lorem Ipsum?",
  "What is Lorem Ipsum?",
  "Why do we use it?",
  "Where can I get some?",
  "Where does it come from?",
  "What is Lorem Ipsum?",
  "What is Lorem Ipsum?",
  "Why do we use it?",
  "Where can I get some?",
  "Where does it come from?",
  "What is Lorem Ipsum?"
];
export default class TPLapp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      galerie: null,
      route: null,
      news: null,
      login: null,
      register: null,
      classLoginRegister: null,
      contact: null,
      newsAdmin: null,
      stire: null
    };
    this.showLogin = this.showLogin.bind(this);
    this.showRegister = this.showRegister.bind(this);
    this.closeLoginRegister = this.closeLoginRegister.bind(this);
    this.showContact = this.showContact.bind(this);
    this.showNews = this.showNews.bind(this);
    this.showHome = this.showHome.bind(this);
    this.showFormStire = this.showFormStire.bind(this);
    this.closeFormStire = this.closeFormStire.bind(this);
  }
  showLogin() {
    this.setState({
      login: (
        <Login
          showRegister={this.showRegister}
          close={this.closeLoginRegister}
        />
      )
    });
    this.setState({ register: null });
    this.setState({ classLoginRegister: CLASS_DESIGN_LOGIN_REGISTER });
  }
  showRegister() {
    this.setState({
      register: (
        <Register showLogin={this.showLogin} close={this.closeLoginRegister} />
      )
    });
    this.setState({ login: null });
  }
  closeLoginRegister() {
    this.setState({ login: null });
    this.setState({ register: null });
    this.setState({ contact: null });
    this.setState({ classLoginRegister: null });
  }
  showContact() {
    this.setState({ contact: <Contact close={this.closeLoginRegister} /> });
    this.setState({ classLoginRegister: CLASS_DESIGN_LOGIN_REGISTER });
  }
  showNews() {
    this.setState({
      newsAdmin: <Admin stiri={this.showFormStire} />
    });
    this.setState({ galerie: null });
    this.setState({ route: null });
    this.setState({ news: null });
  }
  showHome() {
    this.setState({ galerie: <GalerieFoto /> });
    this.setState({ route: <Route /> });
    this.setState({ news: <News news={news} /> });
    this.setState({ newsAdmin: null });
  }
  showFormStire() {
    this.setState({ stire: <Stire closeStire={this.closeFormStire} /> });
    this.setState({ classLoginRegister: CLASS_DESIGN_LOGIN_REGISTER });
  }
  closeFormStire() {
    this.setState({ stire: null });
    this.setState({ classLoginRegister: null });
  }
  render() {
    return (
      <div>
        <BarLanguage />
        <NavigationBar
          showLogin={this.showLogin}
          showContact={this.showContact}
          news={this.showNews}
          home={this.showHome}
        />
        {this.state.newsAdmin}
        {this.state.galerie}
        <div className="news-route">
          {this.state.route}
          {this.state.news}
        </div>
        <div className={this.state.classLoginRegister}>
          {this.state.contact}
          {this.state.login}
          {this.state.register}
          {this.state.stire}
        </div>
        <Footer />
      </div>
    );
  }
}
