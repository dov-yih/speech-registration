import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Row,
  Image,
  Thumbnail
} from 'react-bootstrap'
import withStyles from 'react-jss'

// import { getUser } from '@/pages/admin/userReq'
import User from '@/network/user'

const styles = {
  container: {
    padding: '0 15%'
  },
  avatar: {
    height: '64px',
    width: '64px'
  }
}
export default
@withStyles(styles)
class Sidebar extends Component {
  static propTypes = {
  }
  constructor(props) {
    super(props)
    this.state = {
      currentUser: {
        name: '',
        s_no: '',
        avatar: ''
      }
    }
  }

  async componentDidMount() {
    let data = await User.getById("160585222");
    this.setState({ currentUser: data })
  }
  render() {
    const { currentUser: { name, s_no, avatar } } = this.state
    const {classes} = this.props
    return (
      <div className={classes.container}>
        <Image className={classes.avatar} src={avatar} responsive />
        <h4>{name}</h4>
      </div>
    )
  }
}
