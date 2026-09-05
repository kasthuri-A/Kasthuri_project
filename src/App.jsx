import React from 'react'
import Login from './Component/Login'
import Dashboard from './Component/Dashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Component/Register'


const App = () => {
  return (
    <div>
    <Login/> 

    <Dashboard/>
    {/* <Register/> 
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </BrowserRouter> */}
    </div>
  )
}

export default App






// import React, { useState, useEffect } from 'react';

// // Backend Server URL (Unga Backend Host & Port-ku ethamadhiri maarikonga)
// const API_BASE_URL = "http://localhost:8080/api";

// export default function SkillGapAnalyzerApp() {
//   const [currentScreen, setCurrentScreen] = useState('dashboard');

//   // Backend Data States
//   const [students, setStudents] = useState([]);
//   const [jobs, setJobs] = useState([]);
//   const [selectedStudentId, setSelectedStudentId] = useState('');
//   const [selectedJobId, setSelectedJobId] = useState('');
//   const [analysisResult, setAnalysisResult] = useState(null);
  
//   // UI Loading & Error States
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Form Input States
//   const [newStudent, setNewStudent] = useState({ name: '', role: '' });
//   const [newStudentSkill, setNewStudentSkill] = useState({ name: '', level: 1 });
//   const [newJob, setNewJob] = useState({ title: '', company: '' });
//   const [newJobSkill, setNewJobSkill] = useState({ name: '', level: 1 });

//   // Page load aagum podhu Students & Jobs data va fetch panna
//   useEffect(() => {
//     fetchStudents();
//     fetchJobs();
//   }, []);

//   // 1. GET: Fetch Students List
//   const fetchStudents = async () => {
//     try {
//       const res = await fetch(`${API_BASE_URL}/students`);
//       if (res.ok) {
//         const data = await res.json();
//         setStudents(data);
//         if (data.length > 0 && !selectedStudentId) setSelectedStudentId(data[0].id);
//       }
//     } catch (err) {
//       console.error("Failed to fetch students", err);
//     }
//   };

//   // 2. GET: Fetch Jobs List
//   const fetchJobs = async () => {
//     try {
//       const res = await fetch(`${API_BASE_URL}/jobs`);
//       if (res.ok) {
//         const data = await res.json();
//         setJobs(data);
//         if (data.length > 0 && !selectedJobId) setSelectedJobId(data[0].id);
//       }
//     } catch (err) {
//       console.error("Failed to fetch jobs", err);
//     }
//   };

//   // 3. POST: Create New Student
//   const handleAddStudent = async (e) => {
//     e.preventDefault();
//     if (!newStudent.name || !newStudent.role) return;

//     try {
//       const res = await fetch(`${API_BASE_URL}/students`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(newStudent)
//       });
//       if (res.ok) {
//         setNewStudent({ name: '', role: '' });
//         fetchStudents(); // Refresh list
//       }
//     } catch (err) {
//       alert("Error adding student!");
//     }
//   };

//   // 4. POST: Add Skill to Student
//   const handleAddSkillToStudent = async (e) => {
//     e.preventDefault();
//     if (!newStudentSkill.name || !selectedStudentId) return;

//     try {
//       const res = await fetch(`${API_BASE_URL}/students/${selectedStudentId}/skills`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name: newStudentSkill.name, level: Number(newStudentSkill.level) })
//       });
//       if (res.ok) {
//         setNewStudentSkill({ name: '', level: 1 });
//         fetchStudents(); // Refresh student data
//       }
//     } catch (err) {
//       alert("Error adding skill!");
//     }
//   };

//   // 5. POST: Create New Job
//   const handleAddJob = async (e) => {
//     e.preventDefault();
//     if (!newJob.title || !newJob.company) return;

//     try {
//       const res = await fetch(`${API_BASE_URL}/jobs`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(newJob)
//       });
//       if (res.ok) {
//         setNewJob({ title: '', company: '' });
//         fetchJobs(); // Refresh list
//       }
//     } catch (err) {
//       alert("Error adding job!");
//     }
//   };

//   // 6. POST: Add Required Skill to Job
//   const handleAddSkillToJob = async (e) => {
//     e.preventDefault();
//     if (!newJobSkill.name || !selectedJobId) return;

//     try {
//       const res = await fetch(`${API_BASE_URL}/jobs/${selectedJobId}/skills`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name: newJobSkill.name, level: Number(newJobSkill.level) })
//       });
//       if (res.ok) {
//         setNewJobSkill({ name: '', level: 1 });
//         fetchJobs(); // Refresh job data
//       }
//     } catch (err) {
//       alert("Error adding job skill!");
//     }
//   };

//   // 7. GET: Calculate & Fetch Skill Gap Analysis (Core API Flow from Docs)
//   const runSkillGapAnalysis = async () => {
//     if (!selectedStudentId || !selectedJobId) {
//       alert("Please select a Student and a Job!");
//       return;
//     }

