import jobList from '../../resources/jobs.json';

export default function filterJobs(keywordFilters, skillsFilters, checkedValueFilters, jobType, range, sortBy) {
  let searchFilters = keywordFilters || [];
  let keySkillsFilters = skillsFilters || [];
  let availabilityFilters = checkedValueFilters || [];
  let jobTypeFilters = jobType || [];
  let minMaxRange = range || [];
  // console.log("Keywords-->",searchFilters)
  // console.log("Skills-->",keySkillsFilters)
  let filterStatusCount = 0;
  if(searchFilters.length > 0){
    filterStatusCount = filterStatusCount + 1;
  }
  if(keySkillsFilters.length > 0){
    filterStatusCount = filterStatusCount + 1;
  }
  if(availabilityFilters.length > 0){
    filterStatusCount = filterStatusCount + 1;
  }
  if(jobTypeFilters.length > 0){
    filterStatusCount = filterStatusCount + 1;
  }
  if(minMaxRange.length > 0){
    filterStatusCount = filterStatusCount + 1;
  }

  let finalFilters = [...searchFilters, ...keySkillsFilters, ...availabilityFilters, ...jobTypeFilters, ...minMaxRange];

  //console.log("Before duplicates-->",finalFilters)
  
  let duplicates = 0;
  for ( var i = 0; i < finalFilters.length; i++){
    for (var j = i+1; j< finalFilters.length; j++){
      if (finalFilters[i] === finalFilters[j]){
        duplicates = 1;
      }
    }
  }
  //console.log("Filter Status Count-->",filterStatusCount)
  if(duplicates === 1 && filterStatusCount > 1){
    finalFilters = finalFilters.reduce(function(acc, el, i, arr) {
      if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); return acc;
    }, []);
  }

  //console.log("Final ids-->",finalFilters)
  let finalJobList = jobList;
  if(finalFilters.length > 0){
    finalJobList = jobList.filter(jobs => finalFilters.some(finalVal => jobs.id === finalVal))
  }

  if(sortBy){
    if(sortBy === 'lowtohigh')
      finalJobList = finalJobList.sort(function(a, b){return a.salarymin - b.salarymin});
    if(sortBy === 'hightolow')
      finalJobList = finalJobList.sort(function(a, b){return b.salarymin - a.salarymin});
  }
  
  // if(keywordFilters  || finalFilters.length === 0){
  //   finalJobList = [];
  // }
  
  return finalJobList;
}