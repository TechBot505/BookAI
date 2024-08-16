import React from 'react'

function Testimonials() {
  return (
    <div className='dark:bg-primary py-8'>
    <div class="dark:bg-primary font-[sans-serif] bg-white max-w-6xl max-md:max-w-md mx-auto">
      <div class="mb-12 text-center">
        <h2 class="dark:text-white text-gray-800 text-3xl font-bold">What our happy users say</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-6">

        <div class="p-6 rounded-lg mx-auto bg-gray-100 relative">

          <div class="mt-6">
            <p class="text-gray-800 text-sm leading-relaxed">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
          </div>
        </div>

        <div class="p-6 rounded-lg mx-auto bg-gray-100 relative">
          <div class="mt-6">
            <p class="text-gray-800 text-sm leading-relaxed">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Testimonials