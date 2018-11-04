import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import SpeechList from '@/components/speech/List'
import AdminSpeech from '@/network/adminSpeech'

class Index extends Component {
  static propTypes = {};
  constructor(props) {
    super(props)
    this.state = {
      speeches: []
    }
  }
  async componentDidMount() {
    const {sNo} = this.props
    let { data } = await AdminSpeech.getById(sNo)
    this.setState({ speeches: data })
  }
  render() {
    const { speeches } = this.state
    return (
      <div>
        <SpeechList dataSet={speeches} />
      </div>
    )
  }
}

export default connect(
  store => {
    return {sNo: store.user.sNo}
  }
)(Index)
