import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AdminSpeech from '@/network/adminSpeech'
import SpeechForm from '@/components/speech/Form'

export default class New extends Component {
  static propTypes = {
  }

  handleSubmit = async (speech) => {
    let { tags, ...rest } = speech
    tags = tags.join(',')
    try {
      let data = await AdminSpeech.create({ tags, ...rest })
      // TODO JUMP to profile
    } catch (e) {
      console.log(e)
    }
  }
  render() {
    return (
      <div>
        <SpeechForm onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}
