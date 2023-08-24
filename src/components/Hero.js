const Hero = () => {
  return (
    <div
      className="home wrapper h-[calc(100vh-5rem)] section-padding "
      id="home"
    >
      <div className="home-wrapper grid grid-cols-1 lg:grid-cols-[60%_auto] gap-10 mt-40 overflow-hidden">
        <div className="home-left">
          <p
            className="mb-10 text-5xl lg:text-7xl"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            This is a best <span className="text-teal-500 italic">online</span>{" "}
            courses from React.js Development
            <span className="text-teal-500">(A3)</span>
          </p>
          <p
            className="text-3xl underline"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            are you ready to learn?
          </p>
          <a
            href="https://www.youtube.com/watch?v=_kguGl2xsKM"
            target="_blank"
            rel="noreferrrer"
            className="inline-block mt-10 uppercase py-4 px-6 border border-white/20 rounded-full hover:border-teal-400/20 hover:bg-teal-400/20 duration-500"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            🖥 See course intro video
          </a>
        </div>
        <div
          className="hero-right w-full"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1684898102/mern-dev-img_bybufq.png"
            alt="hero_image"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
