import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Row,
  Col,
  Nav,
  NavItem,
} from 'react-bootstrap'
import {
  LinkContainer
} from 'react-router-bootstrap'
import {
  Route,
} from 'react-router-dom'
import Sidebar from '@/components/Sidebar'
import routes from './routes'

export default class Admin extends Component {
  static propTypes = {  }

  render() {
    const {match: {url}} = this.props
    return (
      <Row>
        <Col bsStyle="pills" stacked="true" md={3}>
          <Sidebar prefix={url} />
        </Col>
        {/* @see https://reacttraining.com/react-router/web/example/recursive-paths */}
        <Col md={8} mdOffset={1}>
          {
            routes.map(
              ({path, exact, component }, idx) =>
                <Route
                  key={idx}
                  path={url + path}
                  exact={exact}
                  component={component}
                />
            )
          }
        </Col>
      </Row>
    )
  }
}
