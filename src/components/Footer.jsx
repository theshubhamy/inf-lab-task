import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className="pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">
                <Link
                  exact="true"
                  to="/"
                  className="flex items-center text-3xl px-3 py-2 font-bold rounded-md"
                >
                  <span className="text-cyan-600 px-2">Shubham</span>
                </Link>
              </h4>
              <p className="max-w-md mt-2 px-4 text-lg text-left text-gray-700">
                A passionate Full Stack Developer having an experience of
                building Web and Mobile applications with JavaScript / ReactJS /
                NextJS / NodeJS / ExpressJS / React Native and some other cool
                libraries and frameworks.
              </p>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top ">
                <div className="w-full lg:w-4/12 px-4 text-left">
                  <span className="block uppercase text-gray-900 text-lg font-semibold mb-2">
                    <Link to="">Link</Link>
                  </span>
                  <ul className="list-unstyled">
                    <Link
                      to=""
                      className="block mt-2 text-base font-semibold text-gray-600 dark:text-gray-400 hover:underline"
                    >
                      Home
                    </Link>
                    <li>
                      <Link
                        to=""
                        className="block mt-2 text-base font-semibold text-gray-600 dark:text-gray-400 hover:underline"
                      >
                        about
                      </Link>
                    </li>
                    <li>
                      <Link
                        exact="true"
                        to=""
                        className="block mt-2 text-base font-semibold text-gray-600 dark:text-gray-400 hover:underline"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4 text-left">
                  <span className="block uppercase text-gray-900 text-lg font-semibold mb-2">
                    Other
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        exact
                        className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-lg"
                        to=""
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        exact
                        className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-lg"
                        to=""
                      >
                        Privacy & Policy
                      </Link>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-lg"
                        href="#Contact"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
