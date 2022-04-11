import React from "react";
import englishIcon from "../img/english.png";
import romaniaIcon from "../img/romania.png";

export default class BarLanguage extends React.Component {
  render() {
    return (
      <div className="bar-language">
        <div className="bar-language-center">
          <h5>S.R.L TPL Suceava S.C.</h5>
          <div className="language">
            <img src={englishIcon} className="icon-english" />
            <img src={romaniaIcon} className="icon-romania" />
          </div>
        </div>
      </div>
    );
  }
}
