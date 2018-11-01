import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'rc-select'
import orderBy from 'lodash/orderBy'
import Tag from '@/network/tag'

import 'rc-select/assets/index.css'

export default class MultipleSelect extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }
  static defaultProps = {
    type: 'direction'
  }
  constructor(props) {
    super(props)
    this.state = {
      dataSet: []
    }
  }
  async componentDidMount() {
    let data = await Tag.get();
    let dataSet = orderBy(data.data, ['count'], ['desc'])
    this.setState({ dataSet })
  }
  render() {
    const { onChange, label } = this.props
    const { dataSet } = this.state
    return <div>
      <div>
        <label>{label}:</label>
        <Select
          style={{ width: '100%' }}
          multiple
          onChange={onChange}
          animation='slide-up'
          allowClear
          tokenSeparators={[' ', ',']}
        >
          {dataSet.map((data, idx) => (
            <option key={idx} value={data.value}>{data.value}</option>
          ))}
        </Select>
      </div>
    </div>
  }
}
