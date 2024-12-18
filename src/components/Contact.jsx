import React from "react";
import Contactform from "./Contactform";
// import Contactform from './components/Contactform';

export default function Contact() {
  return (
    <>
      <section class="bg-gradient-to-b from-white to-blue-300 dark:bg-slate-800 mt-4" id="contact">
        <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div class="mb-4">
            <div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <p class="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                Contact
              </p>
              <h2 class="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl border-b-2 border-blue-600 rounded-b-lg pb-4">
                Get in Touch
              </h2>
              <p class="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
              Have questions? We're just a message away!
              </p>
            </div>
          </div>
          <div class="flex items-stretch justify-center">
            <div class="grid md:grid-cols-2">
              <div class="h-full pr-6 mt-6">
                <p class="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                  Have questions, feedback, or need support? We’d love to hear from you! Reach out to us using the contact options below, and our team will get back to you promptly.
                </p>
                <ul class="mb-6 md:mb-0">
                  <li class="flex">
                    <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div class="ml-4 mb-4">
                      <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Our Address
                      </h3>
                      <p class="text-gray-600 dark:text-slate-400">
                        <a href="https://maps.app.goo.gl/PT8tqsLqWpdxqKsq9" target="__blank__">Cluster Innovation Center</a>
                      </p>
                      <p class="text-gray-600 dark:text-slate-400">
                        Delhi University
                      </p>
                      <p class="text-gray-600 dark:text-slate-400">
                        GC Narang Road, New Delhi, Pin code – 110007
                      </p>
                    </div>
                  </li>
                  <li class="flex">
                    <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div class="ml-4 mb-4">
                      <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Contact
                      </h3>
                      <p class="text-gray-600 dark:text-slate-400">
                        Mobile: +91 8887181143
                      </p>
                      <p class="text-gray-600 dark:text-slate-400">
                        Mail:{" "}
                        <a href="mailto:revana@cic.du.ac.in">
                          revana@cic.du.ac.in
                        </a>
                      </p>
                    </div>
                  </li>
                  {/* <li class="flex">
                    <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-6 w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div class="ml-4 mb-4">
                      <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Working hours
                      </h3>
                      <p class="text-gray-600 dark:text-slate-400">
                        Monday - Friday: 08:00 - 17:00
                      </p>
                      <p class="text-gray-600 dark:text-slate-400">
                        Saturday &amp; Sunday: 08:00 - 12:00
                      </p>
                    </div>
                  </li> */}
                </ul>
              </div>
              <div class="card h-fit max-w-6xl p-5" id="form">
                <Contactform />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
