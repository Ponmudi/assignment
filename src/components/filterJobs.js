import jobList from '../data/jobs.json';

export default function filterJobs(searchText) {
  return jobList
    .filter(jobs => {
      if (jobs.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (jobs.desciption.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (jobs.location.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (jobs.requiredSkills.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      return false;
    })
}