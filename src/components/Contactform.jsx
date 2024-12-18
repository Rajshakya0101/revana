import React, { useState } from "react";

export default function Contactform() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // For loader
  const [modalMessage, setModalMessage] = useState(""); // For modal message
  const [showModal, setShowModal] = useState(false); // For modal visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate input fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setModalMessage("Please fill all the required fields");
      setShowModal(true);
      return;
    }

    setLoading(true); // Start loading
    const scriptURL = "https://script.google.com/macros/s/AKfycbyhdDMkLgRcW9TTBJZJMqAsTggCI7uNwf-xv5Q5InhVV41nM_lPxxap18R0OZfmVJo7/exec";

    try {
      const form = event.target;
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
      });

      if (response.ok) {
        setModalMessage("Your connection request has been sent successfully! We will try to connect you soon.");
        setShowModal(true);
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
      } else {
        setModalMessage("Something went wrong. Please try again.");
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error!", error.message);
      setModalMessage("An error occurred while submitting the form. Please try again later.");
      setShowModal(true);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center sm:py-8">
        <div className="relative py-3 sm:max-w-md sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-4 sm:skew-y-0 sm:-rotate-3 sm:rounded-2xl"></div>
          <div className="text-white relative px-4 py-8 bg-indigo-400 shadow-lg sm:rounded-2xl sm:p-16">
            <div className="text-center pb-4">
              <h1 className="text-2xl">Contact Us!</h1>
              <p className="text-gray-300 text-sm">
                Fill out the form below to send us a message.
              </p>
            </div>

            <form onSubmit={handleSubmit} name="contact-form">
              <input
                className="shadow mb-3 appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

              <input
                className="shadow mb-3 appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

              <input
                className="shadow mb-3 appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />

              <textarea
                className="shadow mb-3 appearance-none border rounded h-40 w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Type your message here..."
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <div className="flex justify-between">
                <button
                  className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin h-5 w-5 mr-2 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send ➤"
                  )}
                </button>

                <input
                  className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                  type="reset"
                  onClick={() => setFormData({ name: "", email: "", subject: "", message: "" })}
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm text-center">
            <p className="text-gray-800 text-lg">{modalMessage}</p>
            <button
              className="mt-4 bg-black hover:bg-gray-400 text-white py-2 px-4 rounded"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
