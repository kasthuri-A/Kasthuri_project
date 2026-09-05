import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [name, setName] = useState("");
  const [type, setType] = useState("Student");
  const [role, setRole] = useState("");

  const [currentSkills, setCurrentSkills] = useState([]);
  const [requiredSkills, setRequiredSkills] = useState([]);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "SQL",
    "Python"
  ];

  const handleCurrentSkill = (skill) => {
    if (currentSkills.includes(skill)) {
      setCurrentSkills(currentSkills.filter((item) => item !== skill));
    } else {
      setCurrentSkills([...currentSkills, skill]);
    }
  };

  const handleRequiredSkill = (skill) => {
    if (requiredSkills.includes(skill)) {
      setRequiredSkills(
        requiredSkills.filter((item) => item !== skill)
      );
    } else {
      setRequiredSkills([...requiredSkills, skill]);
    }
  };

  const handleAnalyze = () => {
    if (name === "" || role === "") {
      alert("Please fill all details");
      return;
    }

    alert("Skill analysis started!");
  };

  return (
    <div className="dashboard">

      <div className="header">
        <h1>Skill Gap Analyzer</h1>
        <p>Analyze your skills and identify areas for improvement</p>
      </div>

      <div className="form-box">

        <h2>Enter Your Details</h2>

        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>Student</option>
          <option>Employee</option>
        </select>

        <label>Course / Job Role</label>
        <input
          type="text"
          placeholder="Example: Frontend Developer"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <h2>Current Skills</h2>

        <div className="skills">
          {skills.map((skill) => (
            <label className="skill" key={skill}>
              <input
                type="checkbox"
                checked={currentSkills.includes(skill)}
                onChange={() => handleCurrentSkill(skill)}
              />
              {skill}
            </label>
          ))}
        </div>

        <h2>Required Skills</h2>

        <div className="skills">
          {skills.map((skill) => (
            <label className="skill" key={skill}>
              <input
                type="checkbox"
                checked={requiredSkills.includes(skill)}
                onChange={() => handleRequiredSkill(skill)}
              />
              {skill}
            </label>
          ))}
        </div>

        <button onClick={handleAnalyze}>
          Analyze Skill Gap
        </button>

      </div>

    </div>
  );
}

export default Dashboard;