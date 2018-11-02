import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Row,Col} from 'react-bootstrap'
import Archive from '@/network/archive'
import SpeechList from '@/components/speech/List.jsx'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speeches: []
    }
  }

  static propTypes = {}
  async componentDidMount() {
    let { data } = await Archive.get();
    this.setState({ speeches: data })
  }
  render() {
    const { speeches } = this.state
    return (
      <Row>
        <Col md={8} mdOffset={2}>
          <SpeechList dataSet={speeches} />
        </Col>
      </Row>
    )
  }
}
