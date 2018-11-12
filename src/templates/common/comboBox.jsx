import React, { Component } from 'react';
import { Select,Tooltip,Icon } from 'antd';


const Option = Select.Option;

export default class ComboBox extends Component{
	handleChange = value => {
		if(this.props.title === 'Job type')
			this.props.jobTypeEvent(value)
		if(this.props.title === 'Skills')
			this.props.skillsEvent(value)
		if(this.props.title === 'Location')
			this.props.locationEvent(value)
	}
	renderOptions= (optionVal)=> {
	    return optionVal.map((val,key) => (
	      <Option key={key} value={val}>{val}</Option>
	    ));
	}
	
	handleAllComboBoxReset(e){
		var clearAllCombo=document.querySelectorAll('.ant-select-selection__clear');
		for(let i=0;i<clearAllCombo.length;i++){
			clearAllCombo[i].click()
		}
	}
	
	handleComboBoxReset = (e) => {
		const targetFilter= e.target.id;
  		const parentClass ="."+targetFilter;
  		const elem=document.querySelector(parentClass+' .ant-select-selection__clear')
		elem.click();
	}

	render(){
		const {mode, title, optionProps, placeholderProps}=this.props;

		const containerClass = title === "Job type"? 'jobType' : title;

		return(
		<div className={`${containerClass} container`}>
			<p>
				<b>{title + " "}{title === "Job type"?<Tooltip title={title}><Icon type="info-circle" style={{ fontSize: '18px' }} theme="outlined" /> </Tooltip> : ""}</b>
				<span className="clearFilter" id={containerClass} onClick={this.handleComboBoxReset}>Clear</span>
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

