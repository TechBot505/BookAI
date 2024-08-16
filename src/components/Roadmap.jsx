import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintBrush, faStore, faUserCircle, faUsers } from '@fortawesome/free-solid-svg-icons'

function Roadmap() {
  return (
    <div className="bg-gray-100 dark:bg-gradient-to-r from-start to-end py-8">
      <div id='roadmap' class="max-w-6xl bg-gradient-to-r from-purple-800 to-secondary dark:bg-secondary dark:bg-opacity-80 mx-auto pb-4 font-[sans-serif] rounded-xl">
        <h2 class="text-white text-3xl font-bold text-center py-6">
          Roadmap
        </h2>
        <div class="grid lg:grid-cols-2 md:grid-cols-2 max-md:max-w-lg mx-auto gap-12">
          <div class="p-4 flex gap-6 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300">
          <div className="rounded-full h-12 w-12 items-center flex justify-center bg-gradient-to-b from-sky-500 to-indigo-500">
              <FontAwesomeIcon icon={faUserCircle} color="white" size="xl" />
            </div>
            <div>
              <h3 class="text-white text-xl font-semibold mb-1">
              Advanced Character Development
              </h3>
              <p class="text-gray-200 text-md">
              AI-powered tool for creating deep, complex characters.
              </p>
            </div>
          </div>

          <div class="p-4 flex gap-6 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300">
          <div className="rounded-full h-12 w-12 items-center flex justify-center bg-gradient-to-b from-sky-500 to-indigo-500">
              <FontAwesomeIcon icon={faStore} color="white" size="xl" />
            </div>
            <div>
              <h3 class="text-white text-xl font-semibold mb-1">
              E-book Platform Integration
              </h3>
              <p class="text-gray-200 text-md">
              Seamless publishing to popular e-book platforms.
              </p>
            </div>
          </div>

          <div class="p-4 flex gap-6 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300">
          <div className="rounded-full h-12 w-12 items-center flex justify-center bg-gradient-to-b from-sky-500 to-indigo-500">
              <FontAwesomeIcon icon={faUsers} color="white" size="xl" />
            </div>
            <div>
              <h3 class="text-white text-xl font-semibold mb-1">
              Collaborative Writing
              </h3>
              <p class="text-gray-200 text-md">
              Co-create stories with other authors or AI assistants.
              </p>
            </div>
          </div>

          <div class="p-4 flex gap-6 rounded-lg hover:shadow-md hover:scale-105 transition-all duration-300">
          <div className="rounded-full h-12 w-12 items-center flex justify-center bg-gradient-to-b from-sky-500 to-indigo-500">
              <FontAwesomeIcon icon={faPaintBrush} color="white" size="xl" />
            </div>
            <div>
              <h3 class="text-white text-xl font-semibold mb-1">
              AI Cover Art Generation
              </h3>
              <p class="text-gray-200 text-md">
              Create stunning book covers with AI-generated art.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap