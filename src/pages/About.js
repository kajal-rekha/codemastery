const About = () => {
  return (
    <div className="about wrapper section-padding mt-32 " id="about">
      <h2
        className="text-gray-100 text-4xl lg:text-5xl text-center underline underline-offset-8 mt-80 lg:mt-0"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        our course description
      </h2>
      <div className="about-wrapper grid grid-cols-1 md:grid-cols-2 gap-20 overflow-hidden mt-28">
        <div
          className="about-left"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1684898169/react-js_cpj2cr.png"
            alt="react-image"
          />
        </div>
        <div className="about-right row-start-1 xl:row-auto">
          <p
            className="mb-10 text-4xl lg:text-5xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            This is a full-free{" "}
            <span className="text-teal-500 ">web development</span> course based
            on React.js
          </p>
          <p className="text-lg" data-aos="fade-up" data-aos-duration="1500">
            This is an exciting opportunity for Batch - A3 to learn web
            development for free with a focus on React.js. React is a popular
            JavaScript library used for building user interfaces and
            applications. This course will cover the fundamentals of web
            development and dive deep into React concepts such as components,
            state management, and JSX syntax. By the end of this course, Batch -
            A3 will have gained valuable skills and knowledge to create dynamic
            and interactive web applications using React. So, get ready to
            embark on a journey to become a skilled web developer!
          </p>
          <a
            href="https://docs.google.com/document/d/1qR6RPl4h-EsunNBigL0fwRK7im34eLKe7VJcjRU2ts0/edit?usp=sharing"
            target="_blank"
            rel="noreferrrer"
            className="inline-block mt-10 uppercase py-3 px-6 lg:py-5 lg:px-8 border border-white/20 rounded-full hover:border-teal-400/20 hover:bg-teal-400/20 duration-500"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            📸 See course outline
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
