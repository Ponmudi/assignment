import React, { Component } from 'react';
import './App.css';
import SearchInput from "./components/SearchInput";
import JobResults from "./components/JobResults";
import filterJobs from "./components/filterJobs";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredResults: filterJobs('')
    };
  }

  handleSearchChange = event => {
    this.setState({
      filteredResults: filterJobs(event.target.value)
    });
  };

  render() {
    return (
      <div className="App">
        <SearchInput textChange={this.handleSearchChange} />
        <JobResults jobData={this.state.filteredResults} />
      </div>
    );
  }
}

export default App;
