import { useState, useEffect } from "react";

function App() {
  const [note, setNote] = useState("");

  useEffect(() => {
    // Load saved note from localStorage
    const savedNote = localStorage.getItem("notepad");
    if (savedNote) {
      setNote(savedNote);
    }
  }, []);

  useEffect(() => {
    // Save note to localStorage
    localStorage.setItem("notepad", note);
  }, [note]);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>📝 Notepad</h1>
      <textarea
        style={styles.textarea}
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Start typing..."
      />
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "20px" },
  header: { fontSize: "24px" },
  textarea: {
    width: "90%",
    height: "300px",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
  },
};

export default App;
