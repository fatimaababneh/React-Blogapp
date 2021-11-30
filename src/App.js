import Login from './components/Login';
import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Routes as Switch,Link} from 'react-router-dom';
import Home from './components/home';
import './App.css';
import Register from './components/Register';
import Posts from './components/posts';

class  App extends Component {
  constructor(){
    super();
    this.state={
      userlogin:false,
        }
       
  }
 
  checkuser=()=>{
    this.setState({
        userlogin:true
    });
  }
  
  render(){
    // let useremail=JSON.parse(localStorage.getItem("user"));
    // console.log(useremail);
  return(this.state.userlogin? 
    <Switch>
      <Route exact path="/user" element={<Posts />} />
    </Switch>

    :
      <Switch>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/user" element={<Login checkuser={this.checkuser} />} />
        <Route exact path="/Register" element={<Register />} />
      </Switch>)
      
    
    
    
    
    
    // <div className="App">
    //   <Switch>
      
    //   <Route exact path="/Posts" element={<Posts />} />
    //   </Switch>

    // </div>
   
  
  }
}

export default App;
