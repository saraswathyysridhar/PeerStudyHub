// import { useEffect, useState } from "react";

// function SubjectPage() {

//   const [subjects, setSubjects] = useState([]);

//   useEffect(() => {

//     fetch("http://localhost:5000/subjects")
//       .then(res => res.json())
//       .then(data => setSubjects(data))
//       .catch(err => console.log(err));

//   }, []);

//   return (

//     <div>

//       <h2>Subjects</h2>

//       {subjects.length === 0 ? (
//         <p>No subjects available</p>
//       ) : (
//         subjects.map((s) => (

//           <div key={s.id}>

//             <h3>{s.subject}</h3>

//             {s.topics && (
//               <ul>
//                 {s.topics.map((t, index) => (
//                   <li key={index}>{t}</li>
//                 ))}
//               </ul>
//             )}

//           </div>

//         ))
//       )}

//     </div>

//   );
// }

// export default SubjectPage;
import { useEffect, useState } from "react";

function SubjectPage() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch("https://peerstudyhub-backend.onrender.com/subjects")
      .then(res => res.json())
      .then(data => setSubjects(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Subjects</h2>

      {subjects.length === 0 ? (
        <p>No subjects available</p>
      ) : (
        subjects.map((s) => (
          <div key={s.id}>
            <h3>{s.subject}</h3>

            {s.topics && (
              <ul>
                {s.topics.map((t, index) => (
                  <li key={index}>{t}</li>
                ))}
              </ul>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default SubjectPage;