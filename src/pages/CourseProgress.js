const Progress = () => {
  return (
    <div className="progress container mx-auto mt-40 ">
      <h2 className="text-5xl text-center">
        The way our course is progressing
      </h2>
      <p className="text-center mt-5">
        How we can help you become a skilled Mernstack developer.
      </p>

      <div className="course container grid grid-cols-1 lg:grid-cols-5 overflow-hidden gap-20 mt-0 lg:mt-20 ">
        <div className="left lg:col-span-3 flex flex-col gap-10 ">
          <span className="text-6xl lg:text-8xl text-white ">01</span>
          <h3 className="uppercase text-4xl leading-relaxed text-teal-400">
            The method of teaching project-based learning step by step.
          </h3>
          <p className="text-white/75 text-lg">
            Project-based learning is a student-centered approach to teaching
            that emphasizes hands-on learning and real-world problem-solving. To
            implement this method, educators typically follow a step-by-step
            process that involves selecting a project, setting goals and
            objectives, researching, planning and executing the project, and
            finally reflecting on the process and outcomes. This approach
            encourages creativity, collaboration, and critical thinking skills
            in students.
          </p>
        </div>
        <div className="right lg:col-span-2 lg:justify-self-end row-start-1 lg:row-auto mt-24 lg:mt-32">
          <img
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1684898234/ES6_jdnyf1.png"
            className="w-full"
          />
        </div>
      </div>

      <div className="course container grid grid-cols-1 xl:grid-cols-5 overflow-hidden gap-20 mt-20 ">
        <div className="right xl:col-span-2 xl:justify-self-end row-start-1 xl:row-auto mt-12 lg:mt-32">
          <img
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1684898261/course_details_veip9e.png"
            alt="react-image"
            className="w-full"
          />
        </div>

        <div className="left xl:col-span-3 flex flex-col gap-10 mt-20">
          <span className="text-6xl lg:text-8xl text-white">02</span>
          <h3 className="uppercase text-4xl leading-relaxed text-teal-400">
            The opportunity to verify oneself through an examination.
          </h3>
          <p className="text-white/75 text-lg">
            Examinations are commonly used as a method of evaluating a person's
            knowledge and skills in a particular subject or field. They can
            provide a valuable opportunity for individuals to assess their own
            understanding and identify areas where they may need to improve. The
            process of studying for an exam can also help to consolidate
            learning and deepen understanding. However, exams can also be
            stressful and high-pressure, and may not always accurately reflect
            an individual's true abilities. It is important to approach exams
            with a balanced perspective, and to seek support and guidance if
            needed.
          </p>
        </div>
      </div>

      <div className="course container grid grid-cols-1 xl:grid-cols-5 overflow-hidden gap-20 mt-20 ">
        <div className="left  xl:col-span-3 flex flex-col gap-10 ">
          <span className="text-6xl lg:text-8xl text-white">03</span>
          <h3 className="uppercase text-4xl leading-relaxed text-teal-400">
            The correct solution to the question is available after the exam.
          </h3>
          <p className="text-white/75 text-lg">
            After taking an exam, it's common to wonder how you did and what the
            correct answers were. However, it's important to remember that the
            correct solution to the question is usually not available until
            after the exam is over. This can be frustrating, but it's necessary
            to maintain the integrity of the exam and ensure fairness for all
            test-takers. Be patient and wait for the results to be released.
          </p>
        </div>
        <div className="right xl:col-span-2 xl:justify-self-end row-start-1 xl:row-auto mt-24 lg:mt-32">
          <img
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1684898288/InfyTQ-Coding-Questions-and-solutions-2022-23_nbhnfv.webp"
            alt="react-image"
            className="w-full"
          />
        </div>
      </div>

      <div className="course container grid grid-cols-1 xl:grid-cols-5 overflow-hidden gap-20 mt-20 ">
        <div className="right xl:col-span-2 xl:justify-self-end row-start-1 xl:row-auto mt-12 lg:mt-24">
          <img
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1684898322/Messaging_App_Development_Solution-_img_jjsl5s.png"
            alt="react-image"
            className="w-[35rem]"
          />
        </div>

        <div className="left  xl:col-span-3 flex flex-col gap-10 ">
          <span className="text-6xl lg:text-8xl text-white">04</span>
          <h3 className="uppercase text-4xl leading-relaxed text-teal-400">
            There are Discord support and messenger groups available for
            assistance if you get stuck.
          </h3>
          <p className="text-white/75 text-lg">
            If you encounter any problem during the course, or get stuck
            somewhere, you can post your question on our Discord support channel
            or messanger group. If any complex problem cannot be solved through
            the Discord support channel, or messanger group we will try to solve
            it by calling through Discord voice channel / Google Meet if
            necessary. We will be with you throughout the course and try our
            best to provide maximum support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
