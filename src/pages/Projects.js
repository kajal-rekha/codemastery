import Project from "./Project";

const data = [
  {
    id: 1,
    title: "Proxima - A Powerful Project Management App",
    img: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1677934511/Screenshot_33_b3fq76.png",
    live: "https://proxima-app-project.netlify.app",

    description:
      "Proxima is a secure and powerful project management system built with React, Express, Tailwind CSS, Node.js, and MongoDB. It features JWT authentication, easy project creation, task assignment, and progress tracking. Proxima is highly customizable, responsive, and scalable.",
    tools: [
      "React",
      "Nodejs",
      "Express",
      "Jwt",
      "Mongodb",
      "Tailwind CSS",
      "Context-api",
    ],
  },
  {
    id: 2,
    title: "Tech Alph _ An Ecommerce Website",
    img: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1677934825/Screenshot_36_efvmrv.png",
    live: "https://tech-alpha-ecommerce.netlify.app/",
    description:
      "This is an e-commerce project built using React, Redux, and Tailwind CSS. It is a modern, fast and responsive web application designed for an optimal shopping experience. The project makes use of Redux for state management and Tailwind CSS for styling to deliver an efficient and visually appealing user interface. ",
    tools: [
      "React",
      "Redux",
      "Redux Thunk",
      "Redux Toolkit",
      "Axios",
      "Tailwind CSS",
    ],
  },
  {
    id: 3,
    title: "Foodvarse _ A Recipe Finder Web Application",
    img: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1675278752/Screenshot_4_rfupr3.png",
    live: "https://foodvarse.netlify.app/",
    description:
      "Foodverse is a recipe web application, where an user can search different kinds of recipe and find the necessary ingredients for the specific recipe item. Also a recipe item can be saved into the local storage of the browser. ",
    tools: ["React.js", " React Router", "Tailwind CSS"],
  },
  {
    id: 4,
    title:
      "React-todo-app _ A simple Todo application built with React and Tailwind CSS.",
    img: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1680238204/Screenshot_3_np7gnh.png",
    live: "https://kajal-todo-app.netlify.app/",
    description:
      "This is a React Todo application built using React and Tailwind CSS. Features include the ability to create, update, and delete todo items, making task management a breeze. With its clean and intuitive design, it's easy to stay organized and on top of your tasks.  ",
    tools: ["React.js", "Todo-app", "Todo-list", "Tailwind CSS"],
  },
  {
    id: 5,
    title: "Immemorial: Let's bring back the 90's memories",
    img: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1680239567/Screenshot_4_sdqhrn.png",
    live: "https://immemorial-project.netlify.app",
    description:
      "This repository contains a React application that allows users to reminisce about their memories from the 90s. The application utilizes React Router for navigation between pages, and GSAP (GreenSock Animation Platform) for animations to enhance the user experience. Users can create, edit, and view their own 90s memories in a fun and interactive way.",
    tools: ["React.js", "React-Router", "GSAP"],
  },
  {
    id: 6,
    title: "Access Bank: A Login Bank Application built with JavaScript",
    img: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1680245089/Screenshot_5_zq0aar.png",
    live: "https://kajal-rekha.github.io/Access-Bank/",
    description:
      "A JavaScript based login page application for a bank's website. This repository contains the code for a secure and user-friendly login experience for bank customers. The application is built using HTML, CSS, and JavaScript, and implements features such as password validation and error handling. ",
    tools: ["Javascript", "CSS", "HTML"],
  },
  {
    id: 7,
    title:
      "Antivirus: An antivirus website that provides a secure environment.",
    img: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1680246415/Screenshot_6_kdln90.png",
    live: "https://kajal-rekha.github.io/Anti-virus-website/",
    description:
      "A JavaScript antivirus is a software to protect computers from viruses, malware using the JavaScript programming language. It may scan files, network traffic and alert user of potential threats. Features may include real-time protection, auto-updates, and scheduled scans.",
    tools: ["Javascript", "CSS", "HTML"],
  },
  {
    id: 8,
    title: "Reel Verse - A Cinematic Website.",
    img: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1680416907/Screenshot_2_eigmik.png",
    live: "https://kajal-rekha.github.io/Reel-Verse/",
    description:
      "Reel Verse is a movie ticket booking and purchasing platform that offers a seamless experience for movie lovers. This website is built using JavaScript and provides an intuitive user interface for movie enthusiasts to explore the latest movie releases, read reviews, book tickets, and much more.",
    tools: ["Javascript", "CSS", "HTML"],
  },
  {
    id: 9,
    title: "FoodCastle - A Food related Website.",
    img: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1680418637/Screenshot_3_dobgbp.png",
    live: "https://kajal-rekha.github.io/Food-Castle/",
    description:
      "FoodCastle is a static website that showcases a collection of delicious recipes from different cuisines. The website provides an intuitive and easy-to-use interface that allows users to browse recipes by category, search for recipes based on keywords, and filter recipes based on dietary preferences.",
    tools: ["HTML", "CSS"],
  },

  {
    id: 10,
    title: "Chill Buddy - A Cinematic Website.",
    img: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1680418654/Screenshot_4_k1xlko.png",
    live: "https://kajal-rekha.github.io/Chill-Buddy-Social-Media/",
    description:
      "A social media website built using HTML and CSS would typically consist of various web pages such as a home page, user profile pages, messaging system, and newsfeed.  The website may also incorporate JavaScript for interactivity and dynamic content. Overall, a social media website built using HTML and CSS would allow users to connect, share content, and interact with each other online.",
    tools: ["HTML", "CSS"],
  },
  {
    id: 11,
    title: "Photography - A Photography Website.",
    img: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1680419578/Screenshot_5_y6c7w1.png",
    live: "https://kajal-rekha.github.io/photography-website/",
    description:
      "This is a photography website built using HTML and CSS. It features a responsive design, a gallery of high-quality photographs, and an about page to learn more about the photographers. This website is perfect for photography enthusiasts looking for inspiration or for photographers looking to showcase their work online.",
    tools: ["HTML", "CSS"],
  },
  {
    id: 12,
    title: "Antiques Holder.",
    img: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1683806122/Screenshot_2_r9yh7v.png",
    live: "https://antiques-holder.netlify.app/",
    description:
      "Antiques Holder is a platform that allows users to view and keep track of antique items they own or are interested in. It provides a virtual space where users can showcase their antique items and share them with others. The platform is designed to be user-friendly and easy to navigate.",
    tools: ["React.js", "React-Router", "GSAP"],
  },
];

const Projects = () => {
  return (
    <div className="projects container mx-auto mt-20" id="projects">
      <h2 className="text-gray-100 text-7xl text-center underline underline-offset-8">
        All Projects
      </h2>
      <p className="text-3xl text-center  pt-10">
        Some parts of the projects that have been done so far in the course
      </p>
      <div className="projects-wrapper mt-40 flex flex-col gap-40 ">
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
