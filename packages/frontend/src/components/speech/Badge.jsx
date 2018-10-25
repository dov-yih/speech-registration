import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Badge as BsBadge } from 'react-bootstrap'
import withStyles from 'react-jss'
import Colors from '@/jss/colors.js'
import str2number from '../../utils/str2number'

const colorList = Object.values(Colors)
  .filter((color, idx) => idx % 10 > 3 && idx % 10 <= 8)

const styles = {
  badgeColor: props => {
    return {
      margin: '0 10px',
      backgroundColor: colorList[str2number(props.children.toString()) % colorList.length]
    }
  }
}
export default
@withStyles(styles)
class Badge extends Component {
  static propTypes = {
  }

  render() {
    const { children, classes } = this.props
    return(
      <BsBadge className={classes.badgeColor}>
        {children}
      </BsBadge>)
  }
}
