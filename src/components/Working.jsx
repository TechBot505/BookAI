import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCogs, faMagic, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

function Working() {
  return (
    <div className="dark:bg-gradient-to-r from-start to-end py-8">
      <div id="working" class="max-w-6xl bg-gray-100 dark:bg-secondary dark:bg-opacity-70 mx-auto pb-4 font-[sans-serif] rounded-xl">
        <h2 class="dark:text-white text-3xl font-bold text-center py-6">
          How it Works
        </h2>
        <div class="grid lg:grid-cols-2 md:grid-cols-2 max-md:max-w-lg mx-auto gap-12">
          <div class="p-4 flex gap-6 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300">
            <div className="rounded-full h-12 w-12 items-center flex justify-center bg-gradient-to-b from-sky-500 to-indigo-500">
              <FontAwesomeIcon icon={faMagic} color="white" size="xl" />
            </div>
            <div>
              <h3 class="dark:text-white text-xl font-semibold mb-1">
                Choose Your Genre
              </h3>
              <p class="dark:text-gray-200 text-md">
                Select from a wide range of genres or create a custom blend.
              </p>
            </div>
          </div>

          <div class="p-4 flex gap-6 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300">
            <div className="rounded-full h-12 w-12 items-center flex justify-center bg-gradient-to-b from-sky-500 to-indigo-500">
              <FontAwesomeIcon icon={faPencilAlt} color="white" size="xl" />
            </div>
            <div>
              <h3 class="dark:text-white text-xl font-semibold mb-1">
                Provide Key Details
              </h3>
              <p class="dark:text-gray-200 text-md">
                Input main characters, plot points, or themes to guide the AI.
              </p>
            </div>
          </div>

          <div class="p-4 flex gap-6 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300">
            <div className="rounded-full h-12 w-12 items-center flex justify-center bg-gradient-to-b from-sky-500 to-indigo-500">
              <FontAwesomeIcon icon={faCogs} color="white" size="xl" />
            </div>
            <div>
              <h3 class="dark:text-white text-xl font-semibold mb-1">
                AI Generation
              </h3>
              <p class="dark:text-gray-200 text-md">
                Our advanced AI creates your book based on your inputs.
              </p>
            </div>
          </div>

          <div class="p-4 flex gap-6 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300">
            <div className="rounded-full h-12 w-12 items-center flex justify-center bg-gradient-to-b from-sky-500 to-indigo-500">
              <FontAwesomeIcon icon={faCheckCircle} color="white" size="xl" />
            </div>
            <div>
              <h3 class="dark:text-white text-xl font-semibold mb-1">
                Review and Download
              </h3>
              <p class="dark:text-gray-200 text-md">
                Review your generated book and download in your preferred
                format.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Working;
