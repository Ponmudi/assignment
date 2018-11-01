import React, { Component } from "react";
import PropTypes from "prop-types";

import JobResultRow from "./JobResultRow";
import { Select } from 'antd';
const Option = Select.Option;

class JobResults extends Component {

  handleChange = (value) => {
    this.props.sortBy(value)
  }

  render() {
    return (
      <div className="component-job-results">
        <div className="job-results-top">
          <div className="countResults">RESULTS ({this.props.jobData.length})</div>
          <div className="sortBy">Sort by 
          <Select defaultValue="Relevance" style={{ width: 120 }} onChange={this.handleChange} >
            <Option value="relevance">Relevance</Option>
            <Option value="lowtohigh">Price:low to high</Option>
            <Option value="hightolow">Price:high to low</Option>
          </Select>
        </div>
        </div>
        {this.props.jobData.map(jobData => (
          <JobResultRow key={jobData.id} {...jobData} />
        ))}
      </div>
    );
  }
}
JobResults.propTypes = {
  jobData: PropTypes.array
};
export default JobResults;
