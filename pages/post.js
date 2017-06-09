import Layout from '../components/MyLayout.js'
import React, { Component } from 'react'

class Post extends Component {
  constructor(props){
  	super(props);
  	this.state = {};
  }
  render(){
    return(
      <Layout>
         <h1>{this.props.url.query.id}</h1>
         <p>This is the blog post content for {this.props.url.query.title}.</p>
      </Layout>
    );
  }
}

export default Post
