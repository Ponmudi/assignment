import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import JobResultRow from "./JobResultRow";

class JobResults extends PureComponent {
  render() {
    return (
      <div className="component-job-results">
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
