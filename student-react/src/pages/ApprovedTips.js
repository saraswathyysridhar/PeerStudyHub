import { useEffect, useState } from "react";

function ApprovedTips() {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/approved")
      .then(res => res.json())
      .then(data => setTips(data.filter(tip => tip !== null))); // remove nulls
  }, []);

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.pageTitle}>Approved Tips</h2>

      {tips.length === 0 && (
        <p style={styles.emptyState}>No approved tips yet</p>
      )}

      <div style={styles.cardsContainer}>
        {tips.map(tip => (
          <div key={tip.id} style={styles.card}>
            <h3 style={styles.cardTitle}>{tip.topic}</h3>
            <p style={styles.cardText}>{tip.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApprovedTips;

// ---- Styles ----
const styles = {
  pageContainer: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
  },
  pageTitle: {
    color: "#007bff",
    marginBottom: "25px",
    fontSize: "28px",
  },
  emptyState: {
    color: "#666",
    fontSize: "18px",
    marginTop: "40px",
  },
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    maxHeight: "70vh",
    overflowY: "auto",
    paddingBottom: "10px",
  },
  card: {
    width: "280px",
    padding: "15px",
    borderRadius: "10px",
    background: "#f8f9fa",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "left",
    flexShrink: 0,
  },
  cardTitle: {
    marginBottom: "10px",
    color: "#333",
  },
  cardText: {
    color: "#555",
    fontSize: "14px",
  },
};