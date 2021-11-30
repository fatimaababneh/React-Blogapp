import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';
import {BrowserRouter as Router,Route,Routes as Switch ,Link} from 'react-router-dom';
class Home extends Component {
 
  render() {
    return (
     
      <div> 
         <h2>hello, welcome in my website</h2>
            <Link to="/">Home</Link>
            <Link to="/user"> login</Link>
            <Link to="/Register"> reg</Link>
      </div>
      
    );
  }
}
export default Home;
