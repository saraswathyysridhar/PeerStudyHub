// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [regno, setRegno] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const login = async () => {
//     const response = await fetch("http://localhost:5000/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ regno, password })
//     });

//     const data = await response.json();

//     if (data.success) {
//       navigate("/dashboard");
//     } else {
//       alert("Invalid login");
//     }
//   };

//   return (
//     <div style={styles.pageContainer}>
//       <h2 style={styles.pageTitle}>Student Login</h2>

//       <input
//         placeholder="Register Number"
//         onChange={(e) => setRegno(e.target.value)}
//         style={styles.inputField}
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//         style={styles.inputField}
//       />

//       <button onClick={login} style={styles.loginButton}>Login</button>
//     </div>
//   );
// }

// export default Login;

// // ---- Styles ----
// const styles = {
//   pageContainer: {
//     maxWidth: "400px",
//     margin: "50px auto",
//     padding: "30px",
//     textAlign: "center",
//     borderRadius: "10px",
//     background: "#f8f9fa",
//     boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//       backgroundColor: "#9dc6f2",
//   },
//   pageTitle: {
//     marginBottom: "25px",
//     color: "#021326",
//     fontSize: "26px",
//      fontFamily:'Geneva'
//   },
//   inputField: {
//     width: "100%",
//     padding: "10px 12px",
//     margin: "10px 0",
//     borderRadius: "6px",
//     border: "1px solid #ccc",
//     fontSize: "14px",
//   },
//   loginButton: {
//     width: "100%",
//     padding: "10px",
//     marginTop: "15px",
//     borderRadius: "6px",
//     border: "none",
//     backgroundColor: "#06192d",
//     color: "white",
//     fontSize: "16px",
//     cursor: "pointer",
//     transition: "0.2s",
//   },
// };
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [regno, setRegno] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const response = await fetch(
        "https://peerstudyhub-backend.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ regno, password }),
        }
      );

      const data = await response.json();

      if (data.success) {
        navigate("/dashboard");
      } else {
        alert("Invalid login");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Unable to connect to server.");
    }
  };

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.pageTitle}>Student Login</h2>

      <input
        placeholder="Register Number"
        value={regno}
        onChange={(e) => setRegno(e.target.value)}
        style={styles.inputField}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.inputField}
      />

      <button onClick={login} style={styles.loginButton}>
        Login
      </button>
    </div>
  );
}

export default Login;

// ---- Styles ----
const styles = {
  pageContainer: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "30px",
    textAlign: "center",
    borderRadius: "10px",
    background: "#f8f9fa",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#9dc6f2",
  },

  pageTitle: {
    marginBottom: "25px",
    color: "#021326",
    fontSize: "26px",
    fontFamily: "Geneva",
  },

  inputField: {
    width: "100%",
    padding: "10px 12px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    boxSizing: "border-box",
  },

  loginButton: {
    width: "100%",
    padding: "10px",
    marginTop: "15px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#06192d",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.2s",
  },
};