import React, { Component } from 'react';
import FooterNav from './footerNav.jsx'
import { Layout,Row,Col } from 'antd';
const {Footer } = Layout;
export default class FooterComponent extends Component{
	render(){
		return(
			<Footer>
			<Row>
				<Col xs={24} sm={24} md={4} lg={6} xl={6}  ><img src="images/dark-logo-footer.jpg" alt="Hubstaff Talent" className="logo" /></Col>
				<Col xs={24} sm={24} md={20} lg={18} xl={18}  ><FooterNav /></Col>
         	</Row>
			</Footer>
		);
	}
}