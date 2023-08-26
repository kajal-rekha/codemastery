const Project = ({ project }) => {
  return (
    <div className="project grid grid-cols-1 xl:grid-cols-5 overflow-hidden gap-20">
      <div className="project-left xl:col-span-3 flex flex-col gap-10">
        <span
          className="text-6xl lg:text-9xl text-white/20"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          {String(project.id).padStart(2, 0)}
        </span>
        <h3
          className="uppercase text-3xl lg:text-5xl leading-relaxed text-cyan-400"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          {project.title}
        </h3>
        <p
          className="text-white/75"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          {project.description}
        </p>
        <span
          className="text-cyan-400 flex gap-5 flex-wrap"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          {project.tools.map((tool, i) => (
            <span key={i}>{tool}</span>
          ))}
        </span>
      </div>

      <div
        className="project-right xl:col-span-2 xl:justify-self-end row-start-1 xl:row-auto h-[31rem]"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <a href={project.live}>
          <img src={project.img} alt="" className="h-full w-full" />
        </a>
      </div>
    </div>
  );
};

export default Project;
