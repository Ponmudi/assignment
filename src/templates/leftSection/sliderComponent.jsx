import React, { Component } from 'react';
import { Slider, InputNumber, Row, Col, Checkbox } from 'antd';

export default class SliderComponent extends Component {
  state = {
    inputOneValue: 1,
    inputTwoValue: 50
  }
  
  handleOnCheckBoxChange = (e) => {
    //console.log(`checked = ${e.target.checked}`);
  }

  onChange = (value) => {
    this.setState({
      inputOneValue: value[0],
      inputTwoValue: value[1]
    });
    this.updateRangevalues(value[0],value[1]);
  }
  onAfterChange = (value) => {
    this.setState({
      inputOneValue: value[0],
      inputTwoValue: value[1]
    });
    this.updateRangevalues(value[0],value[1]);
  }

  onInputChange = (value) => {
    if(value!==''){
    this.setState({
      inputOneValue: value
    });
    this.updateRangevalues(value,this.state.inputTwoValue);
    }
  }
  onInputAfterChange = (value) => {
    if(value!==''){
      this.setState({
        inputTwoValue: value
      });
      this.updateRangevalues(this.state.inputOneValue,value);
    }
  }
  handleResetSlider = () => {
      this.setState({
      inputOneValue: 1,
      inputTwoValue: 50
    });
    this.props.rangeEvent([]);
  }

  updateRangevalues(min,max){
    const finalRange = [];
    min = (min*40*4);
    max = (max*40*4);
    finalRange.push(min);
    finalRange.push(max);
    this.props.rangeEvent(finalRange);
  }


  render() {
    const { inputOneValue,inputTwoValue } = this.state;
    const marks = {
      1: '1',
      50: '50',
    };
    return (
      <div className="container">
        <p><b>Pay rate/hr ($)</b> <span className='clearFilter' onClick={this.handleResetSlider} >Clear</span></p>
      <Row>
        <Col span={6}>
          <InputNumber
            min={1}
            max={50}
            defaultValue={1}
            style={{ marginRight: 16 }}
            value={inputOneValue}
            onChange={this.onInputChange}
            />
        </Col>
        <Col span={6}>
          <InputNumber
            min={1}
            max={50}
            style={{ marginLeft: 16 }}
            value={inputTwoValue}
            onChange={this.onInputAfterChange}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Slider
            range={100}
            min={1}
            max={50}
            value={[inputOneValue,inputTwoValue]}
            marks={marks}
            onChange={this.onChange}
            onAfterChange={this.onAfterChange}
          />
        </Col>
        </Row>
        <div className="withoutPayRates"><Checkbox name="payrates" onChange={this.handleOnCheckBoxChange}>Include profiles without pay rates</Checkbox></div>
      </div>
    );
  }
}
