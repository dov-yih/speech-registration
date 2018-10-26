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
export default class Sidebar extends Component {
  static propTypes = {
  }
  constructor(props) {
    super(props)
    this.state = {
      activeKey: -1
    }
  }
  handleSelect = (key,e) => {
    // this.setState({ activeKey: key})
  }
  render() {
    const {prefix} = this.props
    const {activeKey} = this.state
    console.log(activeKey);
    return (
      <Nav
        activeKey={activeKey}
        bsStyle="pills"
        stacked
        onSelect={this.handleSelect}
      >
      {/* WRONG @see https://github.com/react-bootstrap/react-router-bootstrap/blob/6ee8df44d93b73e737b472096e7e1f8cb8f6d4e1/src/LinkContainer.js#L40 */}
        <LinkContainer exact to={`${prefix}`}>
          <NavItem eventKey={1}>
            Home
          </NavItem>
        </LinkContainer>
        <LinkContainer to={`${prefix}/profile`}>
          <NavItem eventKey={2}>
            Profile
          </NavItem>
        </LinkContainer>
        <LinkContainer to={`${prefix}/password`}>
          <NavItem  eventKey={3}>
            Setting
          </NavItem>
        </LinkContainer>
        <LinkContainer to={`${prefix}/new`}>
          <NavItem eventKey={4}>
            New
          </NavItem>
        </LinkContainer>
      </Nav>
    )
  }
}
