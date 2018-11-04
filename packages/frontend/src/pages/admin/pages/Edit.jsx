import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Button, Modal} from 'react-bootstrap'

import Table from '@/components/speech/Table'
import AdminSpeech from '@/network/adminSpeech'
import SpeechForm from '@/components/speech/Form'

const { Header, Title, Body, Footer } = Modal

class Edit extends Component {
  static propTypes = {};
  constructor(props) {
    super(props)
    this.state = {
      speeches: [],
      showDelete: false,
      showModify: false,
      showError: false,
      speech: undefined, // speech Object which will be modify
      willDeleteId: -1,
    }
  }
  async componentDidMount() {
    const { sNo } = this.props
    let { data } = await AdminSpeech.getById(sNo)

    this.setState({
      speeches: data.filter(item => item.state !== 'expired')
    })
  }

  deleteTrigger = willDeleteId => {
    this.setState({ showDelete: true, willDeleteId })
  }

  modifyTrigger = speech => {
    this.setState({ showModify: true, speech })
  }
  confirmedDelete = async()=>{
    const {willDeleteId} = this.state
    try {
      await AdminSpeech.delete(willDeleteId)
      let speechesAferDelete = this.state.speeches.filter(
        speech => speech.id !== willDeleteId
      )
      this.setState({speeches: speechesAferDelete, showDelete: false})
    } catch (error) {
      this.setState({showError: true})
    }
  }
  handleSubmit = async speech => {
    let { tags, ...rest } = speech
    tags = tags.join(',')
    try {
      let data = await AdminSpeech.update({ tags, ...rest })
      this.state.speeches.forEach( (speech,idx,arr) => {
        if (parseInt(speech.id) === parseInt(data.id)) {
          data.tags = data.tags.split(',')
          arr[idx] = data
        }
      })
      this.setState({speeches: this.state.speeches, showModify: false})
    } catch (e) {
      this.setState({showError: true})
    }
  }

  handleClose = () => {
    this.setState({
      showDelete: false,
      showModify: false,
      showError: false,
    })
  }

  render() {
    const { speeches, showDelete, speech, showModify,showError } = this.state
    return (
      <div>
        <Table
          onDelete={this.deleteTrigger}
          onModify={this.modifyTrigger}
          dataSet={speeches}
        />

        <Modal keyboard onHide={this.handleClose} show={showDelete}>
          <Header className="text-warning" closeButton>
            警告: 操作不可撤销
          </Header>
          <Body className="text-danger">您确定删除这次演讲?</Body>
          <Footer>
            <Button onClick={this.confirmedDelete} bsStyle="danger">
              删除
            </Button>
            <Button onClick={this.handleClose} bsStyle="info">
              取消
            </Button>
          </Footer>
        </Modal>

        <Modal keyboard onHide={this.handleClose} show={showModify}>
          <Header className="text-warning" closeButton>
            修改
          </Header>
          <Body>
            <SpeechForm speech={speech} onSubmit={this.handleSubmit} />
          </Body>
          <Footer>
            <Button onClick={this.handleClose} bsStyle="info">
              取消
            </Button>
          </Footer>
        </Modal>

        <Modal keyboard onHide={this.handleClose} show={showError}>
          <Header className="text-warning" closeButton>
            出错啦!
          </Header>
          <Body className="text-danger">操作失败 &lt;-_-&gt;</Body>
        </Modal>

      </div>
    )
  }
}

export default connect(
  store => ({sNo: store.user.sNo})
)(Edit)
