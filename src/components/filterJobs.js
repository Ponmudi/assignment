import jobList from '../data/jobs.json';

export default function filterJobs(keywordText, filter, sort) {
  let filters = filter || null;
  let sortBy = sort || null;
  
  let finalJobList = jobList.filter(jobs => {
    if (jobs.title.toLowerCase().includes(keywordText.toLowerCase())) {
      return true;
    }
    if (jobs.desciption.toLowerCase().includes(keywordText.toLowerCase())) {
      return true;
    }
    if (jobs.location.toLowerCase().includes(keywordText.toLowerCase())) {
      return true;
    }
    if (jobs.requiredSkills.toLowerCase().includes(keywordText.toLowerCase())) {
      return true;
    }
    return false;
});

  if(sortBy !== null){
    if(sortBy === 'lowtohigh')
      finalJobList = finalJobList.sort(function(a, b){return a.salarymin - b.salarymin});
    if(sortBy === 'hightolow')
      finalJobList = finalJobList.sort(function(a, b){return b.salarymin - a.salarymin});
  }
  
  return finalJobList;
}