"use client";

const Hero = () => {
  return (
    <>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="max-h-[60vh]  flex flex-col justify-center border p-6 ml-[8%] mr-[8%]  lg:flex-row lg:justify-around">
          <div className="flex items-center justify-center">
            <img
              src="./Business_SVG.jpg"
              alt=""
              className="object-contain max-h-[50vh]"
            />
          </div>
          <div className="flex flex-col justify-center p-4 text-center lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-4xl font-bold leadi sm:text-4xl">
              Make Data-Driven Decisions.
            </h1>
            <h1 className="text-secondary text4xl font-bold leadi sm:text-5xl">
              Focused On Growth.
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Maximize Your TikTok Potential With
              <span className="text-secondary font-bold"> TrendMe </span> Hub,
              Tailored to Meet Your Unique Needs.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#features"
                className="px-8 py-3 text-lg text-white  font-semibold bg-secondary border dark:border-gray-100"
              >
                Try TrendMe Hub!
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
