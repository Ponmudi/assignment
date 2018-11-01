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

  handleSortBy = selectedVal => {
    let sortedResults;
    if(selectedVal === 'lowtohigh')
      sortedResults = this.state.filteredResults.sort(function(a, b){return a.salarymin - b.salarymin});
    else 
      sortedResults = this.state.filteredResults.sort(function(a, b){return b.salarymin - a.salarymin});
    
    this.setState({
      filteredResults: sortedResults
    });

    // this.setState({
    //   filteredResults: filterJobs(event.target.value)
    // });
  }

  render() {
    return (
      <div className="App">
        <SearchInput textChange={this.handleSearchChange} />
        <JobResults sortBy={this.handleSortBy} jobData={this.state.filteredResults} />
      </div>
    );
  }
}

export default App;
