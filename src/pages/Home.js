import Hero from "../components/Hero";
import About from "./About";
import CourseInstructor from "./CourseInstructor";
import CourseProgress from "./CourseProgress";
import ProjectGallery from "./ProjectGallery";
import Support from "./Support";
import LearnersFeedback from "./LearnersFeedback";
//import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <ProjectGallery />
      {/* <Projects /> */}
      <CourseProgress />

      <LearnersFeedback />
      <Support />
      <CourseInstructor />
    </div>
  );
};

export default Home;
