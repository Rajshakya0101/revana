import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/navbar.css";

export default function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav>
      <div
        className={`fixed top-0 z-50 w-full px-32 py-1 pt-2 flex justify-between items-center bg-white transition-shadow duration-300 ${
          hasShadow ? "shadow-on-scroll" : ""
        }`}
      >
        <Link to="/">
          <strong className="cookie-regular text-blue-800 text-5xl font-extrabold drop-shadow-sm">
            Revana
          </strong>
        </Link>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            aria-label="Toggle mobile menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-6">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`text-sm ${
                isActive(item.path)
                  ? "text-[#4f46e5] font-bold"
                  : "text-gray-400 hover:text-gray-500"
              }`}
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      {isMobileMenuOpen && (
        <div className="navbar-menu fixed inset-0 bg-white z-50">
          <div className="flex flex-col p-6">
            <button
              className="self-end mb-4"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              <svg
                className="h-6 w-6 text-gray-400 hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul>
              {menuItems.map((item) => (
                <li key={item.name} className="mb-2">
                  <Link
                    to={item.path}
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
