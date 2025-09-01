import React from "react";
import Team from "./OurTeam";

export default function About() {
  return (
    <>
      <div class="sm:flex items-center max-w-screen-xl mt-10">
        <div class="sm:w-1/2 p-10">
          <div class="image object-center text-center">
            <img src="https://nexmatrixlab.com/wp-content/uploads/2022/08/wwa-02.png" />
          </div>
        </div>
        <div class="sm:w-1/2 p-5">
          <div class="text">
            <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">
              About us
            </span>
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">
              About <span class="text-indigo-600">Our App</span>
            </h2>
            <p class="text-gray-700">
            At Revana, we're dedicated to helping Users to make informed purchasing decisions. Our platform collects and analyzes genuine customer reviews from trusted e-commerce websites, allowing you to compare products and find the best options for your needs. We believe that the right feedback can transform your shopping experience, and we're here to empower you with the tools to choose wisely. Shop smarter with us today!
            </p>
          </div>
        </div>
      </div>
      <Team />
    </>
  );
}
