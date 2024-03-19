import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TeacherSignup from "./pages/TeacherSignup";
import TeacherLogin from "./pages/TeacherLogin";
import TeacherPortal from "./pages/TeacherPortal";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="bg-gray-800 w-full min-h-screen text-white">
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacherSignup" element={<TeacherSignup />} />
          <Route path="/teacherLogin" element={<TeacherLogin />} />
          <Route path="/teacherportal" element={<TeacherPortal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
