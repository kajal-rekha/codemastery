import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";

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
          toast.success("Your message sent!", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        () => {
          toast.error("Failed, please try again later!", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
    // reset
    e.target.querySelector(".name").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".message").value = "";
  };

  return (
    <div className="contact container mx-auto mt-40 min-h-screen">
      <h2 className="text-5xl text-center font-medium  ">Contact Us</h2>
      <form
        onSubmit={sendEmail}
        className="contact-form flex flex-col gap-8 mx-auto max-w-screen-md mt-20"
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
            required
            className="name  bg-transparent border border-gray-600 focus:border-gray-300 py-4 px-6 rounded-xl outline-none duration-300"
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
            required
            className="email bg-transparent border border-gray-600 focus:border-gray-300 py-4 px-6 rounded-xl outline-none duration-300"
          />
        </div>

        <div className="form-control flex flex-col gap-2">
          <label htmlFor="message" className="cursor-pointer">
            Message
          </label>
          <textarea
            placeholder="Write your message"
            required
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
