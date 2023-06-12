import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const App = () => {
  const fromHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <>
      <Header />
      <div className="max-w-app mx-auto my-10">
        {/* herosection */}
        <div className="flex justify-between items-center flex-col md:px-8 gap-4  px-2 md:flex-row ">
          <div className=" flex flex-col items-start  w-full md:w-1/2  gap-4">
            <h2 className="uppercase font-bold  text-3xl md:text-4xl text-cyan-400">
              WELCOME TO MY WORLD
            </h2>
            <h1 className="capitalize text-2xl font-semibold">
              Hey! i'm Shubham,
            </h1>
            <h2 className="capitalize text-2xl font-semibold">
              Software Developer
            </h2>
            <p className="text-base font-medium">
              A passionate Full Stack Developer having an experience of building
              Web and Mobile applications with JavaScript / ReactJS / NextJS /
              NodeJS / ExpressJS / React Native and some other cool libraries
              and frameworks.
            </p>
          </div>
          <div className=" w-full md:w-1/2 md:p-4 flex justify-center md:justify-end items-center">
            <img
              className="rounded shadow  h-full w-full md:h-3/4 md:w-3/4 "
              src={"https://theshubham.dev/img/shubhamimages.png"}
              alt="heroImage"
            />
          </div>
        </div>
        {/* about section */}
        <div id="about" className="flex justify-center items-center my-4">
          <h1 className="text-5xl  text-center font-bold px-3 text-cyan-400">
            About Us
          </h1>
        </div>
        <div className="flex justify-between items-center flex-col md:flex-row  px-2 md:px-8 my-8">
          <div className="aspect-w-16 aspect-h-9 lg:aspect-none w-full md:w-1/2 object-cover ">
            <video
              style={{
                height: "420px",
                width: "480px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
              autoPlay
              loop
              muted
              controls
            >
              <source src="./assets/demoVideo.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="flex flex-col  w-full md:w-1/2  gap-4">
            <div className="flex justify-center flex-col items-center">
              {" "}
              <h2 className="capitalize text-4xl text-cyan-400 text-center font-semibold">
                Shubham kumar
              </h2>
              <h2 className="capitalize text-xl   text-center font-semibold">
                Software Developer
              </h2>
            </div>

            <p className="text-base font-medium">
              A passionate Full Stack Developer having an experience of building
              Web and Mobile applications with JavaScript / ReactJS / NextJS /
              NodeJS / ExpressJS / React Native and some other cool libraries
              and frameworks.
            </p>
            <p>
              As a skilled Frontend Developer, I bring a wealth of technical
              expertise: Mastery of JavaScript, with a focus on both React Js
              and Next Js for seamless web application development. Fluent
              proficiency in utilizing HTML and CSS for crafting intuitive and
              visually stunning UIs. Hands-on experience in leveraging RESTful
              APIs, JSON and Networking for seamless app integration, as well as
              in-depth knowledge of key application methodology Agile and SOAP.
              Expertise in utilizing JavaScript and Typescript for effective and
              efficient Asynchronous Programming, as well as extensive
              experience with industry-standard tools like Jest for testing.
              With my comprehensive skill set and passion for innovation, I'm
              poised to take on any challenge and drive your projects to new
              heights.
            </p>
          </div>
        </div>
        {/* contact */}
        <div id="contact" className="mx-auto  px-2 md:px-8 my-8 ">
          <div className="flex justify-center items-center">
            <h1 className="text-5xl  text-center font-bold px-3 text-cyan-400">
              Get in Touch!
            </h1>
          </div>
          <div className="w-full  grid grid-cols-1 md:grid-cols-2 md:px-10 px-4   py-10  bg-white text-gray-900">
            <div className="flex flex-col justify-start items-start">
              <div className="px-4">
                <h2 className="  text-2xl md:text-4xl  font-bold leading-tight">
                  Lets talk about everything!
                </h2>
                <div className="  text-gray-700 mt-8 text start">
                  <span className="text-center items-center">
                    <Link
                      target="_blank"
                      href="tel:+917992257628"
                      rel="noopener noreferrer"
                      className="flex gap-2  px-4 py-2 text-lg items-center hover:underline font-medium text-gray-900"
                    >
                      <MapPinIcon className="w-6 h-6 text-cyan-500" />
                      <p>JP Nagar, Bangalore - 560076</p>
                    </Link>
                  </span>
                  <span className="text-center items-center">
                    <Link
                      target="_blank"
                      to="tel:+917992257628"
                      rel="noopener noreferrer"
                      className="flex  px-4 py-2 gap-2 text-lg items-center hover:underline font-medium text-gray-900"
                    >
                      <PhoneIcon className="w-6 h-6 text-cyan-500" />
                      <p>+91 9608213718</p>
                    </Link>
                  </span>
                  <span className=" ">
                    <Link
                      target="_blank"
                      to="mailto:devshubhamyadav@gmail.com"
                      rel="noopener noreferrer"
                      className="flex  px-4 py-2 gap-2 text-lg hover:underline  items-center font-medium text-gray-900"
                    >
                      <EnvelopeIcon className="w-6 h-6 text-cyan-500" />
                      <p>devshubhamyadav@gmail.com</p>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <form onSubmit={fromHandler}>
              <div>
                <label className="text-lg text-cyan-600 font-bold">
                  {" "}
                  Full Name
                </label>
                <input
                  className="w-full  bg-gray-50 text-gray-900  p-3 rounded-lg  border-gray-400  placeholder-gray-700  focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                  type="text"
                  name="user_name"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="mt-2">
                <label className=" text-lg text-cyan-600 font-bold">
                  Email
                </label>
                <input
                  className="w-full  bg-gray-50 text-gray-900  p-3 rounded-lg  border-gray-400  placeholder-gray-700  focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                  type="email"
                  name="user_email"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mt-2">
                <label className=" text-lg text-cyan-600 font-bold">
                  Phone
                </label>
                <input
                  className="w-full  bg-gray-50 text-gray-900  p-3 rounded-lg  border-gray-400  placeholder-gray-700  focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                  type="number"
                  name="user_phone"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mt-2">
                <label className="text-lg text-cyan-600 font-bold">
                  Message
                </label>
                <textarea
                  className="w-full h-24 bg-gray-50 text-gray-900  p-3 rounded-lg  border-gray-400  placeholder-gray-700  focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                  autoComplete="off"
                  name="user_message"
                  required
                ></textarea>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className=" text-2xl font-semibold  bg-cyan-400 text-gray-900 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
