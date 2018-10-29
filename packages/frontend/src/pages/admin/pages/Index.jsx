import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SpeechList from '@/components/speech/List'

import AdminSpeech from '@/network/adminSpeech'
export default class Index extends Component {
  static propTypes = {
  }
  constructor(props) {
    super(props)
    this.state = {
      speeches: []
    }
  }
  async componentDidMount() {
    let data = await AdminSpeech.getById('16058522');
    this.setState({speeches: data})
  }
  render() {
    const {speeches} = this.state
    return <div>
      <SpeechList dataSet={speeches} />
    </div>
  }
}
