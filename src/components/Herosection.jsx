import React from 'react'
import SearchBar from './SearchBar'

export default function Herosection() {
  return (
    <>
      <div class="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-16 lg:mt-3 xl:mt-20 my-20" data-aos="fade-right" data-aos-duration="800">
          <div class="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
            <img id="heroImg1" class="lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0" src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png" alt="Awesome hero page image" width="500" height="488"/>
          </div>
          <div class="pr-2 md:mb-14 py-14 md:py-0 flex flex-col justify-end">
            <h1 class="text-3xl font-semibold text-blue-900 xl:text-5xl lg:text-3xl text-right"><span class="block w-full">Find the Perfect Product</span> Get Detailed Reviews!</h1>
            <p class="py-4 text-lg text-right text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Empowering You to Make Smarter Shopping Decisions...
            </p>
            <div class="mt-4">
               <SearchBar />
              {/* <a href="#contact" class="px-5 py-3 text-lg tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600 group"><span>Explore More</span> </a> */}
            </div>
          </div>
  
        </div>
    </>
  )
}
