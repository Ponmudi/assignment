import React, { Component } from "react";
import PropTypes from "prop-types";
import { Divider, Icon } from "antd";

class JobResultsRow extends Component {
  finalstyles() {
    const staticJobTypes = ["Full Time", "Part Time", "Hourly"];
    const chooseStyles = staticJobTypes.filter(
      style => style === this.props.jobType
    );
    let finalStyles = "availability ";
    switch (chooseStyles[0]) {
      case "Full Time":
        finalStyles += "blue";
        break;
      case "Part Time":
        finalStyles += "green";
        break;
      case "Hourly":
        finalStyles += "orange";
        break;
      default:
        finalStyles += "blue";
    }
    return finalStyles;
  }

  render() {
    const {
      title,
      location,
      desciption,
      requiredSkills,
      salarymin,
      jobType
    } = this.props;

    let skills = requiredSkills.split(",");

    let finalSkills = skills.map((skill, index) => (
      <li key={index}>{skill.trim()}</li>
    ));

    return (
      <div className="job-container">
        <div className="left">
          <div className="title">
            {title}
            <span className={this.finalstyles()}>{jobType}</span>
          </div>
          <div>
            <Icon type="environment" theme="twoTone" twoToneColor="#56d48f" />{" "}
            {location}
          </div>
          <p className="info">{desciption}</p>
          <ul className="skills">{finalSkills}</ul>
        </div>
        <div className="right">${salarymin}</div>
        <Divider />
      </div>
    );
  }
}

JobResultsRow.propTypes = {
  title: PropTypes.string,
  desciption: PropTypes.string
};
export default JobResultsRow;
