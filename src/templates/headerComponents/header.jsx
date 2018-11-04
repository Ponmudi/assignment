import React, { Component } from 'react';
import HeaderNav from './headerNav.jsx'
import { Layout } from 'antd';
const { Header } = Layout;
export default class HeaderSection extends Component{
	render(){
		return(
			<Header>
				<img src="images/company-logo-header.jpg" alt="Hubstaff Talent" className="logo" />
				<HeaderNav />
			</Header>
		);
	}
}