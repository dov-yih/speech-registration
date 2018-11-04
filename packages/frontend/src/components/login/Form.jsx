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
import { Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import { userLogin } from '@/redux/actions'

import JSEncrypt from '@/lib/jsencrypt.min.js'
// import { loginReq } from '@/pages/login/request'
import Login from '@/network/login'

import { PUBLIC_KEY} from '@/keys.json'
import { SCHOOL_NUMBER } from '@/global'

const { Feedback } = FormControl
const {Header,Title, Body,Footer } = Modal

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

@withStyles(styles)
class LoginForm extends Component {
  static propTypes = { }

  constructor(props) {
    super(props)
    this.state = {
      sNo: '',
      password: '',
      isShow: false,
      errMsg: '网络错误,请稍后重试',
      canJump: false
    }
  }
  handleClose = ()=> {
    this.setState({isShow: false})
  }
  validatesNo() {
    const {sNo} = this.state
    if(!sNo) {
      return null
    }
    if (SCHOOL_NUMBER.test(sNo)) {
      return 'success'
    }
    return 'error'
  }

  validatePassword() {
    const { password } = this.state
    if(!password) {
      return null
    }
    if (/^[0-9a-zA-Z!@#$%^&*_=+]{6,20}$/.test(password)) {
      return 'success'
    }
    return 'error'
  }
  submit = async () => {
    if( this.validatePassword() !== 'success'
      || this.validatesNo() !== 'success' ){
      return false
    }
    const { sNo, password } = this.state
    let sign = new JSEncrypt()
    sign.setPublicKey(PUBLIC_KEY)
    let encryptedPasswd = sign.encrypt(password)
    try{
      let data = await Login.post({ id: sNo, sNo: sNo, password: encryptedPasswd })
      if(data.error) {
        return this.setState({isShow: true,errMsg: data.error})
      }
      const { userLogin } = this.props
      userLogin(sNo, data.token)
      // jump index
      this.setState({canJump: true, sNo})
    } catch(e) {
      // console.log(e)
      this.setState({isShow: true})
    }
    return true
  }
  render() {
    const { classes } = this.props
    const {sNo, password, isShow, canJump} = this.state
    return (
      <div>
        <h2>Welcome Comrade</h2>
        <FormGroup
          validationState={this.validatesNo()}
          controlId="sNo">
          {/* BUG
            @see https://github.com/react-bootstrap/react-bootstrap/issues/2418#issuecomment-395996382
            @see https://github.com/react-bootstrap/react-bootstrap/issues/2226 */}
          <FormControl
            type="text"
            value={sNo}
            className={classes.formControl}
            placeholder="Your School Number"
            onChange={e => this.setState({ sNo: e.target.value })}
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
        { canJump
          ? <Redirect to={`/${sNo}`} />
          : <Modal show={isShow} className={classes.errorModal}>
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
          </Modal>}
      </div>
    )
  }
}


export default connect(
  null,
  { userLogin }
)(LoginForm)
