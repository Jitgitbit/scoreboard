import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Title extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
  }
  render() {
    return <h1>{this.props.content}</h1>
  }
}

//checkout installing htop to see pc running in terminal!!