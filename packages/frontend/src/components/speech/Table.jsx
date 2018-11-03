import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Table as BsTable, Button, Modal} from 'react-bootstrap'


export default class Table extends Component {
  static propTypes = {
    dataSet: PropTypes.array.isRequired
  }
  static defaultProps = {
    dataSet: []
  }
  render() {
    const {dataSet, onDelete, onModify} = this.props
    return (
      <BsTable responsive striped hover>
        <thead>
          <tr>
            <th>场次</th>
            <th>主题</th>
            <th>方向</th>
            <th>状态</th>
            <th>演讲者</th>
            <th>演讲时间</th>
            <th>操作</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {dataSet.map(
            ({ id, subject, direction, state, speaker_name, speech_date},idx) => (
              <tr key={idx}>
                <td>{id}</td>
                <td>{subject}</td>
                <td>{direction}</td>
                <td>{state === 'processional' ? '即将开始' : '下一周'}</td>
                <td>{speaker_name}</td>
                <td>{speech_date}</td>
                <td>
                  <Button id={id} onClick={() => onDelete(id)} bsStyle="danger">删除</Button>
                </td>
                <td>
                  <Button onClick={() => onModify(dataSet[idx])} bsStyle="warning">修改</Button>
                </td>
              </tr>
          ))}
        </tbody>
      </BsTable>
    )
  }
}
