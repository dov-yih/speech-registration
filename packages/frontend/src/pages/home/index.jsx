import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap'
import Speech from '@/network/speech'
import SpeechList from '@/components/speech/List.jsx'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speeches: []
    }
  }

  static propTypes = {  }
  async componentDidMount() {
    let data = await Speech.get()
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
