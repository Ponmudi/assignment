import jobList from '../../resources/jobs.json';

export default function filterJobs(keywordFilters, skillsFilters, checkedValueFilters, jobType, range, sortBy) {
  let searchFilters = keywordFilters || [];
  let keySkillsFilters = skillsFilters || [];
  let availabilityFilters = checkedValueFilters || [];
  let jobTypeFilters = jobType || [];
  let minMaxRange = range || [];
  console.log("Keywords-->",searchFilters)
  console.log("Skills-->",keySkillsFilters)

  let finalFilters = [...searchFilters, ...keySkillsFilters, ...availabilityFilters, ...jobTypeFilters, ...minMaxRange];

  console.log("Before duplicates-->",finalFilters)
  
  let duplicates = 0;
  for ( var i = 0; i < finalFilters.length; i++){
    for (var j = i+1; j< finalFilters.length; j++){
      if (finalFilters[i] === finalFilters[j]){
        duplicates = 1;
      }
    }
  }

  if(duplicates === 1 && keywordFilters){
    finalFilters = finalFilters.reduce(function(acc, el, i, arr) {
      if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); return acc;
    }, []);
  }

  console.log("Final ids-->",finalFilters)

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