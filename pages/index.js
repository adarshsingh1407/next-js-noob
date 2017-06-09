import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import React, {Component} from 'react'
import fetch from 'isomorphic-unfetch'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
          {this.props.shows.map(({show}) => (
            <li key={show.id}>
              <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                <a>{show.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    );
  }
}

App.getInitialProps = async function() {
  const res = await fetch('http://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default App
