const CourseInstructor = () => {
  return (
    <section className="border-b border-teal-900">
      <div className="course-instructor container mx-auto">
        <h2
          className="text-center text-5xl mt-32 underline underline-offset-4 "
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          Course Instructor
        </h2>

        <div className="wrapper section-padding grid grid-cols-1 xl:grid-cols-5 overflow-hidden gap-10 mt-20 ">
          <div className="left xl:col-span-3 flex flex-col gap-5 ">
            <p
              className="text-white/75 text-lg"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Md Shohanur Rahman is a visionary entrepreneur and a trailblazing
              figure in the world of web development. As the founder of a highly
              acclaimed React.js development course, he has left an indelible
              mark on the tech industry. Rahman's journey into the world of
              programming began with a deep-rooted passion for coding and a
              relentless pursuit of knowledge. His insatiable curiosity and
              dedication led him to master React.js, a JavaScript library for
              building user interfaces, and he recognized its immense potential
              to revolutionize web development.
            </p>
            <p
              className="text-white/75 text-lg"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              With a mission to empower aspiring developers, Rahman founded his
              React.js development course, which quickly gained recognition for
              its comprehensive and hands-on approach to teaching. He is known
              for his exceptional teaching abilities, breaking down complex
              concepts into easily digestible lessons, and fostering a dynamic
              learning environment.
            </p>
            <p
              className="text-white/75 text-lg"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Under Rahman's guidance, countless students have acquired the
              skills needed to build interactive and responsive web applications
              using React.js. His commitment to staying at the forefront of
              technological advancements and sharing his expertise has made him
              a respected authority in the field.
            </p>
            <p
              className="text-white/75 text-lg"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Md Shohanur Rahman's impact on the React.js community and his
              dedication to nurturing the next generation of web developers make
              him an inspirational figure in the world of web development
              education. His work continues to shape the future of web
              development, leaving an enduring legacy for generations to come.
            </p>
            <div className="mt-9">
              <h2
                className="font-bold text-2xl text-teal-500"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                Md.Shohanur Rahman
              </h2>
              <p
                className="text-lg"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
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
           src="https://imgcdn.stablediffusionweb.com/2024/4/21/ef5c1523-2585-4e05-8a46-76391f68f5c9.jpg"
           alt="Instructor smiling at the camera" 
          className="w-full rounded-lg h-full"
/>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseInstructor;
