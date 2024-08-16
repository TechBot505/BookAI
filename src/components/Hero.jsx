import React from "react";

function Hero() {
  return (
    <div className="font-sans py-20 dark:bg-primary h-full">
      <div className="text-center max-w-6xl max-md:max-w-md mx-auto">
        <div>
          <h2 className="text-gray-800 dark:text-white md:text-5xl text-4xl font-bold mb-4">
            Explore the Possibilities of{" "}
            <span class="text-purple-700">AI Book Writing</span> with BookAI
          </h2>
          <div className="md:max-w-xl mx-auto">
            <p className="text-gray-600 text-center dark:text-gray-300 mt-8 text-lg leading-relaxed">
              Unleash the power of AI to create captivating books in minutes.
              Download, Distribute wherever you want. Generate unlimited free
              Books
            </p>
          </div>
          <div className="mt-12 flex gap-x-6 gap-y-4 justify-center max-sm:flex-col">
            <button
              type="button"
              className="bg-purple-600 hover:bg-transparent hover:text-purple-600 border border-purple-600 transition-all text-white font-bold text-sm rounded-full px-6 py-3"
            >
              Get Started
            </button>
            <button
              type="button"
              className="bg-purple-600 hover:bg-transparent hover:text-purple-600 border border-purple-600 transition-all text-white font-bold text-sm rounded-full px-6 py-3"
            >
              Get API Access
            </button>
          </div>
          <div className="mx-auto mt-4">
            <p className="dark:text-amber-200 text-amber-500 text-center my-6 text-md leading-relaxed">
              Attention: TryBookAI has been acquired by Indicus AI. Indicus LLM
              will be used for text and image generation
            </p>
          </div>
          <div className="max-w-6xl mx-auto bg-purple-900 bg-opacity-20 rounded-lg shadow-lg p-10 mt-24 font-[sans-serif] overflow-visible">
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
