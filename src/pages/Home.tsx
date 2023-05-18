import { Link } from "react-router-dom";

import { QualityIcon, ScaleIcon, TimeSavings } from "../assets";

export const Home = () => {
  return (
    <section className="px-24">
      <div className="flex flex-col items-center mb-[7.5rem] gap-8">
        <h1 className="text-dark-800 text-h1 font-bold text-center">Turn artificial into real intelligence</h1>
        <h6 className="text-dark-800 text-h6 font-base text-center">Maximize your ecommerce research and content creation process with Squared</h6>
        <Link to={'/contact'}>
          <button className="font-inter text-base font-medium text-white bg-purple-400 rounded-full border border-purple-400 px-4 py-2">
            Schedule Call
          </button>
        </Link>
      </div>
      <div className="mb-[21.875rem] w-[66.5%] mx-auto">
        <h4 className="text-dark-800 text-h4 font-semibold text-center leading-10">
          <span className="text-purple-400">Product, keyword research and content creation </span>
          is manual, largely unscientific and difficult to scale
        </h4>
      </div>
      <div className="mb-[21.875rem] w-[66.5%] mx-auto">
        <h4 className="text-dark-800 text-h4 font-semibold text-center leading-10">
          We created Squared, <span className="text-purple-400">a transparent AI solution</span> that streamlines the core components of content research and creation into one solution
        </h4>
      </div>
      <div className="mb-[9.375rem] w-[66.5%] mx-auto">
        <h4 className="text-dark-800 text-h4 font-semibold text-center leading-10">
          You no longer need multiple bespoke to create the <span className="text-purple-400">best product listing.</span> Square will improve your efficiency and performance at scale
        </h4>
      </div>
      <div className="flex justify-between mb-48 items-start">
        <div className="flex flex-col justify-center items-center w-[19.5rem] text-center">
          <TimeSavings/>
          <h5 className="text-dark-700 mb-3 text-h5">Time savings</h5>
          <p className="leading-7 text-dark-700 text-p">
            Create listings in minutes! Save hours of work by streamlining the product, keyword research and content creation process
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-[19.5rem] text-center">
          <QualityIcon/>
          <h5 className="text-dark-700 mb-3 text-h5">Quality</h5>
          <p className="leading-7 text-dark-700 text-p">
            Quality in, quality out! Our AI has learned to build listings from expert content writers
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-[19.5rem] text-center ">
          <ScaleIcon/>
          <h5 className="text-dark-700 mb-3 text-h5">Scale</h5>
          <p className="leading-7 text-dark-700 text-p">
            Create 100s of best-in-class listings in moments and then make sure to share them with your colleagues!
          </p>
        </div>
      </div>
      <div className="flex justify-between mb-24 p-[3.75rem] bg-gradient-to-r from-teal-300 to-teal-100 rounded-[32px]">
        <h4 className="text-dark-800 text-h4 font-semibold leading-10">Maximize your ecommerce listings today</h4>
        <input type="text" placeholder="Type last name" className="rounded-lg" />
        <Link to={'/contact'}>
          <button className="font-inter text-base font-medium text-white bg-purple-400 rounded-full border border-purple-400 px-4 py-2">
            Get started
          </button>
        </Link>
      </div>
    </section>

  );
};