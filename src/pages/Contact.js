import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    //emailjs integration

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_PUBLIC_ID
      )
      .then(
        () => {
          console.log("Your message sent!");
        },
        () => {
          console.log("Failed, please try again later!");
        }
      );
    // reset
    e.target.querySelector(".name").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".message").value = "";
  };

  return (
    <div className="contact container mx-auto mt-20 min-h-screen">
      <h2 className="text-5xl text-center font-medium  ">Contact Us</h2>
      <form
        onSubmit={sendEmail}
        className="contact-form flex flex-col gap-8 py-10 mx-auto max-w-lg"
        ref={formRef}
      >
        <div className="form-control flex flex-col gap-2">
          <label htmlFor="name" className="cursor-pointer">
            Name
          </label>
          <input
            type="name"
            name="name"
            placeholder="write your name"
            className="name bg-transparent border border-gray-600 focus:border-gray-300 py-4 px-6 rounded-xl outline-none duration-300"
          />
        </div>
        <div className="form-control flex flex-col gap-2">
          <label htmlFor="email" className="cursor-pointer ">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="write your email"
            className=" email bg-transparent border border-gray-600 focus:border-gray-300 py-4 px-6 rounded-xl outline-none duration-300"
          />
        </div>

        <div className="form-control flex flex-col gap-2">
          <label htmlFor="message" className="cursor-pointer">
            Message
          </label>
          <textarea
            placeholder="Write your message"
            name="message"
            rows="1"
            cols="30"
            className="message bg-transparent border border-gray-600 focus:border-gray-300 h-40 rounded-xl outline-none py-6 px-5 resize-none duration-300"
          />
        </div>
        <div className="submit px-2 py-4 rounded-xl bg-teal-700 text-center overflow-hidden hover:bg-teal-600 duration-300">
          <button type="submit" className="text-white uppercase font-medium">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
