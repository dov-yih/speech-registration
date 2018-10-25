import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

const styles = {
  quote: {
    padding: '0 1em',
    color: '#6a737d',
    borderLeft: '0.25em solid #dfe2e5',
  },
  title: {
    paddingBottom: '0.3em',
    fontSize: '2em',
    borderBottom: '1px solid #eaecef',
  }
}
export default
@withStyles(styles)
class Section extends Component {
  static propTypes = {
    url: PropTypes.bool
  }
  static defaultProps ={
    label: '',
    children: '',
    url: false,
    classes: {}
  }

  render() {
    const { label, children, url, classes } = this.props
    return (
      <div>
        <h3 className={classes.title}>{label}</h3>
        { url
          ? <a href={children}>{children}</a>
          : <p>{children} </p>
        }

      </div>
    )
  }
}
