import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TopNavBar from '@/components/TopNavbar'
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap'
import {getSpeeches} from './request'
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
    let resp = await getSpeeches()
    const speeches = resp.data
    this.setState({ speeches})
  }
  render() {
    const { speeches } = this.state
    return <div>
      <TopNavBar />
      <Grid>
        <Row>
          <Col md={8} mdOffset={2}>
            <SpeechList dataSet={speeches} />
          </Col>
        </Row>

      </Grid>
    </div>
  }
}
