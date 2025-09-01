import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto"; // Automatically imports necessary chart.js components
import WordCloud from "react-wordcloud";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Import a spinner icon

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [loading, setLoading] = useState(false); // For the loading state
  const [buttonText, setButtonText] = useState("Analyze"); // State for the button text

  const urlRegex =
    /^(https?:\/\/)?([\w\-]+\.)+[a-z]{2,}(\/[\w\-._~:\/?#[\]@!$&'()*+,;=]*)?$/i;

  const backendUrl = "https://backend-revana-1.onrender.com/scrape_reviews"; // Replace with your backend endpoint

  const handleAnalyze = async () => {
    if (!inputValue.trim()) {
      setModalContent("Please paste your product link into the input field");
      setIsModalOpen(true);
      return;
    }

    // if (!urlRegex.test(inputValue)) {
    //   setModalContent("Please enter a valid URL");
    //   setIsModalOpen(true);
    //   return;
    // }

    setLoading(true); // Show loading state
    setButtonText("Loading..."); // Default loading message

    let timeoutId;

    try {
      // Set timeout to show "Almost done, Stay tuned!" after 5 seconds
      timeoutId = setTimeout(() => {
        console.log("Almost done, Stay tuned!");
        setButtonText("Almost done, Stay tuned!"); // Change button text after 5 seconds
      }, 20000); // 20 seconds

      const response = await fetch(backendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: inputValue }),
      });

      clearTimeout(timeoutId); // Clear timeout if the response is received before 5 seconds
      setButtonText("Analyze"); // Reset the button text to "Analyze" after response

      if (!response.ok) {
        throw new Error("Failed to fetch data from the Server");
      }

      const data = await response.json();
      const { wordcloud_text, sentiment_distribution, rating_distribution } =
        data;

      // Prepare modal content
      setModalContent(
        <div className="p-4 w-full">
          <h2 className="text-xl font-bold mb-4 underline underline-offset-2">
            Product Details
          </h2>

          {/* Product Details */}
          <div className="mb-6 flex flex-wrap border rounded-md p-4 shadow-lg">
            <div className="w-full md:w-1/2">
              <img
                src={data.product_details["Image URL"]}
                alt="Product"
                className="w-64 h-64 object-contain mx-auto mb-4"
              />
            </div>
            <div className="w-full md:w-1/2 pl-4 text-left">
              <p className="text-xl">
                <strong>Product Name:</strong>{" "}
                {data.product_details["Product Name"]}
              </p>
              <p>
                <strong className="text-2xl">
                  {" "}
                  {data.product_details["Product Price"]}{" "}
                </strong>
              </p>
            </div>
          </div>

          {/* Reviews and Insights */}
          <div>
            <h3 className="text-2xl font-semibold mb-2 underline underline-offset-2">
              Reviews and Insights
            </h3>
            <p>
              <strong>Reviews Scraped:</strong> {data.reviews_scraped}
            </p>

            {/* Word Cloud */}
            <div className="mb-6">
              <h3 className="text-md mt-4 mb-2 font-semibold">Word Cloud</h3>
              <div className="h-[300px] border p-3 rounded-md">
                <WordCloud
                  options={{
                    rotations: 2,
                    rotationAngles: [-90, 0],
                    fontSizes: [12, 50],
                  }}
                  words={data.wordcloud.split(" ").map((word) => ({
                    text: word,
                    value: Math.random() * 100,
                  }))}
                />
              </div>
            </div>

            {/* Sentiment Distribution */}
            <div className="mt-6">
              <p className="font-bold">Sentiment Distribution:</p>
              <Bar
                data={{
                  labels: Object.keys(data.sentiment_distribution),
                  datasets: [
                    {
                      label: "Sentiment Distribution",
                      data: Object.values(data.sentiment_distribution),
                      backgroundColor: ["#dc3545", "#6c757d", "#28a745"],
                    },
                  ],
                }}
              />
            </div>

            {/* Rating Distribution */}
            {Object.values(data.rating_distribution).some(
              (rating) => rating > 0
            ) && (
              <div className="mt-6">
                <p className="font-bold">Rating Distribution:</p>
                <Bar
                  data={{
                    labels: Object.keys(data.rating_distribution),
                    datasets: [
                      {
                        label: "Rating Distribution",
                        data: Object.values(data.rating_distribution),
                        backgroundColor: [
                          "#007bff",
                          "#ffc107",
                          "#28a745",
                          "#17a2b8",
                          "#fd7e14",
                        ],
                      },
                    ],
                  }}
                />
              </div>
            )}
          </div>

          {/* Specifications Table */}
          <div className="my-6">
            <h3 className="text-xl font-bold mb-4 underline underline-offset-2">
              Specifications
            </h3>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border border-gray-300 rounded-md">
                <thead>
                  <tr className="bg-gray-200 text-left">
                    <th className="px-4 py-2 border border-gray-300">Key</th>
                    <th className="px-4 py-2 border border-gray-300">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(data.product_details.Specifications).map(
                    ([key, value], index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                      >
                        <td className="px-4 py-2 border border-gray-300">
                          {key}
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          {value}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
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
      clearTimeout(timeoutId); // Ensure timeout is cleared in finally
      setLoading(false);
      setButtonText("Analyze"); // Reset button text to default
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
          placeholder="Paste your product link here"
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
                  {buttonText}
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
            className="bg-white rounded-lg shadow-lg p-6 text-center max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button (Cross) */}
          <button
            onClick={() => {closeModal(), clearInput()}}
            className="absolute top-15 right-[21rem] hover:opacity-50 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width="20"
              height="20"
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

            {modalContent}
            <br />
            <button
              className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 focus:outline-none"
              onClick={() => {closeModal(), clearInput()}}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
