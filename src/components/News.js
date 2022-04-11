import React from "react";

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nrPage: 0 };
    this.handlerPage = this.handlerPage.bind(this);
  }
  handlerPage(e) {
    this.setState({ nrPage: e.target.innerText });
  }
  render() {
    let arr = this.props.news;
    const arrWithNews = [];
    let j = 0;
    for (let i = this.state.nrPage * 5; i < arr.length; i++) {
      arrWithNews.push(<p>{arr[i]}</p>);
      j++;
      if (j == 5) break;
    }
    const n = arr.length / 5;
    const btns = [];
    for (let i = 1; i <= n; i++) {
      btns.push(
        <button className="btn-page" onClick={this.handlerPage}>
          {i}
        </button>
      );
    }
    return (
      <div className="news">
        <h3>Stiri</h3>
        <hr></hr>
        <div className="news-title">
        {arrWithNews}
        </div>
        
        <div className="pagination">{btns}</div>
      </div>
    );
  }
}
