import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BsSwitch from 'react-bootstrap-switch'
import {
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  InputGroup,
} from 'react-bootstrap'
export default class Switch extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    isPPT: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onSwitch: PropTypes.func.isRequired,
  }
  render() {
    const { label, isPPT, onSwitch, ...props} = this.props
    return (
      <div>
        <BsSwitch
          bsSize="small"
          onText="PPT"
          offText="Blog"
          onColor="success"
          offColor="info"
          labelText="参考"
          defaultValue={false}
          disabled
          onChange={onSwitch}
        />
        <FormGroup style={{ margin: '10px 0 0 0'}}>
          <ControlLabel>{label}:</ControlLabel>
          {
            isPPT ?
              <FormControl type="file" // value={url}
                // onChange={e => this.handleChange('url', e.target.value)}
              />
              :
              <InputGroup>
                <InputGroup.Addon>HTTP://</InputGroup.Addon>
                {/* bootstrap default formcontrol z-index = 2 */}
                <FormControl style={{zIndex: 0}} type="text" {...props} />
              </InputGroup>
          }
          <HelpBlock>暂不支持 PPT 上传</HelpBlock>
        </FormGroup>
      </div>
    )
  }
}
