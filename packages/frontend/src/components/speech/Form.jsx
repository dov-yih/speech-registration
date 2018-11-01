import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {
  Row,
  Col,
  Button,
} from 'react-bootstrap'
import MultipleSelect from './MultipleSelect'
import 'react-bootstrap-switch/dist/css/bootstrap3/react-bootstrap-switch.min.css'

import Select from './Select'
import Field from './Field'
import Switch from './Switch'
import DataPicker from './DataPicker'
// direction
// introduce
// is_ppt
// pre_knowledge
// speech_date
// tags
// url
export default class Form extends Component {
  static propTypes = {
  }
  constructor(props) {
    super(props)
    this.state = {
      subject: '',
      direction: '',
      introduce: '',
      pre_knowledge: '',
      tags: [],
      isPPT: false,
      url: '',
      speech_date:  moment()
    }
  }
  handleChange = (key, value) => {
    this.setState({[key]: value})
  }

  handleSwitchChange = (elem, state) => {
    this.setState({isPPT: state})
  }
  handelDateChange = (speech_date) => {
    this.setState({ speech_date });
  }
  render() {
    const { subject, isPPT, pre_knowledge, introduce, speech_date, url} = this.state
    return (
      <div>
        <Field label="演讲主题" type='text' value={subject}
          onChange={e => this.handleChange('subject', e.target.value)}
        />

        <Field label="介绍" type="text" componentClass="textarea" value={introduce}
          onChange={e => this.handleChange('introduce', e.target.value)}
        />
        <Row>
          <Col md={6}>
            <Select onChange={this.handleChange} label="方向" type="direction" />
          </Col>
          <Col md={6}>
            <MultipleSelect onChange={(value, option) => this.handleChange('tags',value)}  label="标签" />
            {/* <Select multiple  /> */}
          </Col>
        </Row>


        <Field label="预备知识" type="text" componentClass="textarea" value={pre_knowledge}
          onChange={e => this.handleChange('pre_knowledge', e.target.value)}
        />

        <Switch label="附加资料" isPPT={isPPT} value={url}
          onChange={e => this.handleChange('url',url)}
          onSwitch={this.handleSwitchChange}
        />

        <DataPicker date={speech_date} onChange={this.handelDateChange}/>

        <Row>
          <Button></Button>
        </Row>
      </div>
    )
  }
}
