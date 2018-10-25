import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Row,
  Col,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from 'react-bootstrap'
import withStyles from 'react-jss'

const styles = {
  formControl: {
    height: '40px !important',
    margin: '25px 0'
  }
}
export default
@withStyles(styles)
class LoginForm extends Component {
  static propTypes = {
  }
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
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

  render() {
    const { classes } = this.props
    const {username, password} = this.state
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
        </FormGroup>
        <Button bsStyle="primary" block>
          Login
        </Button>
      </div>
    )
  }
}
