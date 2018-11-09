import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import JobResultRow from "./jobResultRow.jsx";
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
           
           {this.props.jobData.length > 0 ?
              <Fragment>
                <div className="countResults">RESULTS ({this.props.jobData.length})</div>
                <div className="sortBy">Sort by 
                <Select defaultValue="Relevance" style={{ width: 160 }} onChange={this.handleChange} >
                  <Option value="relevance">Relevance</Option>
                  <Option value="lowtohigh">Lowest Price</Option>
                  <Option value="hightolow">Highest Price</Option>
                </Select>
              </div>
            </Fragment>
            : <div className="noResults"><h4>SORRY...NO PROFILES FOUND</h4></div>
          }
          
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
