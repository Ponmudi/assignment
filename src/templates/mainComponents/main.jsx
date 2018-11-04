import React, { Component } from 'react';
import JobResults from "../../components/main/jobResults.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <JobResults sortBy={this.props.sortBy} jobData={this.props.jobData} />
      </div>
    );
  }
}

export default App;
