import jobList from '../data/jobs.json';

export default function filterJobs(keywordText) {
  const finalJobList = jobList.filter(jobs => {
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
  
  return finalJobList;
}