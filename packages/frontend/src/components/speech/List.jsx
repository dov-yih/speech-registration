import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {PanelGroup} from 'react-bootstrap'
import Card from './Card'
import orderBy from "lodash/orderBy";
export default class List extends Component {
  static propTypes = {  }
  static defaultProps = {
    dataSet: []
  }
  render() {
    let {dataSet} = this.props
    // order by speech date. desc
    dataSet = orderBy(dataSet, [date => +new Date(date.speech_date)], ['desc']);
    return (
      <PanelGroup id="speech-list">
        {dataSet.map((speech, idx) => <Card key={idx} dataSrc={speech} />)}
      </PanelGroup>
    )
  }
}
