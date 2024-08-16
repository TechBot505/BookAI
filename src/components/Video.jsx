import React from "react";

function Video() {
  return (
    <div className="font-sans py-8 dark:bg-gradient-to-r from-start to-end h-full">
      <div className="text-center max-w-6xl max-md:max-w-md mx-auto">
        <div>
          <div className="max-w-6xl mx-auto bg-gray-100 dark:bg-secondary dark:bg-opacity-80 rounded-lg shadow-lg p-10 font-[sans-serif] overflow-visible">
            <iframe
              title="AI Video"
              width="1080"
              height="520"
              className="rounded-lg"
              src="https://demo.arcade.software/OvUdnIEhwNxssQsB3COY?embed&show_copy_link=true"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
