import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  NavLink
} from 'react-router-dom'
import {
  Navbar,
  NavItem,
  Nav,
  NavDropdown,
  MenuItem
} from 'react-bootstrap'
import {
  LinkContainer
} from 'react-router-bootstrap'
import IndexRouters from '@/routers/index'
const { Header, Brand} = Navbar
export default class TopNavbar extends Component {
  static propTypes = {  }

  render() {
    return (
    <Navbar>
      <Header>
        <Brand>
          <NavLink to="/">创新实践演讲登记</NavLink>
        </Brand>
      </Header>
      <Nav pullRight>
        {
          IndexRouters.map( ({path,name},idx) => (
            <LinkContainer to={path}>
              <NavItem eventKey={idx}>
                  {name}
              </NavItem>
            </LinkContainer>
          ))
        }
        <NavDropdown eventKey={3} title="我的" id="basic-nav-dropdown">
          <LinkContainer to="/speech">
            <MenuItem eventKey={3.1}>记录</MenuItem>
          </LinkContainer>
          <LinkContainer to="/speech/new">
            <MenuItem eventKey={3.2}>新的演讲</MenuItem>
          </LinkContainer>
        </NavDropdown>
      </Nav>
    </Navbar>
    )
  }
}
