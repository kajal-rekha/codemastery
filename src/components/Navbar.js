import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useCallback } from "react";

const Navbar = () => {
  const [toggleOpen, setToggleOpen] = useState(false);

  const handleToggle = useCallback(() => {
    if (window.innerWidth > 960) {
      return;
    }

    setToggleOpen(!toggleOpen);
    document.body.classList.toggle("lock-scroll");
  }, [toggleOpen]);

  return (
    <div className="navbar wrapper h-20 flex justify-between items-center border-b border-teal-900 fixed top-0 left-0 right-0 z-[10000] bg-slate-900 ">
      <div className="logo" data-aos="fade-right" data-aos-duration="1000">
        <span className="text-2xl text-gray-100 font-semibold">
          Code<span className="text-teal-500">mastery</span>
        </span>
      </div>

      <div
        className="left text-lg"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <nav
          className={`${
            toggleOpen
              ? "flex flex-col fixed z-[2] top-60 bottom-0 left-0 right-0 items-center justify-center text-lg gap-5 text-center  bg-rose-700"
              : "hidden lg:flex gap-5"
          } `}
        >
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
            to="/gallery"
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

      <div className="right" data-aos="fade-left" data-aos-duration="1000">
        <a
          href="https://www.youtube.com/@spectra.shohan"
          className=" py-2 px-5 bg-teal-700 hover:bg-teal-800 rounded-lg duration-500 text-lg"
        >
          Subscribe
        </a>
      </div>
      <button className="z-[3] lg:hidden">
        <span>
          <FiMenu
            onClick={handleToggle}
            className={`${
              !toggleOpen ? "block" : "hidden"
            } text-xl lg:hidden cursor-pointer`}
          />
          <AiOutlineClose
            onClick={handleToggle}
            className={`${
              toggleOpen ? "block" : "hidden"
            } text-xl lg:hidden cursor-pointer`}
          />
        </span>
      </button>
    </div>
  );
};

export default Navbar;
