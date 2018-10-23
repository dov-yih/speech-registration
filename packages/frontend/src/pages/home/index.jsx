import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TopNavBar from '@/components/TopNavbar'
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap'

export default class Home extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return <div>
      <TopNavBar />
      <Grid>
        <Row>
          <Col>col</Col>
        </Row>
        <Row>
          <Col>col</Col>
        </Row>
      </Grid>
    </div>
  }
}
