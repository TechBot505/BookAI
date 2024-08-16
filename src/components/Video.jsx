import React from 'react'

function Video() {
  return (
    <div className="font-sans py-8 dark:bg-gradient-to-r from-start to-end h-full">
      <div className="text-center max-w-6xl max-md:max-w-md mx-auto">
        <div>
          <div className="max-w-6xl mx-auto bg-purple-900 bg-opacity-20 rounded-lg shadow-lg p-10 font-[sans-serif] overflow-visible">
            <img
              src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/book2.png"
              className="w-full rounded-lg cursor-pointer"
              alt="hero"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video