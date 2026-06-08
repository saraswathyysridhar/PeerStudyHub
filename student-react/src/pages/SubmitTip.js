import { useState } from "react";

function SubmitTip() {
  const [topic, setTopic] = useState("");
  const [text, setText] = useState("");

  const submitTip = async () => {
    const response = await fetch("http://localhost:5000/contribution", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic, text }),
    });

    const data = await response.json();
    alert(data.message);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Submit Tip</h2>

      <input
        type="text"
        placeholder="Topic"
        onChange={(e) => setTopic(e.target.value)}
        style={styles.input}
      />

      <textarea
        placeholder="Tip"
        onChange={(e) => setText(e.target.value)}
        style={styles.textarea}
      />

      <button onClick={submitTip} style={styles.button}>Submit</button>
    </div>
  );
}

export default SubmitTip;

// ---- Styles ----
const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "30px",
    backgroundColor: "#8db1d4",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily:  'Geneva',
  },
  title: {
    color: "#061a2f",
    marginBottom: "25px",
    fontSize: "26px",
      fontFamily:  'Geneva'
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
    resize: "vertical",
  },
  button: {
    width: "100%",
    padding: "12px",
    marginTop: "15px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#022d57",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.2s",
  },
};