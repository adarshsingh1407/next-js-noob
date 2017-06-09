import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'
import React, { Component } from 'react'

class Post extends Component {
  constructor(props){
  	super(props);
  	this.state = {};
  }
  render(){
    return(
      <Layout>
         <h1>{this.props.show.name}</h1>
         <p>{this.props.show.summary.replace(/<[/]?p>/g, '')}</p>
         <img src={this.props.show.image.medium}/>
      </Layout>
    );
  }
}

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`http://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post
