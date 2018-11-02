import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {FormControl,FormGroup,ControlLabel} from 'react-bootstrap'

export default class Field extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    componentClass: PropTypes.string,
    label: PropTypes.string.isRequired,
  }

  render() {
    const {label, ...props} = this.props
    return (
      <FormGroup>
        <ControlLabel>{label}:</ControlLabel>
        <FormControl
          {...props}
        />
      </FormGroup>
    )
  }
}
