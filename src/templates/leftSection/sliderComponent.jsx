import React, { Component } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

export default class SliderComponent extends Component {
  state = {
    inputOneValue: 500,
    inputTwoValue: 10000
  }

  onChange = (value) => {
    this.setState({
      inputOneValue: value[0],
    });
    this.props.rangeEvent1(value);
  }
  onAfterChange = (value) => {
    this.setState({
      inputTwoValue: value[1],
    });
    this.props.rangeEvent2(value);
  }

  render() {
    const { inputOneValue,inputTwoValue } = this.state;
    const marks = {
      500: '500',
      10000: '10000',
    };
    return (
      <div className="container">
        <p><b>Pay rate/hr ($)</b> <span className='clearFilter'>Clear</span></p>
      <Row>
        <Col span={6}>
          <InputNumber
            min={500}
            max={10000}
            defaultValue={1}
            style={{ marginRight: 16 }}
            value={inputOneValue}
            onChange={this.onChange}
            onAfterChange={this.onAfterChange}
            />
        </Col>
        <Col span={6}>
          <InputNumber
            min={500}
            max={10000}
            style={{ marginLeft: 16 }}
            value={inputTwoValue}
            onChange={this.onChange}
            onAfterChange={this.onAfterChange}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Slider
            range={100}
            min={500}
            max={10000}
            marks={marks}
            onChange={this.onChange}
            onAfterChange={this.onAfterChange}
          />
        </Col>
        </Row>
      </div>
    );
  }
}
