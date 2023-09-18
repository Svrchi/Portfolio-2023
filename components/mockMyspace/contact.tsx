import React from "react";
import Link from "next/link";

type Props = {};

const contact = (props: Props) => {
  return (
    <div
      id="contact-container"
      className="border-myspace-blue border-2 w-5/6 h-1/5 relative min-h-[150px]"
    >
      <div className="bg-myspace-blue h-48} ">
        <p className="text-white font-bold pl-5 ">Contacting Kevin</p>{" "}
      </div>
      <div className="flex relative font-Pixel w-full h-full max-h-[85%]  top-0 left-0">
        {/* ////////////////////////////LEFT SPAN //////////////////////////////////////////// */}
        <span className=" flex flex-col justify-around w-1/2 absolute  h-full ">
          <div className="flex ml-4 items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 20"
              fill="none"
              stroke="#ff6705"
              stroke-width="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <Link
              className="text-blue-600 ml-2 z-20"
              href="https://www.linkedin.com/in/kevin-sarchi/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Send Message
            </Link>
          </div>
          <div className="flex ml-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ff6705"
              stroke-width="2"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <Link
              className="text-blue-600 ml-2 z-20"
              href="https://www.linkedin.com/in/kevin-sarchi/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Add to Friends
            </Link>
          </div>
          <div className="flex ml-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ff6705"
              stroke-width="2"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <Link
              className="text-blue-600 ml-2 z-20"
              href="https://www.linkedin.com/in/kevin-sarchi/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Skills
            </Link>{" "}
          </div>
          <div className="flex ml-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ff6705"
              stroke-width="2"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <Link
              className="text-blue-600 ml-2 z-20"
              href="https://github.com/svrchi"
              rel="noopener noreferrer"
              target="_blank"
            >
              Experience
            </Link>
          </div>
        </span>
        {/* ////////////////////////////// RIGHT SPAN ////////////////////////////////////////// */}
        <span className="w-1/2 h-full absolute"></span>
      </div>
    </div>
  );
};

export default contact;
