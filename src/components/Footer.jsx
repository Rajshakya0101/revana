import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // New state for modal

  const handleIconClick = () => {
    setIsModalOpen(true); // Open the modal when an icon is clicked
  };

  return (
    <>
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-blueGray-700">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Find us on any of these platforms.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6 flex">
                <button
                  className="bg-white hover:bg-blue-100 text-blueGray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2 transition-transform transform hover:scale-125 duration-200 ease-in"
                  type="button"
                  onClick={handleIconClick} // Trigger modal on click
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="bg-white hover:bg-blue-100 text-blueGray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2 transition-transform transform hover:scale-125 duration-200 ease-in"
                  type="button"
                  onClick={handleIconClick} // Trigger modal on click
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button
                  className="bg-white hover:bg-blue-100 text-blueGray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2 transition-transform transform hover:scale-125 duration-200 ease-in"
                  type="button"
                  onClick={handleIconClick} // Trigger modal on click
                >
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2 underline underline-offset-4">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/about"
                      >
                        About Us
                      </Link>
                    </li>
                    <Link to="/services">
                      <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                        Services
                      </li>
                    </Link>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2 underline underline-offset-4">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <button
                        onClick={() => setIsTermsOpen(true)}
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm focus:outline-none"
                      >
                        Terms &amp; Conditions
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setIsPrivacyOpen(true)}
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm focus:outline-none"
                      >
                        Privacy Policy
                      </button>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/contact"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  className="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cluster Innovation Center
                </a>{" "}
                {/* by{" "}
                <a
                  href="https://www.linkedin.com/in/raj-shakya-8b205225b"
                  target="__blank__"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  Raj Shakya
                </a>
                . */}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Terms and Conditions Modal */}
      {isTermsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Terms & Conditions
              </h2>
              <p className="text-gray-600 mb-4">
                Welcome to our platform! By using our app, you agree to comply
                with the following terms and conditions. Please read them
                carefully before using our services.
              </p>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                1. Acceptance of Terms
              </h3>
              <p className="text-gray-600 mb-4">
                By accessing or using our platform, you confirm your acceptance
                of these terms. If you do not agree, you may not use our
                services.
              </p>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                2. Use of Services
              </h3>
              <p className="text-gray-600 mb-4">
                Our platform allows you to explore product reviews, customer
                feedback, and curated product choices. You agree not to misuse
                or exploit the services in any way.
              </p>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                3. Intellectual Property
              </h3>
              <p className="text-gray-600 mb-4">
                All content, logos, and designs provided on this platform are
                the intellectual property of the company. Unauthorized use is
                strictly prohibited.
              </p>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                4. Privacy Policy
              </h3>
              <p className="text-gray-600 mb-4">
                We are committed to protecting your privacy. By using our
                services, you agree to the collection and use of information as
                outlined in our{" "}
                <span
                  className="text-blue-600 underline cursor-pointer"
                  onClick={() => setIsPrivacyOpen(true)}
                >
                  Privacy Policy
                </span>
                .
              </p>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                5. Limitation of Liability
              </h3>
              <p className="text-gray-600 mb-4">
                We are not liable for any direct, indirect, or consequential
                damages arising from your use of the platform.
              </p>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                6. Changes to Terms
              </h3>
              <p className="text-gray-600 mb-4">
                We reserve the right to update these terms at any time. Please
                review this page periodically for updates.
              </p>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                7. Governing Law
              </h3>
              <p className="text-gray-600 mb-4">
                These terms are governed by the laws of [Your Country/State].
                Any disputes will be resolved in accordance with these laws.
              </p>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                8. Contact Us
              </h3>
              <p className="text-gray-600 mb-4">
                If you have any questions about these terms, please{" "}
                <a href="/contact" className="text-blue-600 underline">
                  contact us
                </a>
                .
              </p>
              <button
                className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none"
                onClick={() => setIsTermsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Privacy Policy
              </h2>
              <p className="text-gray-600 mb-4">
                At [Your App Name], we value your privacy. This Privacy Policy
                outlines how we collect, use, and protect your information when
                you use our services. By using our app, you consent to the
                practices described in this policy.
              </p>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                1. Information Collection
              </h3>
              <p className="text-gray-600 mb-4">
                We collect personal information, including but not limited to
                your name, email address, and browsing history, when you use our
                platform. This data is used to improve your user experience and
                provide personalized content.
              </p>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                2. Information Use
              </h3>
              <p className="text-gray-600 mb-4">
                Your information is used to provide you with relevant product
                reviews, feedback, and other personalized recommendations. We
                may also use your information to improve the functionality of
                the app and communicate with you about updates or new features.
              </p>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                3. Data Security
              </h3>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational measures
                to safeguard your personal data. However, no method of
                transmission over the internet is 100% secure, and we cannot
                guarantee absolute security.
              </p>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                4. Third-Party Services
              </h3>
              <p className="text-gray-600 mb-4">
                We may use third-party services (such as analytics or
                advertising platforms) that collect information to improve the
                app’s performance and your experience. These third parties may
                have their own privacy policies, and we encourage you to review
                them.
              </p>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                5. Cookies
              </h3>
              <p className="text-gray-600 mb-4">
                We use cookies to enhance your user experience, analyze site
                traffic, and personalize content. By using our services, you
                consent to our use of cookies.
              </p>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                6. Your Rights
              </h3>
              <p className="text-gray-600 mb-4">
                You have the right to access, update, and delete your personal
                information. If you wish to exercise these rights, please
                contact us through the app or our website.
              </p>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                7. Changes to the Privacy Policy
              </h3>
              <p className="text-gray-600 mb-4">
                We may update this Privacy Policy from time to time. Any changes
                will be reflected on this page with an updated revision date. We
                encourage you to review this policy periodically.
              </p>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                8. Contact Us
              </h3>
              <p className="text-gray-600 mb-4">
                If you have any questions or concerns about our privacy
                practices, please{" "}
                <a href="/contact" className="text-blue-600 underline">
                  contact us
                </a>
                .
              </p>
              <button
                className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none"
                onClick={() => setIsPrivacyOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Under Development Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Under Development
            </h2>
            <p className="text-gray-600 mb-4">
              This feature is under development. Stay tuned!
            </p>
            <button
              className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
