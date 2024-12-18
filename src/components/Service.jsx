import React from "react";

export default function Service() {
  return (
    <>
      <section
        style={{ background: "linear-gradient(to right, #dbeafe, #9333ea)" }}
        class="pb-16"
      >
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
                <div class="px-4 flex-auto"></div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap items-center mt-16">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i class="fas fa-user-friends text-xl"></i>
              </div>
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                What we do!
              </h3>
              <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                We help you make smarter and more confident shopping decisions
                by providing easy access to genuine customer reviews. We
                aggregate feedback from trusted e-commerce platforms like Amazon
                and Flipkart, analyze product sentiments, and offer side-by-side
                comparisons to help you understand the pros and cons of each
                product.
              </p>
              <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                Our personalized recommendations ensure that you find the best
                options tailored to your needs.
              </p>
            </div>
            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div class="relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg rounded-lg bg-pink-500">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="text-pink-500 fill-current"
                    ></polygon>
                  </svg>

                  {/* <h4 class="text-xl font-bold text-black">
                    Top Notch Services
                  </h4> */}
                  <p class="text-md font-light mt-2 text-white">
                    We transform the way you shop by providing the insights you
                    need to choose wisely and avoid buyer’s remorse.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        id="services"
        class="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white"
      >
        <div class="container xl:max-w-6xl mx-auto px-4">
          <header class="text-center mx-auto mb-12 lg:px-20">
            <h2 class="text-4xl leading-normal mb-2 font-bold text-black flex items-center">
              <span class="flex-grow border-t border-gray-300 mr-4 mt-2 sm:mr-2 md:mr-4 lg:mr-6"></span>
              Our Services
              <span class="flex-grow border-t border-gray-300 ml-4 mt-2 sm:ml-2 md:ml-4 lg:ml-6"></span>
            </h2>

            <p class="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
              An easy and reliable way to make smarter shopping decisions
            </p>
          </header>
          <div class="flex flex-wrap flex-row -mx-4 text-center">
            <div
              class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              // style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;"
            >
              <div class="py-8 px-12 mb-12 bg-gray-50 border-t border-gray-300 transform transition duration-300 ease-in-out hover:-translate-y-2 rounded-xl">
                <div class="inline-block text-gray-900 mb-4 max-w-48 h-auto">
                  <img src="/images/productreviewaggregation.png" alt="" />
                </div>
                <h3 class="text-lg leading-normal mb-2 font-semibold text-black">
                  Product Review Aggregation
                </h3>
                <p class="text-gray-500">
                  We gather genuine customer reviews from leading e-commerce
                  platforms like Amazon and Flipkart, helping you compare
                  products with real feedback.
                </p>
              </div>
            </div>
            <div
              class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".1s"
              // style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInUp;"
            >
              <div class="py-8 px-12 mb-12 bg-gray-50 border-t border-gray-300 transform transition duration-300 ease-in-out hover:-translate-y-2 rounded-xl">
                <div class="inline-block text-gray-900 mb-4 max-w-48 h-auto">
                  <img src="/images/customerfeedbackanalysis.png" alt="" />
                </div>
                <h3 class="text-lg leading-normal mb-2 font-semibold text-black">
                  Customer Feedback Analysis
                </h3>
                <p class="text-gray-500">
                  Our platform processes and analyzes reviews to provide you
                  with detailed insights, highlighting strengths and weaknesses
                  of each product.
                </p>
              </div>
            </div>
            <div
              class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
              // style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInUp;"
            >
              <div class="py-8 px-12 mb-12 bg-gray-50 border-t border-gray-300 transform transition duration-300 ease-in-out hover:-translate-y-2 rounded-xl">
                <div class="inline-block text-gray-900 mb-4 max-w-32 h-auto">
                  <img src="/images/curatedproductchoice.png" alt="" />
                </div>
                <h3 class="text-lg leading-normal mb-2 font-semibold text-black">
                  Curated Product Choices
                </h3>
                <p class="text-gray-500">
                  Based on customer reviews and ratings, we suggest products
                  that align with your preferences and needs, guiding you toward
                  the best options available.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div
                class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                // style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;"
              >
                <div class="py-8 px-12 mb-12 bg-gray-50 border-t border-gray-300 transform transition duration-300 ease-in-out hover:-translate-y-2 rounded-xl">
                  <div class="inline-block text-gray-900 mb-4 max-w-32 h-auto">
                    <img src="/images/userfriendly.png" alt="" />
                  </div>
                  <h3 class="text-lg leading-normal mb-2 font-semibold text-black">
                    User-Friendly Interface
                  </h3>
                  <p class="text-gray-500">
                    A simple and intuitive interface that allows you to quickly
                    input product URLs and access insightful reviews to make
                    informed purchasing decisions.
                  </p>
                </div>
              </div>
              <div
                class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
                // style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInUp;"
              >
                <div class="py-8 px-12 mb-12 bg-gray-50 border-t border-gray-300 transform transition duration-300 ease-in-out hover:-translate-y-2 rounded-xl">
                  <div class="inline-block text-gray-900 mb-4 max-w-32 h-auto">
                    <img src="/images/crossplatform.png" alt="" />
                  </div>
                  <h3 class="text-lg leading-normal mb-2 font-semibold text-black">
                    Cross-Platform Accessibility
                  </h3>
                  <p class="text-gray-500">
                    Access product reviews and insights seamlessly across all
                    devices—whether you're on your phone, tablet, or
                    computer—anytime, anywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
