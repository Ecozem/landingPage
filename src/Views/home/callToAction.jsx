/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import circle from "../../assets/images/cta.png";
import { TbCheckbox } from "react-icons/tb";

export default function CallToAction() {
  return (
    <div className="overflow-hidden bg-[#F6F6F6] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <img
            src={circle}
            alt="imag"
            className="w-[48rem] max-w-none rounded-xl ring-gray-400/10 sm:w-[24rem] md:mr-4 lg:mr-0 pt-24"
            width={2432}
            height={1442}
          />
          <div className="lg:pl-8 lg:pt-4">
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
              <div className="flex items-center py-3 text-[#374151] text-xl leading-8 pl-8">
                <span className="text-[#2597A2]">
                  <TbCheckbox />
                </span>
                <p className="ml-2">Réservez facilement vos trajets</p>
              </div>
              <div className="flex items-center py-3 text-[#374151] text-xl leading-8 pl-8">
                <span className="text-[#2597A2]">
                  <TbCheckbox />
                </span>
                <p className="ml-2">Suivez en temps réel vos trajets</p>
              </div>
              <div className="flex items-center py-3 text-[#374151] text-xl leading-8 pl-8">
                <span className="text-[#2597A2]">
                  <TbCheckbox />
                </span>
                <p className="ml-2">Effectuez une évaluation de vos trajets</p>
              </div>

              <p className="mt-2 text-2xl tracking-tight text-[#374151] sm:text-2xl">
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              </p>

              <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 pt-4">
                <a
                  href="#"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-[#2597A2] px-4 py-2.5 text-white hover:bg-[#2597A2] focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-[#2597A2] dark:hover:bg-[#2597A2] dark:focus:ring-[#2597A2] sm:w-auto"
                >
                  <svg
                    className="mr-3 h-7 w-7"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="apple"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    ></path>
                  </svg>
                  <div className="text-left">
                    <div className="mb-1 text-xs">Télécharger sur</div>
                    <div className="-mt-1 font-sans text-sm font-semibold">
                    Apple Store
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-[#2597A2] px-4 py-2.5 text-white hover:bg-[#2597A2] focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-[#2597A2] dark:hover:bg-[#2597A2] dark:focus:ring-[#2597A2] sm:w-auto"
                >
                  <svg
                    className="mr-3 h-7 w-7"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google-play"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                    ></path>
                  </svg>
                  <div className="text-left">
                    <div className="mb-1 text-xs">Télécharger sur</div>
                    <div className="-mt-1 font-sans text-sm font-semibold">
                      Google Play Store
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
