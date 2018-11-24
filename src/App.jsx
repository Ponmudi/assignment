import React, { Component } from 'react';
import Header from './templates/headerComponents/header.jsx'
import LeftSection from './templates/leftSection/leftSection.jsx'
import RightSection from './templates/rightSection/rightSection.jsx'
import Footer from './templates/footerComponents/footer.jsx'
import Main from './templates/mainComponents/main.jsx'
import SearchInput from "./components/main/searchInput.jsx";
import filterJobs from "./components/main/filterJobs.jsx";
import jobList from './resources/jobs.json';

import './App.scss';
import { Layout, Row, Col } from 'antd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredResults: filterJobs(),
      sortBy: '',
      skillsFilters: [],
      keywordFilters: [],
      jobTypeFilters: [],
      availabilityFilters: [],
      rangeFilters: [],
      locationFilters: []
    };
  }

  handleClearAll = () => {
    this.setState({
      filteredResults: filterJobs()
    });
  }

  handleSearchChange = searchKeyword => {
      let keywordFilters = [...this.state.keywordFilters];
      if(keywordFilters.length > 0 || searchKeyword === ''){
        keywordFilters = [];
      }

      if(searchKeyword !== ''){
        searchKeyword = searchKeyword.replace(/\s/g, '').split(',');
        jobList.forEach((jobs) => {
          for(let i = 0; i < searchKeyword.length; i++){
            if(jobs.requiredSkills.toLowerCase().includes(searchKeyword[i].toLowerCase()) || 
              jobs.title.toLowerCase().includes(searchKeyword[i].toLowerCase()) || 
              jobs.desciption.toLowerCase().includes(searchKeyword[i].toLowerCase()) || 
              jobs.location.toLowerCase().includes(searchKeyword[i].toLowerCase())
            ){
              keywordFilters.push(jobs.id)
              return false
            }
          }
        })
        //if user's selected option doesn't match with json data
        if(keywordFilters.length === 0){
          keywordFilters.push(0)
        }
      } 
    
    this.setState({
      filteredResults: filterJobs(keywordFilters, this.state.skillsFilters, this.state.availabilityFilters, this.state.jobTypeFilters, this.state.rangeFilters, this.state.locationFilters, this.state.sortBy),
      keywordFilters: keywordFilters
    });
  };

  handleSortBy = selectedSortBy => {
    this.setState({
      filteredResults: filterJobs(this.state.keywordFilters, this.state.skillsFilters, this.state.availabilityFilters, this.state.jobTypeFilters, this.state.rangeFilters, this.state.locationFilters, selectedSortBy),
      sortBy: selectedSortBy
    });
  }

  handleSkillsFilter = selectedSkills => {
      let newSkillsFilters = [...this.state.skillsFilters];
      
      if(newSkillsFilters.length > 0){
        newSkillsFilters = [];
      }
      if(selectedSkills.length > 0){
        jobList.forEach((jobs) => {
          for(let i = 0; i < selectedSkills.length; i++){
            if(jobs.requiredSkills.includes(selectedSkills[i])){
                if(newSkillsFilters.includes(jobs.id) === false)
                newSkillsFilters.push(jobs.id)
            }
          }
        })
      }
    this.setState({
      filteredResults: filterJobs(this.state.keywordFilters, newSkillsFilters, this.state.availabilityFilters, this.state.jobTypeFilters, this.state.rangeFilters, this.state.locationFilters, this.state.sortBy),
      skillsFilters: newSkillsFilters
    });
  }

  handleAvailabilityFilter = availability => {
    let newAvailabilityFilters = [...this.state.availabilityFilters];
    if(newAvailabilityFilters.length > 0){
      newAvailabilityFilters = [];
    }
    if(availability.length > 0){
      jobList.forEach((jobs) => {
        for(let i = 0; i < availability.length; i++){
          if(jobs.jobType.includes(availability[i])){
            if(newAvailabilityFilters.includes(jobs.id) === false)
            newAvailabilityFilters.push(jobs.id)
          }
        }
      })
      //if user's selected option doesn't match with json data
      if(newAvailabilityFilters.length === 0){
        newAvailabilityFilters.push(0)
      }
    }
    
  this.setState({
    filteredResults: filterJobs(this.state.keywordFilters, this.state.skillsFilters, newAvailabilityFilters, this.state.jobTypeFilters, this.state.rangeFilters, this.state.locationFilters, this.state.sortBy),
    availabilityFilters: newAvailabilityFilters
  });
}

