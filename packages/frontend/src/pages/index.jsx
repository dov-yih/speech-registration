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
import Admin from './admin'
import NotFound from './error'
import TopNavBar from '@/components/TopNavbar'
import { SCHOOL_NUMBER} from '../global'

/**
 *
 *
 * @export Pages
 * @class Pages
 * @extends {Component}
 */
export default class Pages extends Component {
  /**
   *
   *
   * @static
   * @memberof Pages
   */
  static propTypes = {  }
  /**
 *
 * @see https://github.com/ReactTraining/react-router/issues/391#issuecomment-294237556
 * @see https://reacttraining.com/react-router/web/example/url-params
 * @returns
 * @memberof Pages
 */
  render() {
    return (
      <div>
        <TopNavBar />
        <Grid>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/:school_number([12][0-9]{7,7})" component={Admin} />
            <Route exact path="/" component={Home} />
            <Route component={NotFound}/>
          </Switch>
        </Grid>
      </div>
    )
  }
}
