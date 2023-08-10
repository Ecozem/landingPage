import React, { useState } from "react";
import profile from "../../assets/images/proflle.png";

const testimonials = [
  {
    body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    author: {
      name: "Unde omnis ",
      handle: "Sed ut perspiciatis unde omnis ",
      imageUrl: profile,
    },
  },
  {
    body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    author: {
      name: "Unde omnis ",
      handle: "Sed ut perspiciatis unde omnis ",
      imageUrl: profile,
    },
  },
  {
    body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    author: {
      name: "Unde omnis ",
      handle: "Sed ut perspiciatis unde omnis ",
      imageUrl: profile,
    },
  },
  
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-[#2597A2] sm:text-4xl">
          CE QUE DISENT NOS CLIENTS
        </h2>
        <p className="text-base font-semibold leading-7 text-[#6B7280] pt-4">
          Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <div className=" grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author.handle}
              className={`slide w-full ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <figure className="rounded-2xl bg-gray-50 p-4 sm:p-6 lg:p-8 text-sm leading-6">
                <blockquote className="text-gray-900">
                  <p>{`“${testimonial.body}”`}</p>
                </blockquote>
                <figcaption className="mt-4 sm:mt-6">
                  <div className="flex items-center space-x-4">
                    <img
                      className="h-10 w-10 bg-gray-50"
                      src={testimonial.author.imageUrl}
                      alt=""
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author.name}
                      </div>
                      <div className="text-gray-600">
                        {testimonial.author.handle}
                      </div>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
        {/* <div className="absolute -top-5 left-0 right-0 mx-auto w-max flex justify-center space-x-2">
          <button
            className="bg-gray-200 p-2 rounded-full text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            onClick={prevSlide}
          >
            &#8249;
          </button>
          <button
            className="bg-gray-200 p-2 rounded-full text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            onClick={nextSlide}
          >
            &#8250;
          </button>
        </div> */}
      </div>
    </div>
  </div>
  );
}