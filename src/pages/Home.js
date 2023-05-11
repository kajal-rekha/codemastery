import Hero from "../components/Hero";
import About from "./About";
import CourseInstructor from "./CourseInstructor";
import CourseProgress from "./CourseProgress";
import ProjectGallery from "./ProjectGallery";
import Support from "./Support";
import LearnersFeedback from "./LearnersFeedback";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <ProjectGallery />
      <CourseProgress />
      <CourseInstructor />
      <Support />
      <LearnersFeedback />
    </div>
  );
};

export default Home;
