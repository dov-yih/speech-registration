import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import Colors from '@/jss/colors.js'

import Badge from './Badge'
import str2number from '../../utils/str2number'
export default
class Tags extends Component {
  static propTypes = {
  }

  render() {
    const { dataSet} = this.props
    return <div>
      {dataSet.map((tag, idx) => (
        <Badge key={idx}>
          {tag}
        </Badge>
      ))}
    </div>
  }
}
