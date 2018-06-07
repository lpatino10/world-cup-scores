import React, { Component } from 'react';
import moment from 'moment';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    const now = moment();

    // for testing, since we haven't started yet
    //const now = moment().add(7, 'days');

    const currentDateString = now.format('YYYY-MM-DD');

    const fetchUrl = `//api.football-data.org/v1/competitions/467/fixtures?timeFrameStart=${currentDateString}&timeFrameEnd=${currentDateString}`;
    const fetchOptions = {
      headers: {
        'X-Auth-Token': process.env.REACT_APP_API_KEY,
      },
    };

    fetch(fetchUrl, fetchOptions)
      .then(response => response.json())
      .then(body => console.log(body));

    //setInterval(() => { }, 10000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
