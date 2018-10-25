import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import LoginFrom from '@/components/login/Form'
const styles = {
  loginContainer: {
    backgroundColor: '#f6f6f6',
    width: '100%',
    position: 'absolute',
    top: '0px',
    bottom: '0px',
    left: '0px',
  },
  loginBox: {
    position: 'relative',
    margin: 'auto auto',
    // Copy from https://eacy-mock.com/login
    width: '300px',
    height: '300px',
    top: '20%',
    // Copy from https://github.com/login
    backgroundColor: '#fff',
    padding: '20px',
    fontSize: '14px',
    border: '1px solid #d8dee2'
  }
}
export default
@withStyles(styles)
class Login extends Component {
  static propTypes = {
  }

  render() {
    const {classes} = this.props
    return (
      <div className={classes.loginContainer}>
        <div className={classes.loginBox}>
          <LoginFrom />
        </div>
      </div>
    )
  }
}
