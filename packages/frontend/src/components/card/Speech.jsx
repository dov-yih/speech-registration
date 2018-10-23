import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Media
} from 'react-bootstrap'
const { Left, Body, Heading, Right} = Media

export default class Speech extends Component {
  static propTypes = {  }

  render() {
    return (
      <Media>
        <Left>
          Left
        </Left>
        <Body>
          <Heading>
            Header
          </Heading>
          <p>content</p>
        </Body>
      </Media>
    )
  }
}