//     setLoading(true);
//     setError(null);
//     setCurrentScreen('analyzer');

//     try {
//       // Document Endpoint: GET /api/students/{studentId}/jobs/{jobId}/skill-gap
//       const res = await fetch(`${API_BASE_URL}/students/${selectedStudentId}/jobs/${selectedJobId}/skill-gap`);
//       if (!res.ok) throw new Error("Server error in calculating skill gap");
      
//       const data = await res.json();
//       setAnalysisResult(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const currentStudent = students.find(s => s.id === selectedStudentId);
//   const currentJob = jobs.find(j => j.id === selectedJobId);

//   return (
//     <div style={styles.container}>
//       {/* Sidebar Navigation */}
//       <aside style={styles.sidebar}>
//         <h3 style={{ color: '#fff', fontSize: '16px' }}>Skill Gap Analyzer</h3>
//         <nav style={styles.navGroup}>
//           <button style={btnStyle(currentScreen === 'dashboard')} onClick={() => setCurrentScreen('dashboard')}>Dashboard</button>
//           <button style={btnStyle(currentScreen === 'profile')} onClick={() => setCurrentScreen('profile')}>Student Input</button>
//           <button style={btnStyle(currentScreen === 'job')} onClick={() => setCurrentScreen('job')}>Job Input</button>
//           <button style={btnStyle(currentScreen === 'analyzer')} onClick={runSkillGapAnalysis}>Run Gap Analysis</button>
//         </nav>
//       </aside>

//       {/* Main Content Area */}
//       <main style={styles.content}>

//         {/* DASHBOARD */}
//         {currentScreen === 'dashboard' && (
//           <div>
//             <h2>Dashboard Overview</h2>
//             <div style={styles.metricsGrid}>
//               <MetricBox label="Total Students" count={students.length} />
//               <MetricBox label="Total Jobs" count={jobs.length} />
//             </div>
//           </div>
//         )}

//         {/* STUDENT INPUT FORM */}
//         {currentScreen === 'profile' && (
//           <div style={styles.card}>
//             <h2>1. Student Management</h2>
//             <div style={styles.formRow}>
//               <label>Select Active Student: </label>
//               <select value={selectedStudentId} onChange={(e) => setSelectedStudentId(e.target.value)}>
//                 <option value="">-- Select Student --</option>
//                 {students.map(s => <option key={s.id} value={s.id}>{s.name} ({s.role})</option>)}
//               </select>
//             </div>

//             <hr />

//             <h4>Create New Student Profile (API: POST /api/students)</h4>
//             <form onSubmit={handleAddStudent} style={styles.formInline}>
//               <input type="text" placeholder="Student Name" value={newStudent.name} onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })} />
//               <input type="text" placeholder="Target Role" value={newStudent.role} onChange={(e) => setNewStudent({ ...newStudent, role: e.target.value })} />
//               <button style={styles.primaryBtn} type="submit">Save Student</button>
//             </form>

//             <hr />

//             <h4>Add Skill (API: POST /api/students/{'{id}'}/skills)</h4>
//             <form onSubmit={handleAddSkillToStudent} style={styles.formInline}>
//               <input type="text" placeholder="Skill Name" value={newStudentSkill.name} onChange={(e) => setNewStudentSkill({ ...newStudentSkill, name: e.target.value })} />
//               <select value={newStudentSkill.level} onChange={(e) => setNewStudentSkill({ ...newStudentSkill, level: e.target.value })}>
//                 {[1, 2, 3, 4, 5].map(lvl => <option key={lvl} value={lvl}>Level {lvl}</option>)}
//               </select>
//               <button style={styles.primaryBtn} type="submit">+ Add Skill</button>
//             </form>

//             <h4 style={{ marginTop: '20px' }}>Current Skills:</h4>
//             <ul>
//               {currentStudent?.skills?.map((s, idx) => (
//                 <li key={idx}>{s.name} - Level {s.level}/5</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* JOB INPUT FORM */}
//         {currentScreen === 'job' && (
//           <div style={styles.card}>
//             <h2>2. Job Requirements Management</h2>
//             <div style={styles.formRow}>
//               <label>Select Active Job: </label>
//               <select value={selectedJobId} onChange={(e) => setSelectedJobId(e.target.value)}>
//                 <option value="">-- Select Job --</option>
//                 {jobs.map(j => <option key={j.id} value={j.id}>{j.title} ({j.company})</option>)}
//               </select>
//             </div>

//             <hr />

//             <h4>Create New Job Requirements (API: POST /api/jobs)</h4>
//             <form onSubmit={handleAddJob} style={styles.formInline}>
//               <input type="text" placeholder="Job Title" value={newJob.title} onChange={(e) => setNewJob({ ...newJob, title: e.target.value })} />
//               <input type="text" placeholder="Company Name" value={newJob.company} onChange={(e) => setNewJob({ ...newJob, company: e.target.value })} />
//               <button style={styles.primaryBtn} type="submit">Save Job</button>
//             </form>

