const data = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1675338948/hero1_zvbxmv.jpg",
    name: "Kajal Rekha",
    star: "⭐⭐⭐⭐⭐",
    description:
      "I have seen a very good AI course, an exceptional one. And our mentor Shohanur Rahman is an exceptional person, an extraordinary teacher. I have learned a lot from this course, the value of which cannot be fulfilled by anything else. I will always be grateful to him.",
  },
  {
    id: 2,
    image: "https://static.fotor.com/app/features/img/aiface/cartoon/3.png",
    name: "Sadril Amin Shuvo",
    star: "⭐⭐⭐⭐⭐",
    description:
      "So far, this is the most resourceful Bengali content I have come across. The way the syllabus of this course has been organized and the various reference videos used in this course, make it a complete package.I hope you will always play a significant role in our community.",
  },
  {
    id: 3,
    image:
      "https://cdn2.sharechat.com/i'msingleboy_b15df322-b6d1-4d65-a483-75ae1cf0e462-207ba4bd-ef0a-46e6-8fbb-8a88ebb3f208_cmprsd_40.jpg",
    name: "Masud Rana Shawon",
    star: "⭐⭐⭐⭐⭐",
    description:
      "I am able to learn everything about Redux within a very short time, and it's a great achievement for me. I want to thank Shohanur Rahman for explaining everything so beautifully. Also, this course has helped me a lot in my real-life situations.",
  },
  {
    id: 4,
    image:
      "https://www.goodmorningimagesdownload.com/wp-content/uploads/2021/01/Single-Boys-Whatsapp-Dp-Photo-Pictures.jpg",
    name: "Muntasir Fahim",
    star: "⭐⭐⭐⭐⭐",
    description:
      "In one word, the design of the course is done in such a way that there is no way to leave without learning. Along with teaching the course, it also offers a competitive platform where the acquired knowledge can be tested. Support is available 24 hours a day, 7 days a week",
  },
  {
    id: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7tiwKpXF8435JMLE1OpvTQThdlArIXOGjmBf43x8LxQEcQ0j60JALNmqCRCWVv_IyqEY&usqp=CAU",
    name: "Amir Khan Sumon",
    star: "⭐⭐⭐⭐⭐",
    description:
      "In one word, the design of the course is done in such a way that there is no way to leave without learning. Along with teaching the course, it also offers a competitive platform where the acquired knowledge can be tested. Support is available 24 hours a day, 7 days a week.",
  },
  {
    id: 6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKI1-Isg054GsVPOMuQilQ8_HnedC69ySdSw&usqp=CAU",
    name: "Nasim Helal",
    star: "⭐⭐⭐⭐⭐",
    description:
      "In one word, the design of the course is done in such a way that there is no way to leave without learning. Along with teaching the course, it also offers a competitive platform where the acquired knowledge can be tested. Support is available 24 hours a day, 7 days a week.",
  },
  {
    id: 7,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeTFjPyI10MYZln7SktMeD5S_SXQxOUWxAIw&usqp=CAU",
    name: "Shm Usuf",
    star: "⭐⭐⭐⭐⭐",
    description:
      "In one word, the design of the course is done in such a way that there is no way to leave without learning. Along with teaching the course, it also offers a competitive platform where the acquired knowledge can be tested. Support is available 24 hours a day, 7 days a week.",
  },
  {
    id: 8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb21qAb0QG-YRFlqPZgDA2U4KpzdQXhmdkDQ&usqp=CAU",
    name: "Sakib Biswas",
    star: "⭐⭐⭐⭐⭐",
    description:
      "In one word, the design of the course is done in such a way that there is no way to leave without learning. Along with teaching the course, it also offers a competitive platform where the acquired knowledge can be tested. Support is available 24 hours a day, 7 days a week.",
  },
  {
    id: 9,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4QVfDRqNgUf1lxe6umibs0jfTQhow_KX1w&usqp=CAU",
    name: "Naymur Rahman",
    star: "⭐⭐⭐⭐⭐",
    description:
      "In one word, the design of the course is done in such a way that there is no way to leave without learning. Along with teaching the course, it also offers a competitive platform where the acquired knowledge can be tested. Support is available 24 hours a day, 7 days a week.",
  },
  {
    id: 10,
    image:
      "https://wallpapers.com/images/hd/single-boy-emo-smoke-place-3tz9s8h3xnxq8n3l.jpg",
    name: "Abdullah Al Sayed",
    star: "⭐⭐⭐⭐⭐",
    description:
      "In one word, the design of the course is done in such a way that there is no way to leave without learning. Along with teaching the course, it also offers a competitive platform where the acquired knowledge can be tested. Support is available 24 hours a day, 7 days a week.",
  },
  {
    id: 11,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQADRv3y4JO6JNCfsgRCUowE_Vwu_QxloCA&usqp=CAU",
    name: "Ummey Saleha Sumi",
    star: "⭐⭐⭐⭐⭐",
    description:
      "In one word, the design of the course is done in such a way that there is no way to leave without learning. Along with teaching the course, it also offers a competitive platform where the acquired knowledge can be tested. Support is available 24 hours a day, 7 days a week.",
  },
  {
    id: 12,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR0qkPNT0clgynEpPDW_b9utategMItZGMFTuXYamfK_nr6ifwGVSQPc8hxufo59rvB4k&usqp=CAU",
    name: "Sumaiya Rimu",
    star: "⭐⭐⭐⭐⭐",
    description:
      "In one word, the design of the course is done in such a way that there is no way to leave without learning. Along with teaching the course, it also offers a competitive platform where the acquired knowledge can be tested. Support is available 24 hours a day, 7 days a week.",
  },
];

const LearnersFeedback = () => {
  return (
    <div className="mt-32 mx-auto container">
      <h2 className="text-center text-4xl  lg:text-5xl underline underline-offset-4">
        The Feedback of learners about the course
      </h2>

      <div className="learners grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        {data.map((learner) => (
          <div
            key={learner.id}
            className="learner overflow-hidden bg-slate-900  rounded-2xl shadow-xl p-5 border-2 border-slate-800 "
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
  );
};

export default LearnersFeedback;
