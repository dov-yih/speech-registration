import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Home from './home'
import {
  Route,
  Switch
} from 'react-router-dom'
export default class index extends Component {
  static propTypes = {  }

  render() {
    return (
      <div>
        <Route path="/" component={Home} />
      </div>
    )
  }
}
