import React, { useState } from "react";
import "./PostJob.css";

function PostJob() {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handlePost = () => {
    const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    jobs.push(job);
    localStorage.setItem("jobs", JSON.stringify(jobs));
    alert("Job posted successfully!");
    setJob({ title: "", company: "", location: "", salary: "", description: "" });
  };

  return (
    <div className="post-job-container">
      <div className="overlay">
        <div className="form-container">
          <h2 className="text-center fw-bold mb-4">Post a Job</h2>
          <div className="card p-4 shadow-lg border-0 rounded">
            <div className="input-group mb-3">
              <span className="input-group-text"><i className="fas fa-briefcase"></i></span>
              <input
                className="form-control"
                name="title"
                placeholder="Job Title"
                value={job.title}
                onChange={handleChange}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text"><i className="fas fa-building"></i></span>
              <input
                className="form-control"
                name="company"
                placeholder="Company"
                value={job.company}
                onChange={handleChange}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text"><i className="fas fa-map-marker-alt"></i></span>
              <input
                className="form-control"
                name="location"
                placeholder="Location"
                value={job.location}
                onChange={handleChange}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text"><i className="fas fa-dollar-sign"></i></span>
              <input
                className="form-control"
                name="salary"
                placeholder="Salary"
                value={job.salary}
                onChange={handleChange}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text"><i className="fas fa-file-alt"></i></span>
              <textarea
                className="form-control"
                name="description"
                placeholder="Job Description"
                value={job.description}
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-primary btn-lg w-100" onClick={handlePost}>
              <i className="fas fa-paper-plane"></i> Post Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostJob;

