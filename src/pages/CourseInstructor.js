const CourseInstructor = () => {
  return (
    <div className="course-instructor container mx-auto">
      <h2
        className="text-center text-5xl mt-32 underline underline-offset-4 "
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        Course Instructor
      </h2>

      <div className="course container grid grid-cols-1 xl:grid-cols-5 overflow-hidden gap-20 mt-20 ">
        <div className="left xl:col-span-3 flex flex-col gap-10 ">
          <p
            className="text-white/75 text-lg"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            He is a MERN stack developer.He is specialize in building responsive
            and user-friendly web applications that provide a seamless
            experience for the end-user. With his in-depth knowledge of the
            latest web development technologies and frameworks,He is able to
            create innovative solutions that meet the needs of his clients.
            Whether it's a simple website or a complex web application,he is
            committed to delivering high-quality work that exceeds expectations.
            <p data-aos="fade-up" data-aos-duration="1500">
              In addition to his expertise in the MERN stack, He also has a
              strong background in UI design and animation. He has experience in
              creating smooth animations and transitions that enhance the
              overall user experience. He also well-versed in using other design
              tools such as Adobe XD and Figma to create wireframes and mockups.
              His ability to combine his technical skills with his artistic eye
              allows her to create visually appealing and functional web
              applications that stand out in the market.
            </p>
          </p>
          <div className="mt-9">
            <h2
              className="font-bold text-2xl text-teal-500"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Md.Shohanur Rahman
            </h2>
            <p data-aos="fade-up" data-aos-duration="1500">
              Founder of React.js development course
            </p>
          </div>
        </div>
        <div
          className="right xl:col-span-2 xl:justify-self-end row-start-1 xl:row-auto w-full h-full"
          data-aos="zoom-in-up"
          data-aos-delay="1500"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img
            src="https://avatars.githubusercontent.com/u/99276071?v=4"
            alt="instructor-image"
            className="w-full rounded-lg h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseInstructor;
