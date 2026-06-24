// const express = require("express");
// const cors = require("cors");
// const fs = require("fs");

// const app = express();

// app.use(cors());
// app.use(express.json());

// const PORT = 5000;

// app.listen(PORT, () => {
//   console.log("Server running on port 5000");
// });


// // LOGIN API
// app.post("/login", (req, res) => {

//   const { regno, password } = req.body;

//   const users = JSON.parse(fs.readFileSync("users.json"));

//   const user = users.find(
//     u => u.regno === regno && u.password === password
//   );

//   if (user) {
//     res.json({
//       success: true,
//       role: user.role
//     });
//   } else {
//     res.json({
//       success: false
//     });
//   }

// });


// // GET SUBJECTS
// app.get("/subjects", (req, res) => {

//   const subjects = JSON.parse(fs.readFileSync("subjects.json"));

//   res.json(subjects);

// });


// // ADD SUBJECT (Angular faculty)
// app.post("/addSubject", (req, res) => {

//   const { semester, subject } = req.body;

//   let subjects = JSON.parse(fs.readFileSync("subjects.json"));

//   const newSubject = {
//     id: Date.now(),
//     semester,
//     subject,
//     topics: []
//   };

//   subjects.push(newSubject);

//   fs.writeFileSync("subjects.json", JSON.stringify(subjects, null, 2));

//   res.json({ message: "Subject added" });

// });


// // ADD TOPIC
// app.post("/addTopic", (req, res) => {

//   const { subjectId, topic } = req.body;

//   let subjects = JSON.parse(fs.readFileSync("subjects.json"));

//   subjects = subjects.map(s => {

//     if (s.id == subjectId) {
//       s.topics.push(topic);
//     }

//     return s;

//   });

//   fs.writeFileSync("subjects.json", JSON.stringify(subjects, null, 2));

//   res.json({ message: "Topic added" });

// });


// // SUBMIT CONTRIBUTION (React student)
// app.post("/contribution", (req, res) => {

//   const { topic, text } = req.body;

//   let pending = JSON.parse(fs.readFileSync("pending.json"));

//   const newTip = {
//     id: Date.now(),
//     topic,
//     text
//   };

//   pending.push(newTip);

//   fs.writeFileSync("pending.json", JSON.stringify(pending, null, 2));

//   res.json({ message: "Submitted" });

// });


// // GET PENDING (Angular faculty)
// app.get("/pending", (req, res) => {

//   const pending = JSON.parse(fs.readFileSync("pending.json"));

//   res.json(pending);

// });


// // APPROVE TIP
// app.post("/approve/:id", (req, res) => {

//   const id = req.params.id;

//   let pending = JSON.parse(fs.readFileSync("pending.json"));
//   let approved = JSON.parse(fs.readFileSync("approved.json"));

//   const tip = pending.find(t => t.id == id);

//   approved.push(tip);

//   pending = pending.filter(t => t.id != id);

//   fs.writeFileSync("pending.json", JSON.stringify(pending, null, 2));
//   fs.writeFileSync("approved.json", JSON.stringify(approved, null, 2));

//   res.json({ message: "Approved" });

// });


// // GET APPROVED (React student)
// app.get("/approved", (req, res) => {

//   const approved = JSON.parse(fs.readFileSync("approved.json"));

//   res.json(approved);
//   // DELETE TIP FROM PENDING
// app.delete("/delete/:id", (req, res) => {

//   const id = req.params.id;

//   let pending = JSON.parse(fs.readFileSync("pending.json"));

//   pending = pending.filter(t => t.id != id);

//   fs.writeFileSync("pending.json", JSON.stringify(pending, null, 2));

//   res.json({ message: "Deleted successfully" });

// });

// });
const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ FIXED PORT (IMPORTANT FOR RENDER)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// LOGIN API
app.post("/login", (req, res) => {
  const { regno, password } = req.body;

  const users = JSON.parse(fs.readFileSync("users.json"));

  const user = users.find(
    u => u.regno === regno && u.password === password
  );

  if (user) {
    res.json({
      success: true,
      role: user.role
    });
  } else {
    res.json({
      success: false
    });
  }
});


// GET SUBJECTS
app.get("/subjects", (req, res) => {
  const subjects = JSON.parse(fs.readFileSync("subjects.json"));
  res.json(subjects);
});


// ADD SUBJECT
app.post("/addSubject", (req, res) => {
  const { semester, subject } = req.body;

  let subjects = JSON.parse(fs.readFileSync("subjects.json"));

  const newSubject = {
    id: Date.now(),
    semester,
    subject,
    topics: []
  };

  subjects.push(newSubject);

  fs.writeFileSync("subjects.json", JSON.stringify(subjects, null, 2));

  res.json({ message: "Subject added" });
});


// ADD TOPIC
app.post("/addTopic", (req, res) => {
  const { subjectId, topic } = req.body;

  let subjects = JSON.parse(fs.readFileSync("subjects.json"));

  subjects = subjects.map(s => {
    if (s.id == subjectId) {
      s.topics.push(topic);
    }
    return s;
  });

  fs.writeFileSync("subjects.json", JSON.stringify(subjects, null, 2));

  res.json({ message: "Topic added" });
});


// SUBMIT CONTRIBUTION
app.post("/contribution", (req, res) => {
  const { topic, text } = req.body;

  let pending = JSON.parse(fs.readFileSync("pending.json"));

  const newTip = {
    id: Date.now(),
    topic,
    text
  };

  pending.push(newTip);

  fs.writeFileSync("pending.json", JSON.stringify(pending, null, 2));

  res.json({ message: "Submitted" });
});


// GET PENDING
app.get("/pending", (req, res) => {
  const pending = JSON.parse(fs.readFileSync("pending.json"));
  res.json(pending);
});


// APPROVE TIP
app.post("/approve/:id", (req, res) => {
  const id = req.params.id;

  let pending = JSON.parse(fs.readFileSync("pending.json"));
  let approved = JSON.parse(fs.readFileSync("approved.json"));

  const tip = pending.find(t => t.id == id);

  if (tip) {
    approved.push(tip);
    pending = pending.filter(t => t.id != id);
  }

  fs.writeFileSync("pending.json", JSON.stringify(pending, null, 2));
  fs.writeFileSync("approved.json", JSON.stringify(approved, null, 2));

  res.json({ message: "Approved" });
});


// GET APPROVED
app.get("/approved", (req, res) => {
  const approved = JSON.parse(fs.readFileSync("approved.json"));
  res.json(approved);
});


// DELETE TIP
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;

  let pending = JSON.parse(fs.readFileSync("pending.json"));

  pending = pending.filter(t => t.id != id);

  fs.writeFileSync("pending.json", JSON.stringify(pending, null, 2));

  res.json({ message: "Deleted successfully" });
});