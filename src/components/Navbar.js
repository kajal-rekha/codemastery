import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar container mx-auto lg:h-24 h-28 flex flex-col  justify-center lg:flex-row lg:justify-between items-center border-b border-teal-900 ">
      <div className="left flex">
        <span className="text-2xl text-gray-100 font-semibold">
          Code<span className="text-teal-500">mastery</span>
        </span>
      </div>

      <div className="right">
        <nav className=" flex items-center gap-5 text-gray-100 font-medium text-[1rem]">
          <Link to="/" className="nav-link hover:text-teal-500 duration-300">
            Home
          </Link>
          <Link
            to="/about"
            className="nav-link hover:text-teal-500  duration-300"
          >
            About
          </Link>
          <Link
            to="/project-gallery"
            className="nav-link hover:text-teal-500  duration-300"
          >
            Gallery
          </Link>
          <Link
            to="/courseprogress"
            className="nav-link hover:text-teal-500  duration-300"
          >
            Progress
          </Link>

          <Link
            to="/instructor"
            className="nav-link hover:text-teal-500  duration-300"
          >
            Instructor
          </Link>

          <Link
            to="/support"
            className="nav-link hover:text-teal-500  duration-300"
          >
            Support
          </Link>
          <Link
            to="/feedback"
            className="nav-link hover:text-teal-500 duration-300"
          >
            Feedback
          </Link>

          <Link
            to="/contact"
            className="nav-link hover:text-teal-500  duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>

      <div className="text-gray-100 font-medium text-[1rem]">
        <a
          href="https://www.youtube.com/@spectra.shohan"
          className=" hover:text-teal-500 hover:underline hover:underline-offset-2 duration-300"
        >
          Subscribe
        </a>
      </div>
    </div>
  );
};

export default Navbar;
