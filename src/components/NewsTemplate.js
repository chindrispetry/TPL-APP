import React from 'react'

export default class NewsTemplate extends React.Component{
  render(){
    return(
      <div className="news-template">
      <div className="news-template-info">
      <p className="news-template-date">Date : 19/12/2021 </p>
      <p className="news-template-title">Title</p>
      </div>
      <div className="news-template-controls">
      <button className="view">Vizualizeaza</button>
      <button className="update">Actualizeaza</button>
      <button className="delete">Sterge</button>
      </div>
      </div>
    );
  }
}