import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Button, Modal} from 'react-bootstrap'

import Table from '@/components/speech/Table'
import AdminSpeech from '@/network/adminSpeech'
import SpeechForm from '@/components/speech/Form'

const { Header, Title, Body, Footer } = Modal

class Edit extends Component {
  static propTypes = {
  }
  constructor(props) {
    super(props)
    this.state = {
      speeches: [],
      showDelete: false,
      showModify: false,
      speech: undefined,
    }
  }
  async componentDidMount() {
    const {sNo} = this.props
    let { data } = await AdminSpeech.getById(sNo)

    this.setState({
      speeches: data.filter(item =>item.state !== 'expired')
    })
  }

  handleDalete = (id) => {
    this.setState({showDelete: true})
  }

  handleModify = (speech) => {
    console.log(speech);
    this.setState({ showModify: true, speech })
  }

  handleClose = () => {
    this.setState({
      showDelete: false,
      showModify: false,
    })
  }

  render() {
    const {speeches,showDelete,speech, showModify} = this.state
    return (
      <div>
        <Table onDelete={this.handleDalete}  onModify={this.handleModify} dataSet={speeches} />

        <Modal keyboard onHide={this.handleClose} show={showDelete}>
          <Header className="text-warning" closeButton>警告: 操作不可撤销</Header>
          <Body className="text-danger">您确定删除这次演讲?</Body>
          <Footer>
            <Button bsStyle="danger">删除</Button>
            <Button onClick={this.handleClose} bsStyle="info">取消</Button>
          </Footer>
        </Modal>

        <Modal keyboard onHide={this.handleClose} show={showModify}>
          <Header className="text-warning" closeButton>修改</Header>
          <Body>
            <SpeechForm speech={speech}/>
          </Body>
          <Footer>
            <Button onClick={this.handleClose} bsStyle="info">取消</Button>
          </Footer>
        </Modal>
      </div>
    )
  }
}

export default connect(
  store => ({sNo: store.user.sNo})
)(Edit)
