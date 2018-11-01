import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Picker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'

import { TERM_START_DATE} from '@/global'

const NOW_DATE = moment()

const TERM_END = moment(TERM_START_DATE).add(16, 'weeks')

export default class DataPicker extends Component {
  static propTypes = {
    date: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  static defaultProps = {
    date: NOW_DATE
  }
  // constructor(props) {
  //   super(props)
  //   // this.state ={
  //   //   date: NOW_DATE
  //   // }
  // }
  isSunday (date) {
    const day = date.day()
    return day === 0
  }

  render() {
    const {date, onChange} = this.props
    return (
      <div>
        <label>演讲日期:</label>
        <Picker selected={date}
          onWeekSelect={this.handleWeekSelect}
          showWeekNumbers
          dateFormat="YYYY-MM-DD"
          minDate={NOW_DATE}
          maxDate={TERM_END}
          filterDate={this.isSunday}
          // onSelect={this.handleSelect} //when day is clicked
          onChange={onChange} //only when value has changed
        />
      </div>
    )
  }
}
