import React from "react";
import circle from "../../assets/images/circle.png";

export default function About() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-[#2597A2]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h2>
              <p className="mt-2 text-2xl font-bold tracking-tight text-[#374151] sm:text-2xl">
                Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor
                incididunt ut
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit,
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center"> 
            <img
              src={circle}
              alt="imag"
              className="w-[48rem] max-w-none rounded-xl ring-gray-400/10 sm:w-[24rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
