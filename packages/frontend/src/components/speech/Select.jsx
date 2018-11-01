import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap'
import orderBy from 'lodash/orderBy'
import Tag from '@/network/tag'
import Direction from '@/network/direction'

export default class Select extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string
  }
  static defaultProps = {
    type: 'tag'
  }
  constructor(props) {
    super(props)
    this.state = {
      dataSet: []
    }
  }
  async componentDidMount() {
    const {type} = this.props
    let data
    if(type === 'tag') {
      data = await Tag.get()
    } else {
      data = await Direction.get()
    }
    let dataSet = orderBy(data.data,['count'], ['desc'])
    this.setState({dataSet})
  }
  render() {
    const {onChange, type,label} = this.props
    const {dataSet} = this.state
    return <div>
      <FormGroup>
        <ControlLabel>{label}:</ControlLabel>
        <FormControl componentClass="select" onChange={e => onChange(type, e.target.value)}>
          {dataSet.map((data, idx) => (
            <option key={idx} value={data.value}>{data.value}</option>
          ))}
        </FormControl>
      </FormGroup>
    </div>
  }
}
