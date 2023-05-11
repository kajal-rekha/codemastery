import { Link } from "react-router-dom";

const ProjectGallery = () => {
  return (
    <div className="container mx-auto mt-20">
      <h2 className="text-center text-5xl mb-20 underline">Project Gallery</h2>
      <div className="project-gallery  grid grid-cols-3 gap-10 ">
        <div className="gallery ">
          <Link to="/projects">
            <img
              src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1677934511/Screenshot_33_b3fq76.png"
              alt=""
              className="w-[25rem] h-[25rem] rounded-lg hover:scale-105  duration-300"
            />
          </Link>
        </div>
        <div className="gallery ">
          <Link to="/projects">
            <img
              src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1677934825/Screenshot_36_efvmrv.png"
              alt=""
              className="w-[25rem] h-[25rem] rounded-lg hover:scale-105  duration-300 "
            />
          </Link>
        </div>
        <div className="gallery  ">
          <Link to="/projects">
            <img
              src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1675278752/Screenshot_4_rfupr3.png"
              alt=""
              className="w-[25rem] h-[25rem] rounded-lg hover:scale-105  duration-300 "
            />
          </Link>
        </div>
        <div className="gallery ">
          <Link to="/projects">
            <img
              src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1680238204/Screenshot_3_np7gnh.png"
              alt=""
              className="w-[25rem] h-[25rem] rounded-lg hover:scale-105  duration-300 "
            />
          </Link>
        </div>
        <div className="gallery ">
          <Link to="/projects">
            <img
              src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1680239567/Screenshot_4_sdqhrn.png"
              alt=""
              className="w-[25rem] h-[25rem] rounded-lg hover:scale-105  duration-300 "
            />
          </Link>
        </div>
        <div className="gallery">
          <Link to="/projects">
            <img
              src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1680245089/Screenshot_5_zq0aar.png"
              alt=""
              className="w-[25rem] h-[25rem] rounded-lg hover:scale-105  duration-300 "
            />
          </Link>
        </div>
        <div className="gallery ">
          <Link to="/projects">
            <img
              src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1680246415/Screenshot_6_kdln90.png"
              alt=""
              className="w-[25rem] h-[25rem] rounded-lg hover:scale-105  duration-300 "
            />
          </Link>
        </div>
        <div className="gallery  ">
          <Link to="/projects">
            <img
              src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1680416907/Screenshot_2_eigmik.png"
              alt=""
              className="w-[25rem] h-[25rem] rounded-lg hover:scale-105  duration-300 "
            />
          </Link>
        </div>
        <div className="gallery  ">
          <Link to="/projects">
            <img
              src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1680418637/Screenshot_3_dobgbp.png"
              alt=""
              className="w-[25rem] h-[25rem] rounded-lg hover:scale-105  duration-300 "
            />
          </Link>
        </div>
        <div className="gallery ">
          <Link to="/projects">
            <img
              src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1680418654/Screenshot_4_k1xlko.png"
              alt=""
              className="w-[25rem] h-[25rem] rounded-lg hover:scale-105  duration-300 "
            />
          </Link>
        </div>
        <div className="gallery ">
          <Link to="/projects">
            <img
              src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1680419578/Screenshot_5_y6c7w1.png"
              alt=""
              className="w-[25rem] h-[25rem] rounded-lg hover:scale-105  duration-300 "
            />
          </Link>
        </div>
        <div className="gallery  ">
          <Link to="/projects">
            <img
              src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1677934525/Screenshot_35_f60au2.png"
              alt=""
              className="w-[25rem] h-[25rem]  rounded-lg hover:scale-105  duration-300 "
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
