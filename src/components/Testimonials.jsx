import React from "react";

function Testimonials() {
  return (
    <div className="dark:bg-primary py-8">
      <div class="dark:bg-primary font-[sans-serif] bg-white max-w-6xl max-md:max-w-md mx-auto">
        <div class="mb-12 text-center">
          <h2 class="dark:text-white text-gray-800 text-3xl font-bold">
            What our happy users say
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="p-4 rounded-lg mx-auto bg-gray-100 relative">
            <div class="mt-2">
              <p class="text-gray-800 text-lg leading-relaxed text-center">
              "BookAI revolutionized my writing process. I completed my debut novel in just two weeks!"
              </p>
              <p className="text-center font-bold text-lg">- Sarah J., Author</p>
            </div>
          </div>

          <div class="p-4 rounded-lg mx-auto bg-gray-100 relative">
            <div class="mt-2">
              <p class="text-gray-800 text-lg leading-relaxed text-center">
              "The AI-generated ideas helped me overcome writer's block. It's like having a co-author at your fingertips."
              </p>
              <p className="text-center font-bold text-lg">- Mark T., Aspiring Writer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
