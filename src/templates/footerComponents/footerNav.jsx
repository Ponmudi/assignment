import React, { Component } from "react";
import { Row, Col, Icon } from "antd";

export default class FooterNav extends Component {
  render() {
    return (
      <Row className="footerNav">
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <ul>
            <li className="title">TALENT</li>
            <li>How it works</li>
            <li>Why we're free</li>
            <li>Agencies</li>
          </ul>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <ul>
            <li className="title">HUBSTAFF</li>
            <li>About</li>
            <li>Time tracking</li>
            <li>Developer</li>
            <li>Resources</li>
          </ul>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <ul>
            <li className="title">SUPPORT</li>
            <li>Help center</li>
            <li>Blog</li>
            <li>FAQ</li>
            <li>Email us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <ul className="socialIcons">
            <li className="title">SOCIAL</li>
            <li className="icons">
              <Icon
                type="twitter"
                theme="outlined"
                style={{ fontSize: "18px" }}
              />
              <Icon
                type="facebook"
                theme="outlined"
                style={{ fontSize: "18px" }}
              />
              <Icon
                type="instagram"
                theme="outlined"
                style={{ fontSize: "18px" }}
              />
            </li>
          </ul>
        </Col>
      </Row>
    );
  }
}
