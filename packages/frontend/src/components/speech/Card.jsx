import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Panel
} from 'react-bootstrap'
import withStyles from 'react-jss'
import './style.css'
const { Heading, Title, Body, Footer, collapse} = Panel
const styles={
  bigTitle: {
    fontSize: '26px'
  }
}
export default
// @withStyles(styles)
class Speech extends Component {
  static propTypes = {  }
  handleChange(e){
    console.log(e)
  }
  render() {
    const {dataSrc, classes} = this.props
    console.log(classes)
    const {id, subject, introduce, url, isPPT, speaker_name,tags,pre_knowledge, created_date} = dataSrc
    return (
      <Panel eventKey={id} bsStyle="info">
        <Heading>
          <Title className='bigTitle' componentClass="h1">
          {subject}
          </Title>
        </Heading>
        <Body>
          {tags.toString()}
          <p>{introduce}</p>
          <p>{pre_knowledge}</p>
        </Body>
        <Footer>{created_date}</Footer>
      </Panel>
    )
  }
}
