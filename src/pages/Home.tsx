import { Link } from "react-router-dom";

import { QualityIcon, ScaleIcon, TimeSavings } from "../assets";

export const Home = () => {
  return (
    <section className="px-6 lg:px-24 sm:px-9">
      <div className="flex items-center justify-center mb-10 lg:mb-[7.5rem]">
        <div className="absolute z-10 flex flex-col items-center gap-8">
          <h1 className="font-bold text-center text-white lg:text-h1 sm:text-h3 text-h4">Turn artificial into real intelligence</h1>
          <h6 className="text-center text-white text-h6 font-base">Maximize your ecommerce research and content creation process with Squared</h6>
          <Link to={'/contact'}>
            <button className="px-4 py-2 text-base font-medium text-white bg-purple-400 border border-purple-400 rounded-full font-inter">
              Schedule Call
            </button>
          </Link>
        </div>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className="w-3/5 2xl:w-[63%]" id="blobSvg">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "rgb(126, 237, 244)" }}></stop>
              <stop offset="100%" style={{ stopColor: "rgb(16, 48, 78)" }}></stop>
            </linearGradient >
          </defs >
          <path id="blob" fill="url(#gradient)">
            <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5, 320.5Q418, 391, 355.5, 442.5Q293, 494, 226, 450.5Q159, 407, 99, 367Q39, 327, 31.5, 247.5Q24, 168, 89, 125.5Q154, 83, 219.5, 68Q285, 53, 335.5, 94.5Q386, 136, 424.5, 193Q463, 250, 440.5, 320.5Z;M453.78747, 319.98894Q416.97789, 389.97789, 353.96683, 436.87838Q290.95577, 483.77887, 223.95577, 447.43366Q156.95577, 411.08845, 105.64373, 365.97789Q54.33169, 320.86732, 62.67444, 252.61056Q71.01719, 184.3538, 113.01965, 135.21007Q155.02211, 86.06634, 220.52211, 66.46683Q286.02211, 46.86732, 335.5, 91.94472Q384.97789, 137.02211, 437.78747, 193.51106Q490.59704, 250, 453.78747, 319.98894Z;M411.39826, 313.90633Q402.59677, 377.81265, 342.92059, 407.63957Q283.24442, 437.46649, 215.13648, 432.5428Q147.02853, 427.61911, 82.23325, 380.9572Q17.43796, 334.29529, 20.45223, 250.83809Q23.46649, 167.38089, 82.5856, 115.05707Q141.70471, 62.73325, 212.19045, 63.73015Q282.67618, 64.72705, 352.67308, 84.79839Q422.66998, 104.86972, 421.43486, 177.43486Q420.19974, 250, 411.39826, 313.90633Z;M440.5, 320.5Q418, 391, 355.5, 442.5Q293, 494, 226, 450.5Q159, 407, 99, 367Q39, 327, 31.5, 247.5Q24, 168, 89, 125.5Q154, 83, 219.5, 68Q285, 53, 335.5, 94.5Q386, 136, 424.5, 193Q463, 250, 440.5, 320.5Z;"></animate >
          </path>
        </svg>
      </div>


      <div className="xl:mb-[21.875rem] xl:w-[66.5%] xl:mx-auto sm:mb-20 mb-8 ">
        <h4 className="font-semibold text-center lg:leading-10 text-grey-300 lg:text-h4 text-h6">
          <span className="text-purple-400">Product, keyword research and content creation </span>
          is manual, largely unscientific and difficult to scale
        </h4>
      </div>

      <div className="xl:mb-[21.875rem] xl:w-[66.5%] xl:mx-auto sm:mb-20 mb-8 ">
        <h4 className="font-semibold text-center lg:leading-10 text-grey-300 lg:text-h4 text-h6">
          We created Squared, <span className="text-purple-400">a transparent AI solution</span> that streamlines the core components of content research and creation into one solution
        </h4>
      </div>

      <div className="xl:mb-[9.375rem] xl:w-[66.5%] xl:mx-auto sm:mb-20 mb-8 ">
        <h4 className="font-semibold text-center lg:leading-10 text-grey-300 lg:text-h4 text-h6">
          You no longer need multiple bespoke to create the <span className="text-purple-400">best product listing.</span> Square will improve your efficiency and performance at scale
        </h4>
      </div>

      <div className="flex flex-col items-center justify-between gap-10 mb-10 lg:mb-48 lg:items-start lg:flex-row">
        <div className="flex flex-col justify-center items-center w-[19.5rem] text-center">
          <TimeSavings />
          <h5 className="mt-4 mb-3 text-white lg:mt-10 text-h5">Time savings</h5>
          <p className="leading-7 text-grey-300 lg:text-p text-caption1">
            Create listings in minutes! Save hours of work by streamlining the product, keyword research and content creation process
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-[19.5rem] text-center">
          <QualityIcon />
          <h5 className="mt-4 mb-3 text-white lg:mt-10 text-h5">Quality</h5>
          <p className="leading-7 text-grey-300 lg:text-p text-caption1">
            Quality in, quality out! Our AI has learned to build listings from expert content writers
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-[19.5rem] text-center ">
          <ScaleIcon />
          <h5 className="mt-4 mb-3 text-white lg:mt-10 text-h5">Scale</h5>
          <p className="leading-7 text-grey-300 lg:text-p text-caption1">
            Create 100s of best-in-class listings in moments and then make sure to share them with your colleagues!
          </p>
        </div>
      </div>

      <div className="flex justify-between mb-24 lg:p-[3.75rem] p-6 rounded-[32px] bg-gradient-light1 flex-wrap items-center max-[1350px]:justify-center">
        <h4
          className="pr-3 font-semibold lg:leading-10 text-white lg:text-h4 text-h5 max-[1175px]:pb-4 max-[1175px]:text-center w-1/2 max-[1350px]:w-full max-[1350px]:pb-4 max-[1350px]:text-center max-[840px]:pr-0"
        >
          Maximize your ecommerce listings today
        </h4>
        <input type="text" placeholder="Type last name" className="p-4 mr-5 rounded-lg basis-96 max-[840px]:mb-4 max-[840px]:mr-0" />
        <Link to={'/contact'} className="">
          <button className="px-4 py-2 text-base font-medium text-white bg-purple-400 border border-purple-400 rounded-full font-inter">
            Get started
          </button>
        </Link>
      </div>
    </section>

  );
};