import React from 'react'
import img from '../assets/mudassir.jpg'

export function TestimonialOne() {
  return (
    <section className="my-10 px-2 py-10 md:px-8 absolute top-20 right-[15%] bg-white rounded-lg">
      <div className="mx-auto max-w-4xl">
        <div className="md:flex md:items-center md:justify-center md:space-x-14">
          <div className="relative h-48 w-48 flex-shrink-0">
            <img
              className="relative h-48 w-48 rounded-full object-cover"
              src={img}
              alt=""
            />
          </div>

          <div className="mt-10 md:mt-0">
            <blockquote>
              <p className="text-xl text-black">
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquam repellat
                laborum minima tempore deserunt explicabo placeat! Fugit, molestias nesciunt.”
              </p>
            </blockquote>
            <p className="mt-7 text-lg font-semibold text-black">Mudassir Shahid</p>
            <p className="mt-1 text-base text-gray-600">Frontend Developer at DevUI</p>
          </div>
        </div>
      </div>
    </section>
  )
}
