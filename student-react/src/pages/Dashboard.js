// import { useEffect, useState } from "react";

// function Dashboard() {
//   const [subjects, setSubjects] = useState([]);
//   const [view, setView] = useState("dashboard"); // dashboard / pending / approved
//   const [pendingTips, setPendingTips] = useState([]);
//   const [approvedTips, setApprovedTips] = useState([]);

//   // Fetch subjects
//   useEffect(() => {
//     fetch("http://localhost:5000/subjects")
//       .then(res => res.json())
//       .then(data => setSubjects(data))
//       .catch(err => console.log(err));
//   }, []);

//   // Fetch pending tips
//   useEffect(() => {
//     if (view === "pending") {
//       fetch("http://localhost:5000/pending")
//         .then(res => res.json())
//         .then(data => setPendingTips(data.filter(tip => tip !== null)))
//         .catch(err => console.log(err));
//     }
//   }, [view]);

//   // Fetch approved tips
//   useEffect(() => {
//     if (view === "approved") {
//       fetch("http://localhost:5000/approved")
//         .then(res => res.json())
//         .then(data => setApprovedTips(data.filter(tip => tip !== null)))
//         .catch(err => console.log(err));
//     }
//   }, [view]);

//   // --- Render ---
//   if (view === "pending") {
//     return (
//       <div style={styles.container}>
//         <h2 style={styles.title}>Pending Tips</h2>
//         <button onClick={() => setView("dashboard")} style={styles.backButton}>Back</button>

//         {pendingTips.length === 0 ? (
//           <p style={styles.emptyState}>No pending tips</p>
//         ) : (
//           <table style={styles.table}>
//             <thead>
//               <tr>
//                 <th>Topic</th>
//                 <th>Tip</th>
//               </tr>
//             </thead>
//             <tbody>
//               {pendingTips.map(tip => (
//                 <tr key={tip.id}>
//                   <td>{tip.topic}</td>
//                   <td>{tip.text}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     );
//   }

//   if (view === "approved") {
//     return (
//       <div style={styles.container}>
//         <h2 style={styles.title}>Approved Tips</h2>
//         <button onClick={() => setView("dashboard")} style={styles.backButton}>Back</button>

//         {approvedTips.length === 0 ? (
//           <p style={styles.emptyState}>No approved tips</p>
//         ) : (
//           <table style={styles.table}>
//             <thead>
//               <tr>
//                 <th>Topic</th>
//                 <th>Tip</th>
//               </tr>
//             </thead>
//             <tbody>
//               {approvedTips.map(tip => (
//                 <tr key={tip.id}>
//                   <td>{tip.topic}</td>
//                   <td>{tip.text}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     );
//   }

//   // Default dashboard view
//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Student Dashboard</h2>

//       <div style={styles.buttonGroup}>
//         <button onClick={() => setView("pending")} style={styles.button}>View Pending Tips</button>
//         <button onClick={() => setView("approved")} style={styles.button}>View Approved Tips</button>
//       </div>

//       {subjects.length === 0 ? (
//         <p style={styles.emptyState}>No subjects found</p>
//       ) : (
//         <div style={styles.subjectsContainer}>
//           {subjects.map(subject => (
//             <div key={subject.id} style={styles.subjectCard}>
//               <h3>{subject.subject}</h3>
//               <p>Semester: {subject.semester}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Dashboard;

// // --- Styles ---
// const styles = {
//   container: {
//     maxWidth: "900px",
//     margin: "40px auto",
//     padding: "20px",
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     textAlign: "center",
   
//     borderRadius: "12px",
//     boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
//     backgroundColor:"#9dc9f5"
//   },
//   title: {
//     color: "#020e1c",
//     marginBottom: "20px",
//     fontSize: "28px",
//      fontFamily:'Geneva'
//   },
//   buttonGroup: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "20px",
//     marginBottom: "30px"
//   },
//   button: {
//     padding: "10px 20px",
//     borderRadius: "8px",
//     border: "none",
//     backgroundColor: "#0c3f76",
//     color: "white",
//     fontSize: "16px",
//     cursor: "pointer",
//   },
//   backButton: {
//     padding: "6px 12px",
//     borderRadius: "6px",
//     border: "none",
//     backgroundColor: "#6c757d",
//     color: "white",
//     fontSize: "14px",
//     cursor: "pointer",
//     marginBottom: "20px"
//   },
//   emptyState: {
//     color: "#666",
//     fontSize: "16px",
//     marginTop: "20px"
//   },
//   subjectsContainer: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "20px",
//     justifyContent: "center"
//   },
//   subjectCard: {
//     width: "250px",
//     padding: "15px",
//     borderRadius: "10px",
//     background: "#ffffff",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//     textAlign: "left",
//      backgroundColor: "#d7e5f5",
//   },
//   table: {
//     width: "100%",
//     borderCollapse: "collapse",
//     marginTop: "20px"
//   },
//   tableCell: {
//     border: "1px solid #891515",
//     padding: "8px",
//   }
// };
import { useEffect, useState } from "react";

