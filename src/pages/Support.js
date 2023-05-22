import { Link } from "react-router-dom";

const Support = () => {
  return (
    <div className="support-team container mx-auto mt-36">
      <h2 className="text-5xl text-center underline underline-offset-4">
        All time support
      </h2>
      <div className="support grid grid-cols-1 lg:grid-cols-2 mt-14">
        <div className="left">
          <img
            src="https://static.wixstatic.com/media/191815_5d9d3ff1ad894e96a2f0a86681563555~mv2.gif"
            alt=""
            className="w-[30rem]"
          />
        </div>
        <div className="right">
          <h2 className="text-4xl lg:text-5xl mt-10">
            present for <span className="text-teal-500">round-the-clock </span>{" "}
            support <span className="text-teal-500">messanger</span> group
          </h2>
          <p className="text-lg mt-10">
            We can receive all-time support in our Messenger course, where we
            have mentors and two CR available, as well as other members of the
            group who provide support to each other. Currently, 24-hour support
            is available.Apart from this, you can ask direct questions on the
            discussed topics every day and get answers in group.
          </p>
          <button className="button mt-10 text-lg border py-3 px-8 capitalize border-white/20 rounded-full hover:border-teal-400/20 hover:bg-teal-400/20 duration-500">
            <a href="https://www.facebook.com/groups/2231695436989063">
              support group
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Support;
