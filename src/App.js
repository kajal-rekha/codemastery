import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import CourseInstructor from "./pages/CourseInstructor";
import ProjectGallery from "./pages/ProjectGallery";
import Support from "./pages/Support";
import CourseProgress from "./pages/CourseProgress";
import LearnersFeedback from "./pages/LearnersFeedback";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="app bg-slate-900  text-slate-100 min-h-screen">
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project-gallery" element={<ProjectGallery />} />
        <Route path="/courseprogress" element={<CourseProgress />} />
        <Route path="/instructor" element={<CourseInstructor />} />
        <Route path="/feedback" element={<LearnersFeedback />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
