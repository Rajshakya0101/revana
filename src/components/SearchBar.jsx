import React, { useState } from "react";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const urlRegex =
    /^(https?:\/\/)?([\w\-]+\.)+[a-z]{2,}(\/[\w\-._~:\/?#[\]@!$&'()*+,;=]*)?$/i;

  const handleAnalyze = () => {
    if (!inputValue.trim()) {
      setModalMessage("Please paste your product link into the input field");
      setIsModalOpen(true);
    } else if (!urlRegex.test(inputValue)) {
      setModalMessage("Please enter a valid URL");
      setIsModalOpen(true);
    } else {
      setModalMessage(
        `Customer Feedback and reviews.\nRight now this functionality is under development.`
      );
      setIsModalOpen(true);
      // Perform additional actions, like fetching reviews.
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Clear input field
  const clearInput = () => {
    setInputValue("");
  };

  return (
    <div className="flex justify-start w-full">
      <label
        className="relative w-full flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
        htmlFor="search-bar"
      >
        {/* Input field */}
        <input
          id="search-bar"
          placeholder="Paste your link here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
        />

        {/* Cross button inside the input */}
        {inputValue && (
          <button
            className="relative right-2 top-2 transform -translate-y-1/2 text-gray-400 focus:outline-none"
            onClick={clearInput}
            aria-label="Clear input"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width="15"
              height="15"
            >
              <line
                x1="10"
                y1="10"
                x2="90"
                y2="90"
                stroke="black"
                stroke-width="10"
                stroke-linecap="round"
              />
              <line
                x1="90"
                y1="10"
                x2="10"
                y2="90"
                stroke="black"
                stroke-width="10"
                stroke-linecap="round"
              />
            </svg>
          </button>
        )}

        {/* Analyze button */}
        <button
          className="w-full md:w-auto px-6 py-3 bg-black hover:bg-white border-black text-white hover:text-black fill-white active:scale-95 duration-100 border-2 will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70 focus:outline-none"
          onClick={handleAnalyze}
        >
          <div className="relative">
            <div className="flex items-center transition-all opacity-1">
              <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                Analyze
              </span>
            </div>
          </div>
        </button>
      </label>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 focus:outline-none"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p>
              {modalMessage.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>

            <button
              className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 focus:outline-none"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
