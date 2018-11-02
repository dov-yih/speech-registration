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

import routes from '@/pages/admin/routes'
import Avatar from './Avatar'

export default class Sidebar extends Component {
  static propTypes = {
  }
  constructor(props) {
    super(props)
    this.state = {
      activeKey: -1,
      currentUser: {
        name: '',
        s_no: '',
        avatar: ''
      }
    }
  }
  handleSelect = (key,e) => {
    // this.setState({ activeKey: key})
  }

  render() {
    const {prefix} = this.props
    const {activeKey,currentUser: { name, s_no, avatar}} = this.state

    return <div style={{padding: '0 15%'}}>
      <Row>
        <Avatar />
      </Row>
      <Row>
        <Nav activeKey={activeKey} bsStyle="pills" stacked onSelect={this.handleSelect}>
          {/* WRONG @see https://github.com/react-bootstrap/react-router-bootstrap/blob/6ee8df44d93b73e737b472096e7e1f8cb8f6d4e1/src/LinkContainer.js#L40 */}
          {routes.map(({ path, exact, name }, idx) => (
            <LinkContainer
              key={idx}
              exact={exact}
              to={`${prefix}${path === '/' ? '' : path}`}
            >
              <NavItem eventKey={1}>{name}</NavItem>
            </LinkContainer>
          ))}
        </Nav>
      </Row>
    </div>
  }
}
