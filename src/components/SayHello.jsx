import React, { Component } from 'react'
import PropTypes from 'prop-types'; //Don't forget this LIBRARY for adding static propTypes!!

export default class SayHello extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  }
  componentDidMount(){
    console.log('component did mount of SayHello', this.props)
  }
  render() {
    console.log('render of SayHello', this.props);
    return (
      <div>
        <p>Hello World! Hello dear {this.props.name}!</p>
      </div>
    )
  }
}
