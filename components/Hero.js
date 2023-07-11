"use client";

const Hero = () => {
  return (
    <>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="max-h-[80vh] xs:max-h-[90vh] sm:max-h-[60vh] flex flex-col sm:flex-row justify-center items-center border p-4 sm:p-6 ml-2 xs:ml-4 sm:ml-[8%] mr-2 xs:mr-4 sm:mr-[8%] justify-around">
          <div className="flex items-center justify-center">
            <img
              src="./Business_SVG.jpg"
              alt=""
              className="object-contain h-full w-full xs:max-h-[50vh] sm:max-h-[50vh]"
            />
          </div>
          <div className="flex flex-col justify-center p-2 xs:p-4 text-center sm:text-left">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold leading-tight">
              Make Data-Driven Decisions.
            </h1>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Focused On Growth.
            </h1>
            <p className="mt-2 xs:mt-4 sm:mt-6 mb-2 xs:mb-4 sm:mb-8 text-sm xs:text-base sm:text-lg leading-relaxed">
              Maximize Your TikTok Potential With
              <span className="text-secondary font-bold"> Viral Hub</span>,
              Tailored to Meet Your Unique Needs.
            </p>
            <div className="flex flex-col space-y-2 xs:space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row sm:items-center justify-center sm:justify-start">
              <a
                rel="noopener noreferrer"
                href="#features"
                className="px-4 xs:px-6 sm:px-8 py-2 text-sm xs:text-base sm:text-lg text-white font-semibold bg-secondary border dark:border-gray-100"
              >
                Try Viral Hub!
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
