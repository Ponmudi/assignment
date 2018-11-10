import React, { Component } from 'react';
import { Select,Tooltip,Icon } from 'antd';


const Option = Select.Option;

export default class ComboBox extends Component{
	handleChange = value => {
		if(this.props.title === 'Job type')
			this.props.jobTypeEvent(value)
		if(this.props.title === 'Skills')
			this.props.skillsEvent(value)
		if(this.props.title === 'Experience')
			this.props.experienceEvent(value)
	}
	renderOptions= (optionVal)=> {
	    return optionVal.map((val,key) => (
	      <Option key={key} value={val}>{val}</Option>
	    ));
  	}
	
	handleComboBoxReset = (e) => {
		const comboClear=document.querySelectorAll('.ant-select-selection__clear');
		for(let i=0;i<comboClear.length;i++){
			comboClear[i].click()
		}
		if(this.props.title === 'Skills')
			this.props.skillsEvent([])
		if(this.props.title === 'Job type')
			this.props.jobTypeEvent([])
	}

	render(){
		const {mode, title, optionProps, placeholderProps}=this.props;
		return(
		<div className="container">
			<p>
				<b>{title + " "}{title === "Job type"?<Tooltip title={title}><Icon type="info-circle" style={{ fontSize: '18px' }} theme="outlined" /> </Tooltip> : ""}</b>
				<span className="clearFilter" id={title} onClick={this.handleComboBoxReset}>Clear</span>
			</p>
			
				{mode === "multiple"?
				<Select mode={mode} allowClear placeholder={placeholderProps} onChange={this.handleChange}>
		      	{this.renderOptions(optionProps)}
		    	</Select>
		    	:
			    <Select mode={mode}  allowClear placeholder={placeholderProps}  onChange={this.handleChange}>
			      	{this.renderOptions(optionProps)}
			    </Select>
		}
			
  		</div>
		);
	}
}

