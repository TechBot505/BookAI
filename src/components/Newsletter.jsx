import React from "react";

function Newsletter() {
  return (
    <div className="dark:bg-primary flex justify-center items-center py-12">
      <div class="flex rounded-xl bg-[#2e0249] py-8 px-6 font-[sans-serif]">
        <div class="max-w-6xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6 text-white">
            Stay Updated
          </h2>
          <p class="text-base text-gray-300">
          Subscribe to our newsletter for the latest AI writing tips and BookAI updates.
          </p>
          <div class="mt-12 flex items-center overflow-hidden bg-gray-50 rounded-md max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              class="w-full bg-transparent py-3 px-4 text-gray-800 text-base focus:outline-none"
            />
            <button class="bg-[#a91079] hover:bg-[#a91079e2] text-white text-base tracking-wide py-3 px-6 hover:shadow-md hover:transition-transform transition-transform hover:scale-105 focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
