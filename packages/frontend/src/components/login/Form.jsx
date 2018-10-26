import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Alert,
  Button,
  FormGroup,
  FormControl,
  Modal,
} from 'react-bootstrap'
import withStyles from 'react-jss'

import JSEncrypt from '@/lib/jsencrypt.min.js'
import { loginReq } from '@/pages/login/request'

import { PUBLIC_KEY} from "../../keys.json"

console.log(PUBLIC_KEY)

const { Feedback } = FormControl
const { Dialog, Header,Title, Body,Footer } = Modal
const styles = {
  formControl: {
    height: '40px !important',
    margin: '25px 0'
  },
  errorModal: {
    marginTop: '10%',
    '& > .modal-dialog': {
      width: '450px !important',
    }
  }
}

export default
@withStyles(styles)
class LoginForm extends Component {
  static propTypes = { }

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      isShow: false
    }
  }
  handleClose = ()=> {
    this.setState({isShow: false})
  }
  validateUsername() {
    const {username} = this.state
    if(!username) {
      return null
    }
    // @BUG here will wring when school number start with 3
    // I think 1,2 is enough, because I don't think this app
    // can live 12 years.
    if(/[12][0-9]{7,7}/.test(username)) {
      return 'success'
    }
    return 'error'
  }

  validatePassword() {
    const { password } = this.state
    if(!password) {
      return null
    }
    if ( /[0-9a-zA-Z\!\@\#\$\%\^\&\*\_\=\+]{6}/.test(password)) {
      return 'success'
    }
    return 'error'
  }
  submit = async () => {
    if( this.validatePassword() !== 'success'
      || this.validateUsername() !== 'success' ){
      return false
    }
    const { username, password } = this.state
    let sign = new JSEncrypt()
    sign.setPublicKey(PUBLIC_KEY);
    let encrypted = sign.encrypt(JSON.stringify({ username, password }))
    console.log(encrypted)
    try{
      let resp = await loginReq(encrypted)
    } catch(e) {
      // console.log(e)
      this.setState({isShow: true})
    }
    return true
  }
  render() {
    const { classes } = this.props
    const {username, password, isShow} = this.state
    return (
      <div>
        <h2>Welcome Comrade</h2>
        <FormGroup
          validationState={this.validateUsername()}
          controlId="username">
          {/* BUG
            @see https://github.com/react-bootstrap/react-bootstrap/issues/2418#issuecomment-395996382
            @see https://github.com/react-bootstrap/react-bootstrap/issues/2226 */}
          <FormControl
            type="text"
            value={username}
            className={classes.formControl}
            placeholder="Your School Number"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <Feedback />
        </FormGroup>
        <FormGroup
          validationState={this.validatePassword()}
        controlId="password">
          <FormControl
            type="text"
            value={password}
            className={classes.formControl}
            placeholder="Password"
            onChange={ e => this.setState({password: e.target.value})}
          />
          <Feedback />
        </FormGroup>
        <Button bsStyle="primary" onClick={this.submit} block>
          Login
        </Button>
        <Modal show={isShow} className={classes.errorModal}>
            <Header>
              <Title bsClass="text-info">
                Network Error
              </Title>
            </Header>
            <Body >
              <Alert bsClass="text-danger text-center">
                Place reflesh pages.
              </Alert>
            </Body>
            <Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Footer>
        </Modal>
      </div>
    )
  }
}
