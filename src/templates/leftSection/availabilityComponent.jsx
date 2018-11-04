import React, { Component } from "react";
import { Checkbox, Tooltip, Icon } from "antd";

const CheckboxGroup = Checkbox.Group;

const options = [
  { label: 'Full-time(40hrs/wk)', value: 'Full Time' },
  { label: 'Part-time(20hrs/wk)', value: 'Part Time' }
];

export default class Availability extends Component {
  onChange = (checkedValues) => {
   this.props.availabilityEvent(checkedValues)
  }

  render() {
    return (
      <div className="container">
        <p>
          <b>
            Availability{" "}
            <Tooltip title="Availability">
              <Icon
                type="info-circle"
                style={{ fontSize: "18px" }}
                theme="outlined"
              />{" "}
            </Tooltip>
          </b>{" "}
          <span className="clearFilter">Clear</span>
        </p>
        <div className="workType">
        <CheckboxGroup options={options} defaultValue={[]} onChange={this.onChange} />
        </div>
      </div>
    );
  }
}
