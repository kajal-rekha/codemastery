const data = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1675338948/hero1_zvbxmv.jpg",
    name: "Kajal Rekha",
    star: "⭐⭐⭐⭐⭐",
    description:
      "This course is the best one I've seen. And our mentor Shohanur Rahman is an exceptional person, an extraordinary teacher. I have learned a lot from this course, the value of which cannot be fulfilled by anything else. I will always be grateful to him.",
  },
  {
    id: 2,
    image: "https://static.fotor.com/app/features/img/aiface/cartoon/3.png",
    name: "Sadril Amin Shuvo",
    star: "⭐⭐⭐⭐⭐",
    description:
      "This Bengali course is incredibly comprehensive, with a well-structured syllabus and diverse reference videos. It's a truly valuable resource, offering a complete learning experience that stands out for its organization and content richness.",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1693073647/7084424_few3go.png",
    name: "Masud Rana Shawon",
    star: "⭐⭐⭐⭐⭐",
    description:
      "I have been able to learn everything from this course, and it's been a great accomplishment for me. I want to express my gratitude to Shohanur Rahman for explaining everything so beautifully. Additionally, this course has provided me with substantial assistance in many real-life situations.",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1693073218/forbidden_ubunp1.png",
    name: "Muntasir Fahim",
    star: "⭐⭐⭐⭐⭐",
    description:
      "In one word, the design of the course is done in such a way that there is no way to leave without learning. Along with teaching the course, it also offers a competitive platform where the acquired knowledge can be tested. ",
  },
  {
    id: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7tiwKpXF8435JMLE1OpvTQThdlArIXOGjmBf43x8LxQEcQ0j60JALNmqCRCWVv_IyqEY&usqp=CAU",
    name: "Amir Khan Sumon",
    star: "⭐⭐⭐⭐⭐",
    description:
      "In one word, the design of the course is done in such a way that there is no way to leave without learning. Along with teaching the course, it also offers a competitive platform where the acquired knowledge can be tested. ",
  },
  {
    id: 6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKI1-Isg054GsVPOMuQilQ8_HnedC69ySdSw&usqp=CAU",
    name: "Nasim Helal",
    star: "⭐⭐⭐⭐⭐",
    description:
      "In one word, the design of the course is done in such a way that there is no way to leave without learning. Along with teaching the course, it also offers a competitive platform where the acquired knowledge can be tested. ",
  },
  {
    id: 7,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeTFjPyI10MYZln7SktMeD5S_SXQxOUWxAIw&usqp=CAU",
    name: "Shm Usuf",
    star: "⭐⭐⭐⭐⭐",
    description:
      "In one word, the design of the course is done in such a way that there is no way to leave without learning. Along with teaching the course, it also offers a competitive platform where the acquired knowledge can be tested. ",
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1693073567/whegrrrreeeydks1rftx_annahs.webp",
    name: "Sakib Biswas",
    star: "⭐⭐⭐⭐⭐",
    description:
      "In one word, the design of the course is done in such a way that there is no way to leave without learning. Along with teaching the course, it also offers a competitive platform where the acquired knowledge can be tested. ",
  },
  {
    id: 9,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1693073335/male_zgnba2.png",
    name: "Naymur Rahman",
    star: "⭐⭐⭐⭐⭐",
    description:
      "In one word, the design of the course is done in such a way that there is no way to leave without learning. Along with teaching the course, it also offers a competitive platform where the acquired knowledge can be tested.",
  },
  {
    id: 10,
    image: "https://cdn-icons-png.flaticon.com/512/4086/4086679.png",
    name: "Abdullah Al Sayed",
    star: "⭐⭐⭐⭐⭐",
    description:
      "In one word, the design of the course is done in such a way that there is no way to leave without learning. Along with teaching the course, it also offers a competitive platform where the acquired knowledge can be tested.",
  },
  {
    id: 11,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQADRv3y4JO6JNCfsgRCUowE_Vwu_QxloCA&usqp=CAU",
    name: "Ummey Saleha Sumi",
    star: "⭐⭐⭐⭐⭐",
    description:
      "In one word, the design of the course is done in such a way that there is no way to leave without learning. Along with teaching the course, it also offers a competitive platform where the acquired knowledge can be tested.",
  },
  {
    id: 12,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR0qkPNT0clgynEpPDW_b9utategMItZGMFTuXYamfK_nr6ifwGVSQPc8hxufo59rvB4k&usqp=CAU",
    name: "Sumaiya Rimu",
    star: "⭐⭐⭐⭐⭐",
    description:
      "In one word, the design of the course is done in such a way that there is no way to leave without learning. Along with teaching the course, it also offers a competitive platform where the acquired knowledge can be tested.",
  },
];

const LearnersFeedback = () => {
  return (
    <section className="border-b border-teal-900">
      <div className="mt-32 wrapper section-padding">
        <h2
          className="text-center text-4xl  lg:text-5xl underline underline-offset-4"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          The Feedback of learners about the course
        </h2>

        <div className="learners grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {data.map((learner) => (
            <div
              key={learner.id}
              className="learner overflow-hidden bg-slate-900  rounded-2xl shadow-xl p-5 border-2 border-slate-800"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="flex gap-5">
                <img
                  src={learner.image}
                  alt=""
                  className="w-[3rem] h-[3rem] rounded-full"
                />
                <h3>{learner.name}</h3>
              </div>

              <div className="ml-16">
                <p>{learner.star}</p>
                <p>{learner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnersFeedback;