function Dashboard() {
  const [subjects, setSubjects] = useState([]);
  const [view, setView] = useState("dashboard");
  const [pendingTips, setPendingTips] = useState([]);
  const [approvedTips, setApprovedTips] = useState([]);

  // Fetch subjects
  useEffect(() => {
    fetch("https://peerstudyhub-backend.onrender.com/subjects")
      .then(res => res.json())
      .then(data => setSubjects(data))
      .catch(err => console.log(err));
  }, []);

  // Fetch pending tips
  useEffect(() => {
    if (view === "pending") {
      fetch("https://peerstudyhub-backend.onrender.com/pending")
        .then(res => res.json())
        .then(data => setPendingTips(data.filter(tip => tip !== null)))
        .catch(err => console.log(err));
    }
  }, [view]);

  // Fetch approved tips
  useEffect(() => {
    if (view === "approved") {
      fetch("https://peerstudyhub-backend.onrender.com/approved")
        .then(res => res.json())
        .then(data => setApprovedTips(data.filter(tip => tip !== null)))
        .catch(err => console.log(err));
    }
  }, [view]);

  // Pending Tips View
  if (view === "pending") {
    return (
      <div style={styles.container}>
        <h2 style={styles.title}>Pending Tips</h2>
        <button
          onClick={() => setView("dashboard")}
          style={styles.backButton}
        >
          Back
        </button>

        {pendingTips.length === 0 ? (
          <p style={styles.emptyState}>No pending tips</p>
        ) : (
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Topic</th>
                <th>Tip</th>
              </tr>
            </thead>
            <tbody>
              {pendingTips.map(tip => (
                <tr key={tip.id}>
                  <td>{tip.topic}</td>
                  <td>{tip.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }

  // Approved Tips View
  if (view === "approved") {
    return (
      <div style={styles.container}>
        <h2 style={styles.title}>Approved Tips</h2>
        <button
          onClick={() => setView("dashboard")}
          style={styles.backButton}
        >
          Back
        </button>

        {approvedTips.length === 0 ? (
          <p style={styles.emptyState}>No approved tips</p>
        ) : (
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Topic</th>
                <th>Tip</th>
              </tr>
            </thead>
            <tbody>
              {approvedTips.map(tip => (
                <tr key={tip.id}>
                  <td>{tip.topic}</td>
                  <td>{tip.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }

  // Dashboard View
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Student Dashboard</h2>

      <div style={styles.buttonGroup}>
        <button
          onClick={() => setView("pending")}
          style={styles.button}
        >
          View Pending Tips
        </button>

        <button
          onClick={() => setView("approved")}
          style={styles.button}
        >
          View Approved Tips
        </button>
      </div>

      {subjects.length === 0 ? (
        <p style={styles.emptyState}>No subjects found</p>
      ) : (
        <div style={styles.subjectsContainer}>
          {subjects.map(subject => (
            <div key={subject.id} style={styles.subjectCard}>
              <h3>{subject.subject}</h3>
              <p>Semester: {subject.semester}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;

// --- Styles ---
const styles = {
  container: {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    backgroundColor: "#9dc9f5",
  },

  title: {
    color: "#020e1c",
    marginBottom: "20px",
    fontSize: "28px",
    fontFamily: "Geneva",
  },

  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "30px",
  },

  button: {
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#0c3f76",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },

  backButton: {
    padding: "6px 12px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#6c757d",
    color: "white",
    fontSize: "14px",
    cursor: "pointer",
    marginBottom: "20px",
  },

  emptyState: {
    color: "#666",
    fontSize: "16px",
    marginTop: "20px",
  },

  subjectsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },

  subjectCard: {
    width: "250px",
    padding: "15px",
    borderRadius: "10px",
    background: "#d7e5f5",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "left",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },

  tableCell: {
    border: "1px solid #891515",
    padding: "8px",
  },
};