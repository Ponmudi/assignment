import React, { Component } from "react";
import { Checkbox, Tooltip, Icon } from "antd";

const CheckboxGroup = Checkbox.Group;

const options = [
  { label: 'Full-time(40hrs/wk)', value: 'Full Time' },
  { label: 'Part-time(20hrs/wk)', value: 'Part Time' }
];

export default class Availability extends Component {

  state = {
    checkedItems: []
  };

  onChange = (checkedValues) => {
   console.log(checkedValues)
   this.props.availabilityEvent(checkedValues)
   this.setState({checkedItems: checkedValues})
  }

  handleResetAvailability = () => {
    let newCheckedItems = [...this.state.checkedItems]
    const elements = document.querySelectorAll('.ant-checkbox-checked input');
		for (let i=0;i<elements.length;i++){
			elements[i].parentElement.setAttribute("class","ant-checkbox");
      elements[i].checked=false;
      newCheckedItems = []; 
      this.setState({checkedItems: newCheckedItems})

      this.props.availabilityEvent([]);
    } 
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
          <span className="clearFilter" onClick={this.handleResetAvailability}>Clear</span>
        </p>
        <div className="workType">
        <CheckboxGroup options={options} defaultValue={this.state.checkedItems} onChange={this.onChange} />
        </div>
      </div>
    );
  }
}