//             <hr />

//             <h4>Add Required Skill (API: POST /api/jobs/{'{id}'}/skills)</h4>
//             <form onSubmit={handleAddSkillToJob} style={styles.formInline}>
//               <input type="text" placeholder="Required Skill" value={newJobSkill.name} onChange={(e) => setNewJobSkill({ ...newJobSkill, name: e.target.value })} />
//               <select value={newJobSkill.level} onChange={(e) => setNewJobSkill({ ...newJobSkill, level: e.target.value })}>
//                 {[1, 2, 3, 4, 5].map(lvl => <option key={lvl} value={lvl}>Level {lvl}</option>)}
//               </select>
//               <button style={styles.primaryBtn} type="submit">+ Add Skill Requirement</button>
//             </form>

//             <h4 style={{ marginTop: '20px' }}>Required Job Skills:</h4>
//             <ul>
//               {currentJob?.skills?.map((s, idx) => (
//                 <li key={idx}>{s.name} - Required Level {s.level}/5</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* SKILL GAP ANALYZER */}
//         {currentScreen === 'analyzer' && (
//           <div style={styles.card}>
//             <h2>Skill Gap Analysis Result (API Fetch)</h2>
//             {loading && <p>Connecting to Backend API...</p>}
//             {error && <p style={{ color: 'red' }}>Error: {error}</p>}

//             {!loading && !error && analysisResult && (
//               <>
//                 <p><strong>Student Name:</strong> {analysisResult.studentName}</p>
//                 <p><strong>Target Job:</strong> {analysisResult.jobTitle}</p>

//                 <div style={styles.matchBanner}>
//                   <h3>OVERALL MATCH SCORE</h3>
//                   <h1 style={{ margin: 0, fontSize: '36px', color: '#007bff' }}>{analysisResult.overallMatch}%</h1>
//                 </div>

//                 <table style={styles.table}>
//                   <thead>
//                     <tr style={{ background: '#f0f0f0' }}>
//                       <th style={styles.th}>Skill</th>
//                       <th style={styles.th}>Student Level</th>
//                       <th style={styles.th}>Required Level</th>
//                       <th style={styles.th}>Status</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {analysisResult.skills?.map((s, idx) => (
//                       <tr key={idx} style={{ borderBottom: '1px solid #ddd' }}>
//                         <td style={styles.td}>{s.name}</td>
//                         <td style={styles.td}>{s.current}</td>
//                         <td style={styles.td}>{s.required}</td>
//                         <td style={{ ...styles.td, color: s.status === 'MATCHED' || s.status === 'Matched' ? 'green' : 'red', fontWeight: 'bold' }}>
//                           {s.status === 'MATCHED' || s.status === 'Matched' ? '✓ Matched' : `✕ Gap: ${s.gap}`}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </>
//             )}
//           </div>
//         )}

//       </main>
//     </div>
//   );
// }

// // Sub components & Styles
// function MetricBox({ label, count }) {
//   return (
//     <div style={styles.metricCard}>
//       <span style={{ fontSize: '12px', color: '#666' }}>{label}</span>
//       <h2 style={{ margin: '5px 0 0 0' }}>{count}</h2>
//     </div>
//   );
// }

// const btnStyle = (active) => ({
//   background: active ? '#34495e' : 'transparent',
//   color: '#fff',
//   border: 'none',
//   textAlign: 'left',
//   padding: '10px 15px',
//   cursor: 'pointer',
//   borderRadius: '4px',
//   marginBottom: '5px'
// });

// const styles = {
//   container: { display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif', background: '#f4f6f8' },
//   sidebar: { width: '220px', background: '#2c3e50', padding: '20px', display: 'flex', flexDirection: 'column' },
//   navGroup: { display: 'flex', flexDirection: 'column' },
//   content: { flex: 1, padding: '30px' },
//   metricsGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 200px)', gap: '15px', marginBottom: '20px' },
//   metricCard: { background: '#fff', padding: '15px', borderRadius: '6px', border: '1px solid #ddd' },
//   card: { background: '#fff', padding: '20px', borderRadius: '6px', border: '1px solid #ddd', marginBottom: '20px' },
//   formInline: { display: 'flex', gap: '10px', marginBottom: '10px' },
//   formRow: { marginBottom: '10px' },
//   primaryBtn: { background: '#2c3e50', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' },
//   matchBanner: { textAlign: 'center', background: '#eef6fc', border: '1px solid #bce0fd', padding: '15px', margin: '15px 0', borderRadius: '6px' },
//   table: { width: '100%', borderCollapse: 'collapse', marginTop: '10px' },
//   th: { padding: '8px', textAlign: 'left', borderBottom: '2px solid #ddd' },
//   td: { padding: '8px', textAlign: 'left' }
// };