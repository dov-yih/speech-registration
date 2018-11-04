import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Glyphicon, Button} from 'react-bootstrap'
export default class Star extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    const count = parseInt(Math.random() * 100)
    return (
      <div>
        <Glyphicon glyph="star" /> star {count}
      </div>
    )
  }
}