handleOnChangeRangeFilter = rangevalues => {
  let newRangeFilters = [...this.state.rangeFilters];

  if(newRangeFilters.length > 0){
    newRangeFilters = [];
  }
  if(rangevalues.length > 0){
    jobList.forEach((jobs) => {
      for(let i = 0; i < rangevalues.length; i++){
          if(jobs.salarymin > rangevalues[0] && jobs.salarymax < rangevalues[1]){
            newRangeFilters.push(jobs.id)
          }
      }
    })
 
    newRangeFilters = newRangeFilters.reduce(function(acc, el, i, arr) {
      if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); return acc;
    }, []);

    if(newRangeFilters.length === 0){
      newRangeFilters.push(0)
    }

  }
  
  this.setState({
    filteredResults: filterJobs(this.state.keywordFilters, this.state.skillsFilters, this.state.availabilityFilters, this.state.jobTypeFilters, newRangeFilters, this.state.locationFilters, this.state.sortBy),
    rangeFilters: newRangeFilters
  });
}

  handleJobTypeFilter = selectedJobType => {
      let newJobTypeFilters = [...this.state.jobTypeFilters];

      if(newJobTypeFilters.length > 0){
        newJobTypeFilters = [];
      }
      if(selectedJobType){
        jobList.forEach((jobs) => {
          for(let i = 0; i < selectedJobType.length; i++){
            if(jobs.title.includes(selectedJobType[i])){
              newJobTypeFilters.push(jobs.id)
            }
          }
        })
      }
    this.setState({
      filteredResults: filterJobs(this.state.keywordFilters, this.state.skillsFilters, this.state.availabilityFilters, newJobTypeFilters, this.state.rangeFilters, this.state.locationFilters, this.state.sortBy),
      jobTypeFilters: newJobTypeFilters
    });
  }

  handleLocationFilter = selectedLocation => {
    let newLocationFilters = [...this.state.locationFilters];

    if(newLocationFilters.length > 0){
      newLocationFilters = [];
    }
    if(selectedLocation){
      jobList.forEach((jobs) => {
        for(let i = 0; i < selectedLocation.length; i++){
          if(jobs.location.includes(selectedLocation[i])){
            newLocationFilters.push(jobs.id)
          }
        }
      })
    }
    this.setState({
      filteredResults: filterJobs(this.state.keywordFilters, this.state.skillsFilters, this.state.availabilityFilters, this.state.jobTypeFilters, this.state.rangeFilters, newLocationFilters, this.state.sortBy),
      locationFilters: newLocationFilters
    });
}

  render() {
    return (
      <Layout>
      <Header />
      <Layout className='mainContainer'>
      <SearchInput textChange={this.handleSearchChange}  />
         <Row>
            <Col xs={24} sm={24} md={6} lg={6} xl={6} className='leftContainer' >
              <LeftSection 
                skillsFilter={this.handleSkillsFilter} 
                jobTypeFilter={this.handleJobTypeFilter} 
                experienceFilter={this.handleExperienceFilter} 
                availabilityFilter={this.handleAvailabilityFilter} 
                rangeFilter={this.handleOnChangeRangeFilter}
                locationFilter={this.handleLocationFilter}
                clearAllFilters={this.handleClearAll}
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} className='middleContainer' >
              <Main sortBy={this.handleSortBy} jobData={this.state.filteredResults} />
            </Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6} className='rightContainer' >
              <RightSection />
            </Col>
         </Row>
      </Layout>
      <Footer />
    </Layout>
    );
  }
}

export default App