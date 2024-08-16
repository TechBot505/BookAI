import React, { useState, useEffect } from "react";

function Navbar() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <nav className="bg-gray-50 border-gray-200 dark:bg-gradient-to-r from-start to-end">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 py-8">
        <div
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={require("../assets/bookai.jpeg")}
            className="h-10 rounded-full"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            BookAI
          </span>
        </div>
        <div className="flex md:order-2 space-x-3 md:space-x-0 gap-8 rtl:space-x-reverse">
        <label class="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            class="sr-only peer"
            onClick={toggleTheme}
          />
          <div class="relative w-14 h-7 bg-gray-200 rounded-full peer dark:bg-purple-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-purple-500"></div>
        </label>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-indigo-500 to-sky-500 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-3 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-blue-800"
          >
            Login / Signup
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-50 dark:bg-primary dark:border-purple-700">
            <li>
              <a
                href="/"
                className="block py-2 px-3 md:p-0 rounded text-purple-700 dark:hover:text-purple-400 md:dark:text-gray-100"
                aria-current="page"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 md:p-0 rounded text-purple-700 dark:hover:text-purple-400 md:dark:text-gray-100"
                aria-current="page"
              >
                How it Works
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 md:p-0 rounded text-purple-700 dark:hover:text-purple-400 md:dark:text-gray-100"
                aria-current="page"
              >
                Roadmap
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 md:p-0 rounded text-purple-700 dark:hover:text-purple-400 md:dark:text-gray-100"
              >
                API
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 md:p-0 rounded text-purple-700 dark:hover:text-purple-400 md:dark:text-gray-100"
              >
                Price
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 md:p-0 rounded text-purple-700 dark:hover:text-purple-400 md:dark:text-gray-100"
              >
                Models
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
