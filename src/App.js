import React, { Component } from 'react';
import './App.css';
import SearchInput from "./components/SearchInput";
import JobResults from "./components/JobResults";
import filterJobs from "./components/filterJobs";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredResults: filterJobs(''),
      keywords: '',
      sortBy: ''
    };
  }

  handleSearchChange = searchKeyword => {
    this.setState({
      filteredResults: filterJobs(searchKeyword, null, this.state.sortBy),
      keywords: searchKeyword
    });
  };

  handleSortBy = selectedSortBy => {
    this.setState({
      filteredResults: filterJobs(this.state.keywords, null, selectedSortBy),
      sortBy: selectedSortBy
    });
  }

  render() {
    return (
      <div className="App">
        <SearchInput textChange={this.handleSearchChange}  />
        <JobResults sortBy={this.handleSortBy} jobData={this.state.filteredResults} />
      </div>
    );
  }
}

export default App;
