import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Image,
} from 'react-bootstrap'
import withStyles from 'react-jss'
import {connect} from 'react-redux'

import User from '@/network/user'
import {addUser} from '@/redux/actions'

const styles = {
  container: {
    padding: '0 15%'
  },
  avatar: {
    height: '64px',
    width: '64px'
  }
}

@withStyles(styles)
class Avatar extends Component {
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
    const {user: sNo}= this.props
    if(sNo) {
      try {
        let {data} = await User.getById(this.props.user.sNo)
        // this.setState({ currentUser:  data })
        // FIXME s_no will been changed by the data which backend feedback
        const {s_no,name, avatar} =  data
        this.props.addUser(s_no, name, avatar)
      } catch (error) {
        console.log(error)
      }
    }
    // not login
  }
  render() {
    const {classes, user: {name, sNo, avatar} } = this.props
    return (
      <div className={classes.container}>
        <Image className={classes.avatar} src={avatar} responsive />
        <h4>{name}</h4>
      </div>
    )
  }
}

export default connect(
  store => {return {user: store.user }},
  {addUser}
)(Avatar)
