import jobList from '../../resources/jobs.json';

export default function filterJobs(keywordFilters, skillsFilters, checkedValueFilters, jobType, range, location, sortBy) {
  let searchFilters = keywordFilters || [];
  let keySkillsFilters = skillsFilters || [];
  let availabilityFilters = checkedValueFilters || [];
  let jobTypeFilters = jobType || [];
  let minMaxRange = range || [];
  let locationFilters = location || [];

  let finalFilters = [];
  let defaultResults = 0;

  //Find only the duplicate id's in order to display the results(duplicates are the actual matches found)
  if(searchFilters.length > 0 || keySkillsFilters.length > 0 || availabilityFilters.length > 0 || jobTypeFilters.length > 0 || minMaxRange.length > 0 || locationFilters.length > 0){
    let globalFilters = [];
    globalFilters.push(searchFilters);
    globalFilters.push(keySkillsFilters);
    globalFilters.push(availabilityFilters);
    globalFilters.push(jobTypeFilters);
    globalFilters.push(minMaxRange);
    globalFilters.push(locationFilters);

    let availableFilters = globalFilters.filter(val => val.length > 0);
    let exceptFirstFilter = availableFilters.slice(1);

    finalFilters =  availableFilters[0].filter(value1 => {
      return exceptFirstFilter.every(value2 => {
        return value2.includes(value1);
      })
    });
  }else{
    defaultResults = 1;
  }
  
  let finalJobList = jobList;
  let noMatches = 0;
  if(finalFilters.length > 0){ //loop the matched id's with the Json data and fetch the matches)
    finalJobList = jobList.filter(jobs => finalFilters.some(finalVal => jobs.id === finalVal))
  }else{
    if(defaultResults === 1){
      noMatches = 0; //Show default results
    }else{
      noMatches = 1; //No matches found
    }
  }
  //Sort by
  if(sortBy){
    if(sortBy === 'lowtohigh')
      finalJobList = finalJobList.sort(function(a, b){return a.salarymin - b.salarymin});
    if(sortBy === 'hightolow')
      finalJobList = finalJobList.sort(function(a, b){return b.salarymin - a.salarymin});
    if(sortBy === 'relevance')
      finalJobList = finalJobList.sort(function(a, b){return a.id - b.id});
  }
  
  //No matches found hence make final result as empty
  if(noMatches === 1){
    finalJobList = [];
  }
  
  return finalJobList;
}