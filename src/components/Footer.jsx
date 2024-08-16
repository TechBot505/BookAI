import React from "react";

function Footer() {
  return (
    <footer class="dark:bg-primary bg-[#0b0e37] py-8 px-6 font-sans tracking-wide">
      <div class="flex flex-col items-center gap-2">
        <hr class="border-gray-500 w-full" />
        <div className="mt-4">
          <p class="text-gray-200 text-center">
            © 2024 BookAI. All rights reserved.
          </p>
        </div>

        <ul class="flex flex-wrap gap-x-7 gap-4">
          <li>
            <a
              href="/"
              class="hover:underline text-gray-200 text-base transition-all"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href="/"
              class="hover:underline text-gray-200 text-base transition-all"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              class="hover:underline text-gray-200 text-base transition-all"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
