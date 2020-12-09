import React from "react";
import { BrowserRouter , Route} from 'react-router-dom'

import './App.css';

import {Header} from './parts/header'
import {Home} from './pages/home/index'

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  menuToggle = (callback) => {
    this.setState( { menuOpen: callback });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.state.menuOpen);
  }

  render() {
    return (
      <div className="app">

        <Header menuToggle={this.menuToggle} />

        <div className="contents-wrapper">

          <div className={this.state.menuOpen ? 'menu-opened' : 'menu-closed'}>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>

          <div className="router-contents-wrapper">
            <BrowserRouter>
              <Route path="/" component={Home} exact/>
            </BrowserRouter>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
