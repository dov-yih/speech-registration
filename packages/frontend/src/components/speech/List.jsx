import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {PanelGroup} from 'react-bootstrap'
import Card from './Card'
export default class List extends Component {
  static propTypes = {  }

  render() {
    const {dataSet} = this.props
    return (
      <PanelGroup id="speech-list">
        {dataSet.map((speech, idx) => <Card key={idx} dataSrc={speech} />)}
      </PanelGroup>
    )
  }
}