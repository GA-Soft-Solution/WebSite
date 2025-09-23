import { useState, useEffect } from "react";
import jobsData from "../data/jobsData.js"; // use JS module instead of JSON

export const useJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Load static jobs data
      setJobs(jobsData.jobs || []);
      setError(null);

      // If you later fetch from an API:
      // fetch("/api/jobs")
      //   .then((res) => res.json())
      //   .then((data) => setJobs(data))
      //   .catch((err) => setError("Failed to fetch jobs"));
    } catch (err) {
      setError("Failed to load jobs data");
      console.error(err);
    }
  }, []);

  // Optionally: get a job by ID
  const getJobById = (id) => jobs.find((job) => job.id === id);

  return { jobs, error, getJobById };
};
