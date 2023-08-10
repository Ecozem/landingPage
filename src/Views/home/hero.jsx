/* eslint-disable jsx-a11y/anchor-is-valid */
import Container from "./container";
import heroImg from "../../assets/images/Vector.svg";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-[#6B7280] lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight ">
              <span className=" text-[#2597A2]">ECOZEM</span> <br /> Services de
              transport <br />{" "}
              <span className=" text-[#F6DF0B]">électrique</span> non polluant
            </h1>
            <p className="py-5 text-xl leading-normal text-[#6B7280] lg:text-xl xl:text-2xl ">
              Réduisez votre impact sur l'environnement et profitez d'un mode de
              transport plus durable.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-2 text-lg font-medium text-center text-white bg-[#2597A2] rounded-xl "
              >
                ESSAI GRATUIT
              </a>
              <a
                href="https://github.com/web3templates/nextly-template/"
                target="_blank"
                rel="noopener noreferrer"
                className=" px-8 py-2 text-lg font-medium text-center bg-white text-[#2597A2] rounded-xl border-2 border-[#2597A2] "
              >
                Nos Services
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <img
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
};
export default Hero;
