import Hero from "../components/Hero";
import About from "./About";
import CourseInstructor from "./CourseInstructor";
import CourseProgress from "./CourseProgress";
import Support from "./Support";
import LearnersFeedback from "./LearnersFeedback";
import Contact from "./Contact";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Gallery />
      <CourseProgress />
      <CourseInstructor />
      <Support />
      <LearnersFeedback />
      <Contact />
    </div>
  );
};

export default Home;
