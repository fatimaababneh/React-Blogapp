import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(){
    super();
        this.state={
            username:'',
            password:'',
            validuser:''
        }
    }
  
    loginsubmit=async (e)=>{
      e.preventDefault();
      await this.setState({
        username:e.target.name.value,
        password:e.target.password.value
      })
      
      let allobj=JSON.parse(localStorage.getItem("user"));
     
      allobj.forEach(element => {
        if(this.state.username===element.firstname && this.state.password===element.password)
        {
          this.props.checkuser();
          let name=element.firstname
          let pass=element.password
          let email=element.email
          let activeuser={name,email,pass}
          localStorage.setItem("active",JSON.stringify(activeuser));
        }
      });
      }
   
  render() {

    return (

      <div className="form-style"> 
      <div><h1>hello please Login</h1></div>
               <form onSubmit={this.loginsubmit}>
              <label>
                   Username:
               </label>
               <input type='text' name='name' /><br/>
               <label>
                   passowrd:
               </label>
               <input type='text' name='password' /><br/>

               <button type="submit" >login</button>
               {this.state.validuser ? <Link to='/posts'></Link> :''}
               </form>

      </div>
    );
  }

}

export default Login;
