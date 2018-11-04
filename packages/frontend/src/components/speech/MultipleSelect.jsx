import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select, {Option} from 'rc-select'
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
    let data = await Tag.get()
    let dataSet = orderBy(data.data, ['count'], ['desc'])
    this.setState({ dataSet })
  }
  render() {
    const { label, ...restProps} = this.props
    const { dataSet } = this.state
    return <div>
      <div>
        <label>{label}:</label>
        <Select
          style={{ width: '100%' }}
          multiple
          allowClear
          defaultValue={['java','js']}
          tokenSeparators={[' ', ',']}
          animation='slide-up'
          {...restProps}
        >
          {dataSet.map((data, idx) => (
            <Option key={data.value} value={data.value}>{data.value}</Option>
          ))}
        </Select>
      </div>
    </div>
  }
}
