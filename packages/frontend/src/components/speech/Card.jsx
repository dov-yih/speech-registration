import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Panel,
  Label,
} from 'react-bootstrap'
import withStyles from 'react-jss'

import Tags from './Tags'
import Section from './Section'
const { Heading, Title, Body, Footer, collapse} = Panel
const title = {
  display: 'inline-block'
}
const styles = {
  card: {
    marginBottom: '35px !important',
  },
  subTitile: {
    fontSize: '18px',
    marginLeft: '20px',
    ...title
  },
  title: {
    fontSize: '26px',
    ...title
  }
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
  handleChange(e){
    console.log(e)
  }
  render() {
    const {dataSrc, classes} = this.props
    const {
      id,
      subject,
      introduce,
      direction,
      url,
      isPPT,
      speaker_name,
      tags,
      pre_knowledge,
      created_date,
      speech_date,
    } = dataSrc
    return (
      <Panel className={classes.card} eventKey={id} bsStyle="info">
        <Heading>
          <Title className={classes.title} componentClass="h1">
            {subject}
          </Title>
          <Title className={classes.subTitile} componentClass="h2">
            {speaker_name}
          </Title>
        </Heading>
        <Body>
          <Tags dataSet={tags} />
          <Section label="介绍">{introduce}</Section>
          <Section label="预备知识">{pre_knowledge}</Section>
          <Section label="演讲时间">
            {speech_date}
          </Section>
          <Section label="链接" url>
            {url}
          </Section>
        </Body>
        <Footer>{created_date}</Footer>
      </Panel>
    )
  }
}
