import React, { Component } from 'react'
import './App.css';
import logo from './Puce.png'
import master from './master.jpg'
export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <h1>Credit card</h1>
        <img src={logo} alt="puce" className="puce"></img>
        <div>
          <p className="rib">7253 3256 7895 1245</p>
          <span className="my">month/year</span>
        </div>
      <div className="data">
          <p className="id"><strong>5422</strong></p>
          <p className='date'><span>valid</span><strong>11/50</strong></p>
      </div>
      <h2>cardholder</h2>
      <img src={master} alt="master" className="master"></img>
        
      </div>
    )
  }
}
