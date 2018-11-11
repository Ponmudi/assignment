import React, { Component } from "react";
import { Checkbox, Tooltip, Icon } from "antd";

export default class Availability extends Component {

  constructor(props){
		super(props);
		this.state = {
        checkedItems: new Map(),
        checkedAvail: []
  		};
	}

  handleOnChange = (e) => {
      const item = e.target.name;
      const isChecked = e.target.checked;
      let newcheckedAvail = [...this.state.checkedAvail];
      let ftime = "Full Time";
      let ptime = "Part Time";
      if(isChecked) {
				this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
        newcheckedAvail.push(item)
      }else if(!isChecked) {
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
        newcheckedAvail = newcheckedAvail.filter(val => val !== item)
      }

      let finalAvail = [];
      if(newcheckedAvail.length > 0){
        for(let i=0; i< newcheckedAvail.length; i++){
          if(newcheckedAvail[i] === 'fulltime'){
            finalAvail.push(ftime)
          }
          if(newcheckedAvail[i] === 'parttime'){
            finalAvail.push(ptime)
          }
          if(newcheckedAvail[i] === 'hourly'){
            finalAvail.push("Hourly")
          }
        }
      }
      this.setState({checkedAvail: newcheckedAvail})
      this.props.availabilityEvent(finalAvail)
  }
  handleResetAvailability = () => {
    const elements = document.querySelectorAll('.ant-checkbox-checked input');
    for (let i=0;i<elements.length;i++){
      elements[i].parentElement.setAttribute("class","ant-checkbox");
      const elemName=elements[i].getAttribute('name');
      this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(elemName, false) }));
    }
    this.setState({
      checkedAvail: []
    })
    this.props.availabilityEvent([])
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
          <div><Checkbox name="hourly" checked={this.state.checkedItems.get("hourly")} onChange={this.handleOnChange}>Hourly</Checkbox></div>
          <div><Checkbox name="fulltime" checked={this.state.checkedItems.get("fulltime")} onChange={this.handleOnChange}>Full-Time(40hrs/wk)</Checkbox></div>
          <div><Checkbox name="parttime" checked={this.state.checkedItems.get("parttime")} onChange={this.handleOnChange}>Part-Time(20hrs/wk)</Checkbox></div>
        </div>
      </div>
    );
  }
}
