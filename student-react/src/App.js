import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SubjectPage from "./pages/SubjectPage";
import SubmitTip from "./pages/SubmitTip";
import ApprovedTips from "./pages/ApprovedTips";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/subject" element={<SubjectPage />} />
        <Route path="/submit" element={<SubmitTip />} />
        <Route path="/tips" element={<ApprovedTips />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;