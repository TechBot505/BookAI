import React from "react";

function Hero() {
  return (
    <div className="font-sans py-16 pt-20 dark:bg-gradient-to-r from-start to-end h-full">
      <div className="text-center max-w-6xl max-md:max-w-md mx-auto">
        <div>
          <h2 className="text-gray-800 dark:text-white md:text-5xl text-4xl font-bold mb-4">
            Explore the Possibilities of{" "}
            <span class="bg-gradient-to-r from-purple-600 to-purple-900 text-transparent bg-clip-text">AI Book Writing</span> with BookAI
          </h2>
          <div className="md:max-w-lg mx-auto">
            <p className="text-gray-600 text-center dark:text-gray-300 mt-8 text-lg leading-relaxed">
              Unleash the power of AI to create captivating books in minutes.
              Download, Distribute wherever you want. Generate unlimited free
              books
            </p>
          </div>
          <div className="mt-12 flex gap-x-6 gap-y-4 justify-center max-sm:flex-col">
            <button
              type="button"
              className="bg-gradient-to-r from-indigo-500 to-sky-500 hover:-translate-y-2 transition-all duration-300 text-white font-bold text-md rounded-full px-6 py-3"
            >
              Get Started
            </button>
            <button
              type="button"
              className="bg-gradient-to-r from-indigo-500 to-sky-500 hover:-translate-y-2 transition-all duration-300 text-white font-bold text-md rounded-full px-6 py-3"
            >
              Get API Access
            </button>
          </div>
          <div className="mx-auto mt-4">
            <p className="dark:text-amber-200 text-purple-500 text-center my-6 text-md leading-relaxed">
              Attention: TryBookAI has been acquired by Indicus AI. Indicus LLM
              will be used for text and image generation
            </p>
          </div>
          <div className="max-w-6xl mx-auto bg-gradient-to-r from-purple-800 to-secondary dark:bg-secondary dark:bg-opacity-70 rounded-lg shadow-lg p-10 mt-24 font-[sans-serif] overflow-visible">
            <img
              src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/book2.png"
              className="w-full rounded-lg hover:cursor-pointer hover:scale-105 transition"
              alt="hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
