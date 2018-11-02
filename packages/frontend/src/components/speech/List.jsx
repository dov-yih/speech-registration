import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {PanelGroup} from 'react-bootstrap'
import Card from './Card'
export default class List extends Component {
  static propTypes = {  }
  static defaultProps = {
    dataSet: []
  }
  render() {
    let {dataSet} = this.props
    dataSet = Array.from(dataSet)
    return (
      <PanelGroup id="speech-list">
        {dataSet.map((speech, idx) => <Card key={idx} dataSrc={speech} />)}
      </PanelGroup>
    )
  }
}
