const About = () => {
  return (
    <div className="about container mx-auto mt-20 " id="about">
      <h2 className="text-gray-100 text-5xl text-center underline underline-offset-8 ">
        our course description
      </h2>
      <div className="about-wrapper mt-40 grid grid-cols-1 lg:grid-cols-2 gap-20 overflow-hidden">
        <div className="about-left">
          <img
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1684898169/react-js_cpj2cr.png"
            alt="react-image"
          />
        </div>
        <div className="about-right">
          <p className="mb-10 text-4xl lg:text-5xl">
            This is a full-free{" "}
            <span className="text-teal-500 ">web development</span> course based
            on React.js
          </p>
          <p className="text-lg">
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
            className="inline-block mt-10 uppercase py-5 px-8 border border-white/20 rounded-full hover:border-teal-400/20 hover:bg-teal-400/20 duration-500"
          >
            📸 See course outline
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
