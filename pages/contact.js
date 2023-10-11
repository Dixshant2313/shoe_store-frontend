import React from "react";

const contact = () => {
  return (
    <React.Fragment>
      <div
        name="contact"
        className="w-full min-h-screen p-4 bg-gradient-to-b from-white to-gray-200"
      >
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-4">
            <p className="py-6 text-center font-bold text-lg">
              Submit the form below to get in touch with us
            </p>
          </div>

          <div className="flex justify-center items-center">
            <form
              action="https://getform.io/f/0eef771e-db86-4b5b-ab5f-1c5611f0e771"
              method="POST"
              className="flex flex-col w-full md:w-1/2 "
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 border-gray-400 rounded-md focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="p-2 my-4 bg-transparent border-2 border-gray-400 rounded-md focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                className="p-2 bg-transparent border-2 border-gray-400 rounded-md focus:outline-none"
              ></textarea>

              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default contact;