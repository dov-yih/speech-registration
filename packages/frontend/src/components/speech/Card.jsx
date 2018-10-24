import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Media,
  Panel
} from 'react-bootstrap'
const { Heading, Title, Body, Footer, collapse} = Panel

export default class Speech extends Component {
  static propTypes = {  }

  render() {
    const {dataSrc} = this.props
    const {id, subject, introduce, url, isPPT, speaker_name,tags,pre_knowledge, created_date} = dataSrc
    return (
      <Panel>
        <Heading>
          <Title>{subject}</Title>
          {tags.toString()}
        </Heading>
        <Body>
        <p>{introduce}</p>
        <p>{pre_knowledge}</p>
        </Body>
        <Footer>
          {created_date}
        </Footer>
      </Panel>
    )
  }
}
