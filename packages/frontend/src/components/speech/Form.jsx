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
import AdminSpeech from '@/network/adminSpeech'
// direction
// introduce
// is_ppt
// pre_knowledge
// speech_date
// tags
// url
export default class Form extends Component {
  static propTypes = {
    speech: PropTypes.shape({
      subject: PropTypes.string.isRequired,
      direction: PropTypes.string.isRequired,
      introduce: PropTypes.string.isRequired,
      pre_knowledge: PropTypes.string.isRequired,
      tags: PropTypes.array.isRequired,
      isPpt: PropTypes.bool,
      url: PropTypes.string.isRequired,
      speech_date: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
      ]).isRequired,
    }),
  }
  static defaultProps = {
    speech: {
      isPpt: false,
      subject: '',
      direction: '',
      introduce: '',
      pre_knowledge: '',
      tags: [],
      url: '',
      speech_date: moment(),
    }
  }
  // static getDerivedStateFromProps(props, state) {
  //   console.log(props,state)
  //   state = props.speech
  //   return state
  // }

  state = {
    isPpt: false,
    ...this.props.speech
  }

  handleChange = (key, value) => {
    this.setState({ [key]: value })
  }

  handleSwitchChange = (elem, state) => {
    // TODO
    // this.setState({isPPT: state})
  }
  handelDateChange = (speech_date) => {
    this.setState({ speech_date })
  }
  // handleSubmit = async (e) => {
  //   let { tags, ...rest } = this.state
  //   tags = tags.join(',')
  //   try {
  //     let data = await AdminSpeech.create({ tags, ...rest })
  //     // TODO JUMP to profile
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  handleReset(e) {

  }
  render() {
    let {subject, isPpt, pre_knowledge,direction, introduce,tags, speech_date, url} = this.state
    if( typeof speech_date === 'string') speech_date = moment(speech_date)
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
            <Select onChange={this.handleChange} valeu={direction} label="方向" type="direction" />
          </Col>
          <Col md={6}>
            <MultipleSelect defaultValue={tags} onChange={(value, option) => this.handleChange('tags',value)}  label="标签" />
          </Col>
        </Row>


        <Field label="预备知识" type="text" componentClass="textarea" value={pre_knowledge}
          onChange={e => this.handleChange('pre_knowledge', e.target.value)}
        />

        <Switch label="附加资料" isPPT={isPpt} value={url}
          onChange={e => this.handleChange('url',e.target.value)}
          onSwitch={this.handleSwitchChange}
        />

        <DataPicker date={speech_date} onChange={this.handelDateChange}/>

        <Row style={{padding: '20px'}}>
          <Col md={2} sm={3}>
            <Button onClick={this.handleSubmit} bsStyle='primary'>提交</Button>
          </Col>

          <Col md={2} sm={3}>
            <Button onClick={this.handleReset} bsStyle='danger'>重置</Button>
          </Col>
        </Row>
      </div>
    )
  }
}
