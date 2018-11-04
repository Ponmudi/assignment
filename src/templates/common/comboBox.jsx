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
	renderSelectModal=(mode, optionVal, placeholderProps) => {
		return(
			<Select mode={mode} placeholder={placeholderProps}  onChange={this.handleChange}>
		      	{this.renderOptions(optionVal)}
		    </Select>
	    )
	}
	render(){
		const {mode, title, optionProps, placeholderProps}=this.props;
		
		return(
		<div className="container">
			<p>
				<b>{title + " "}{title === "Job type"?<Tooltip title={title}><Icon type="info-circle" style={{ fontSize: '18px' }} theme="outlined" /> </Tooltip>:""}</b>
				<span className='clearFilter'>Clear</span>
			</p>
			{this.renderSelectModal(mode, optionProps, placeholderProps)}
			
  		</div>
		);
	}
}

