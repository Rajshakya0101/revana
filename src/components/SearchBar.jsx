import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto"; // Automatically imports necessary chart.js components
import WordCloud from "react-wordcloud";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Import a spinner icon

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [loading, setLoading] = useState(false);

  const urlRegex =
    /^(https?:\/\/)?([\w\-]+\.)+[a-z]{2,}(\/[\w\-._~:\/?#[\]@!$&'()*+,;=]*)?$/i;

  const backendUrl = "https://revana-backend.onrender.com/scrape_reviews"; // Replace with your backend endpoint

  const handleAnalyze = async () => {
    if (!inputValue.trim()) {
      setModalContent("Please paste your product link into the input field");
      setIsModalOpen(true);
      return;
    }

    if (!urlRegex.test(inputValue)) {
      setModalContent("Please enter a valid URL");
      setIsModalOpen(true);
      return;
    }

    setLoading(true); // Show loading state

    try {
      const response = await fetch(backendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: inputValue }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data from the backend");
      }

      const data = await response.json();
      const { wordcloud_text, sentiment_distribution, rating_distribution } =
        data;

      // Prepare word cloud options and data
      const wordCloudOptions = {
        rotations: 2,
        rotationAngles: [-90, 0],
        fontSizes: [12, 50],
      };

      const wordCloudData = wordcloud_text
        .split(" ")
        .map((word) => ({ text: word, value: Math.random() * 100 }));

      // Prepare sentiment distribution data for Bar chart
      const sentimentData = {
        labels: Object.keys(sentiment_distribution),
        datasets: [
          {
            label: "Sentiment Distribution",
            data: Object.values(sentiment_distribution),
            backgroundColor: ["#28a745", "#6c757d", "#dc3545"], // Colors for positive, neutral, negative
          },
        ],
      };

      // Prepare rating distribution data for Bar chart
      const ratingData = {
        labels: Object.keys(rating_distribution),
        datasets: [
          {
            label: "Rating Distribution",
            data: Object.values(rating_distribution),
            backgroundColor: [
              "#007bff",
              "#ffc107",
              "#28a745",
              "#17a2b8",
              "#fd7e14",
            ], // Colors for ratings 1 to 5
          },
        ],
      };

      setModalContent(
        <div>
          <h2 className="text-lg font-bold">Insights</h2>
          <p>
            <strong>Reviews Scraped:</strong> {data.reviews_scraped}
          </p>
          <div className="mt-4 space-y-4">
            <div>
              <p className="font-bold">Word Cloud:</p>
              <div className="h-[300px]">
                <WordCloud options={wordCloudOptions} words={wordCloudData} />
              </div>
            </div>
            <div>
              <p className="font-bold">Sentiment Distribution:</p>
              <Bar data={sentimentData} />
            </div>
            <div>
              <p className="font-bold">Rating Distribution:</p>
              <Bar data={ratingData} />
            </div>
          </div>
        </div>
      );
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching data:", error);
      setModalContent("An error occurred while fetching data.");
      setIsModalOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
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
                strokeWidth="10"
                strokeLinecap="round"
              />
              <line
                x1="90"
                y1="10"
                x2="10"
                y2="90"
                stroke="black"
                strokeWidth="10"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}

        {/* Analyze button */}
        <button
          className="w-full md:w-auto px-6 py-3 bg-black hover:bg-white border-black text-white hover:text-black fill-white active:scale-95 duration-100 border-2 will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70 focus:outline-none"
          onClick={handleAnalyze}
          disabled={loading}
        >
          <div className="relative flex justify-center items-center space-x-2">
            {loading ? (
              <>
                <AiOutlineLoading3Quarters className="animate-spin text-gray-400" />
                <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                  Loading...
                </span>
              </>
            ) : (
              <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                Analyze
              </span>
            )}
          </div>
        </button>
      </label>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 focus:outline-none"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 text-center max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {modalContent}

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
