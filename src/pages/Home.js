import Hero from "../components/Hero";
import About from "./About";
import CourseInstructor from "./CourseInstructor";
import LearnersOpenion from "./LearnersOpenion";
import CourseProgress from "./CourseProgress";
import ProjectGallery from "./ProjectGallery";
import Support from "./Support";
//import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <ProjectGallery />
      {/* <Projects /> */}
      <CourseProgress />

      <LearnersOpenion />
      <Support />
      <CourseInstructor />
    </div>
  );
};

export default Home;
