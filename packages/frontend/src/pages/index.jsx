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
import Archive from './archive'
import NotFound from './error'
import TopNavBar from '@/components/TopNavbar'
import { SCHOOL_NUMBER} from '@/global'

let schoolStr = SCHOOL_NUMBER.toString()
let SCHOOL_NUMBER_REGEXP_STR = schoolStr.substr(2,schoolStr.length - 4)
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
    return <div>
        <TopNavBar />
        <Grid>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/archives" component={Archive} />
            <Route path={`/:school_number(${SCHOOL_NUMBER_REGEXP_STR})`} component={Admin} />
            Archive
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Grid>
      </div>;
  }
}
