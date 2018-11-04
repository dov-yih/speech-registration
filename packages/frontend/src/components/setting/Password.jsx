import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Form, FormControl,Col,Button, FormGroup, ControlLabel} from 'react-bootstrap'
import {connect} from 'react-redux'

import { PASSWORD_RULE } from '@/global'
import encrypt from '@/utils/encrypt'
import AdminUser from '@/network/adminUser'

class Password extends Component {
  static propTypes = { }

  state = {
    oldPasswd: '',
    newPasswd: ''
  }
  handleSubmit = async (e) => {
    e.preventDefault()
    const {sNo} = this.props
    const {oldPasswd, newPasswd} = this.state
    try{
      let resp = await AdminUser.update({
        id: sNo,
        old: encrypt(oldPasswd),
        new: encrypt(newPasswd)
      })
    } catch(e) {
      console.log(e)
    }
  }
  render() {
    return (
      <Form horizontal>
        <FormGroup controlId="setting-old-password">
          <Col md={2} componentClass={ControlLabel}>
            Old Password
          </Col>
          <Col md={6}>
            <FormControl type="password" />
          </Col>
        </FormGroup>
        <FormGroup  controlId="setting-new-password">
          <Col md={2} componentClass={ControlLabel}>
            New Password
          </Col>
          <Col md={6}>
            <FormControl type="password" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col mdOffset={2}>
            <Button type="submit" onClick={this.handleSubmit}bsStyle="primary">Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

export default connect(
  store => ({sNo: store.user.sNo})
)(Password)
