const Project = ({ project }) => {
  return (
    <div className="project grid grid-cols-1 xl:grid-cols-5 overflow-hidden gap-20">
      <div className="project-left xl:col-span-3 flex flex-col gap-10">
        <span className="text-6xl lg:text-9xl text-white/20">
          {String(project.id).padStart(2, 0)}
        </span>
        <h3 className="uppercase text-3xl lg:text-5xl leading-relaxed text-cyan-400">
          {project.title}
        </h3>
        <p className="text-white/75">{project.description}</p>
        <span className="text-cyan-400 flex gap-5 flex-wrap">
          {project.tools.map((tool, i) => (
            <span key={i}>{tool}</span>
          ))}
        </span>
      </div>

      <div className="project-right xl:col-span-2 xl:justify-self-end row-start-1 xl:row-auto h-[31rem]">
        <a href={project.live}>
          <img src={project.img} alt="" className="h-full w-full" />
        </a>
      </div>
    </div>
  );
};

export default Project;
