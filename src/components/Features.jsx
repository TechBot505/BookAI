import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDownload, faLanguage, faBook } from '@fortawesome/free-solid-svg-icons'

function Features() {
  return (
    <div class="bg-gray-100 dark:bg-gradient-to-r from-start to-end py-12 px-4 font-[sans-serif] text-[#333]">
      <div class="max-w-6xl mx-auto">
        <div id="features" class="grid md:grid-cols-4 sm:grid-cols-2 gap-x-8 gap-y-8">
          <div class="flex flex-col mx-auto items-center justify-center transition hover:-translate-y-3">
            <div class="w-16 h-16 bg-gradient-to-r from-purple-600 from-5% to-purple-900 to-70% flex items-center justify-center shrink-0 rounded-full">
              <FontAwesomeIcon icon={faCode} color="white" size="xl" />
            </div>
            <div class="text-center mt-4">
              <p class="text-lg dark:text-white font-bold text-black">
                AI-Powered Writing
              </p>
              <p class="text-md text-gray-900 font-semibold dark:text-gray-200">
                Generate high-quality content with advanced AI technology.
              </p>
            </div>
          </div>
          <div class="flex flex-col mx-auto items-center justify-center transition hover:-translate-y-3">
            <div class="w-16 h-16 bg-gradient-to-r from-purple-600 from-5% to-purple-900 to-70% flex items-center justify-center shrink-0 rounded-full">
            <FontAwesomeIcon icon={faBook} color="white" size="xl" />
            </div>
            <div class="text-center mt-4">
              <p class="text-lg dark:text-white font-bold text-black">
                Custom Genres
              </p>
              <p class="text-md text-gray-900 font-semibold dark:text-gray-200">
                Create stories in any genre or blend multiple styles.
              </p>
            </div>
          </div>
          <div class="flex flex-col mx-auto items-center justify-center transition hover:-translate-y-3">
            <div class="w-16 h-16 bg-gradient-to-r from-purple-600 from-5% to-purple-900 to-70% flex items-center justify-center shrink-0 rounded-full">
            <FontAwesomeIcon icon={faDownload} color="white" size="xl" />
            </div>
            <div class="text-center mt-4">
              <p class="text-lg dark:text-white font-bold text-black">
                Instant Download
              </p>
              <p class="text-md text-gray-900 font-semibold dark:text-gray-200">
                Get your completed book in various formats instantly.
              </p>
            </div>
          </div>
          <div class="flex flex-col mx-auto items-center justify-center transition hover:-translate-y-3">
            <div class="w-16 h-16 bg-gradient-to-r from-purple-600 from-5% to-purple-900 to-70% flex items-center justify-center shrink-0 rounded-full">
            <FontAwesomeIcon icon={faLanguage} color="white" size="xl" />
            </div>
            <div class="text-center mt-4">
              <p class="text-lg dark:text-white font-bold text-black">
                Multilingual
              </p>
              <p class="text-md text-gray-900 font-semibold dark:text-gray-200">
                Generate content in multiple languages effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
