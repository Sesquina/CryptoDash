// Import React and Component
import React, { Component } from 'react';
// Import CSS from App.css
import './CoinList.css';
// Import the Today component to be used below
import Today from './Today'
// Import the History component to be used below
import History from './History'

class CoinList extends Component {
  render() {
    return (
      <div className="">
          <div className="topheader">
              <header className="container">
                  <nav className="navbar">
                      <div className="navbar-brand">
                          <span className="navbar-item">Coin List</span>
                      </div>
                    
                  </nav>
              </header>
          </div>
          <section className="results--section">
              <div className="container">
                  <h1>Here's realtime price information about<br></br> BTC, ETH and LTC.</h1>
              </div>
              <div className="results--section__inner">
                  <Today />
                  <History />
              </div>
          </section>
      </div>
    );
  }
}

export default CoinList;