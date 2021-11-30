import React, { Component } from 'react';

class Register extends Component {
    constructor(){
    super();
    this.state={
        firstname:'',
        lastname:'',
        email:'',
        role:'0',
        password:0,
        list:[{name:'fatime',pass:123456}],
        arr:[]
        }
        
        }
        // savechanges=(e,regstates)=>{
        //     // let regdata=localStorage.setItem("user",JSON.stringify());
        //     this.setState({
        // [regstates]:e.target.value
        // })
        // }

        check =(e)=>{
            const {firstname,lastname,email,password}=this.state;
            e.preventDefault();
            this.setState({
            firstname:e.target.name.value,
            lastname:e.target.last.value,
            email:e.target.email.value,
            password:e.target.password.value
            });
            let ob={firstname,lastname,email,password};
            this.state.arr.push(ob);
            localStorage.setItem("user",JSON.stringify(this.state.arr));
        }

  render() {
    return (
      <div className='register'> 
        Register 
            <form onSubmit={this.check}>
            <label>
                   Firstname:
               </label>
               <input type='text' name='name'/><br/>
                {/* {this.state.firstname <4 ? <h6>your name is too short</h6>:''} */}
               <label>
                   Lastname:
               </label>
               <input type='text' name='last'/><br/>
               <label>
                   Email:
               </label>
               <input type='text' name='email'/><br/>
               <label>
                   passowrd:
               </label>
               <input type='text' name='password'/>
               <br/>
               <button type='submit'>submit</button>
                <h3>{this.state.firstname}</h3>
          </form>

      </div>
    );
  }
}

export default Register;
