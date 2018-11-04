import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Password from '@/components/setting/Password'

export default class Setting extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div>
        <Password />
      </div>
    )
  }
}
