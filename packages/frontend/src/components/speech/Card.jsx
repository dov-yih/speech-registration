import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Panel,
  Label,
  Row,
  Col
} from 'react-bootstrap'
import withStyles from 'react-jss'

import Tags from './Tags'
import Section from './Section'
import Star from '../Star'
const { Heading, Title, Body, Footer} = Panel
const title = {
  display: 'inline-block'
}
const styles = {
  card: {
    marginBottom: '35px !important',
  },
  subTitile: {
    fontSize: '18px',
    margin: '0 20px',
    ...title
  },
  title: {
    fontSize: '26px',
    ...title
  }
}

const stateColors = {
  preparatory: 'info',
  processional: 'success',
  expired: 'warning'
}
/**
 *
 * @see React-Bootstrap ClassName Order https://github.com/react-bootstrap/react-bootstrap/issues/2675
 * @class Speech
 * @extends {Component}
 */
export default
@withStyles(styles)
class Speech extends Component {
  static propTypes = {  }
  // constructor(props) {
  //   super(props)
  // }
  handleChange(e){
    // TODO
  }
  render() {
    const {dataSrc, classes} = this.props
    const {
      id,
      subject,
      introduce,
      direction,
      url,
      is_ppt,
      speaker_name,
      tags,
      pre_knowledge,
      created_date,
      speech_date,
      state,
    } = dataSrc

    return <Panel className={classes.card} eventKey={id} bsStyle={stateColors[state]}>
      <Heading>
        <Row>
          <Col md={8}>
            <Title className={classes.title} componentClass="h1">
              {subject}
            </Title>
          </Col>
          <Col md={2}>
            <Title className={classes.subTitile} componentClass="h2">
              {speaker_name}
            </Title>
          </Col>
          <Col md={1}>
            <Label style={{fontSize: '15px'}} bsStyle="primary">{direction}</Label>
          </Col>
          {/* // Next Version */}
          {/* <Col md={2}>
            <Star bsStyle={stateColors[state]}/>
            </Col> */}
        </Row>
      </Heading>
      <Body>
        <Tags dataSet={tags} />
        <Section label="介绍">{introduce}</Section>
        <Section label="预备知识">{pre_knowledge}</Section>
        <Section label="演讲时间">{speech_date}</Section>
        <Section label="链接" url>
          {' '}
          {url}{' '}
        </Section>
      </Body>
      <Footer>创建: {created_date}</Footer>
    </Panel>
  }
}
