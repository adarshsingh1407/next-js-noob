import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import React, { Component } from 'react'
import PostLink from '../components/PostLink'

class App extends Component {
  constructor(props){
  	super(props);
  	this.state = {};
  }
  render(){
    return(
      <Layout>
        <h1>My Blog</h1>
        <ul>
          <PostLink id="hello-nextjs" title="Hello NextJS"/>
          <PostLink id="hello-adarsh" title="Hello Adarsh"/>
          <PostLink id="hello-kanika" title="Hello Kanika"/>
        </ul>
      </Layout>
    );
  }
}

export default App
