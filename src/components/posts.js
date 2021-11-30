import React, { Component } from 'react';

class Posts extends Component {
  constructor(){
    super();
    this.state={
      post:'',
      posts:['']
    }
  }
  handlepost=async (e)=>{
   await e.preventDefault();
   this.setState({
      post:e.target.field.value
    });
    this.state.posts.push(this.state.post);
    localStorage.setItem("post",JSON.stringify(this.state.posts));
  
  }

  render() {
    return (
      <div> 
        <form onSubmit={this.handlepost}>
        <h3>your posts</h3>
        <input type='text' name="field" placeholder="write something here" ></input>
        <button >Post</button>
       
        <h5>{this.state.post}</h5>
        </form>
      </div>
          );
          }
}

export default Posts;

