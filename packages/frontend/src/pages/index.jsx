import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Route,
  Switch
} from 'react-router-dom'
import {
  Grid,
} from 'react-bootstrap'
import Home from './home'
import Login from './login'
import TopNavBar from '@/components/TopNavbar'
export default class index extends Component {
  static propTypes = {  }

  render() {
    return (
      <div>
        <TopNavBar />
        <Grid>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Grid>
      </div>
    )
  }
}
