import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'antd';
const dropDownMenu = (
  <Menu >
    <Menu.Item key="1"><Icon type="user" />Lorem ipsum1</Menu.Item>
    <Menu.Item key="2"><Icon type="user" />Lorem ipsum2</Menu.Item>
    <Menu.Item key="3"><Icon type="user" />Lorem ipsum3</Menu.Item>
    <Menu.Item key="4"><Icon type="user" />Lorem ipsum4</Menu.Item>
  </Menu>
);
const dropDownMenu2 = (
  <Menu >
    <Menu.Item key="1"><Icon type="user" />Profile</Menu.Item>
    <Menu.Item key="2"><Icon type="user" />Change password</Menu.Item>
    <Menu.Item key="3"><Icon type="user" />Settings</Menu.Item>
  </Menu>
);
export default class HeaderNav extends Component{
	render(){
		return(
		<Menu
      theme="white"
      mode="horizontal"
    	className="headerNav"
    >
        <Menu.Item key="1">HOW IT WORKS</Menu.Item>
        <Dropdown overlay={dropDownMenu}>
          <span> BROWSE <Icon type="down" /></span> 
        </Dropdown>
        <Menu.Item key="3">SEARCH</Menu.Item>
        <Dropdown overlay={dropDownMenu2}>
          <span> My Account <Icon type="down" /></span> 
        </Dropdown>
      </Menu>
		 
		);
	}
}