import React, {Component} from 'react'
import Link from 'next/link'

class PostLink extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <li>
        <Link as={`/p/${this.props.id}?title=${this.props.title}`} href={`/post?id=${this.props.id}&title=${this.props.title}`}>
          <a>{this.props.id}</a>
        </Link>
      </li>
    );
  }
}

export default PostLink
