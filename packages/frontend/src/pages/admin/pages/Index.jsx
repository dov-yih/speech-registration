import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SpeechList from '@/components/speech/List'

import {getSpeeches} from './request'
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
    let resp = await getSpeeches('17058511')
    this.setState({speeches: resp.data})
  }
  render() {
    const {speeches} = this.state
    return <div>
      <SpeechList dataSet={speeches} />
    </div>
  }
}
