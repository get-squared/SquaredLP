import { Link } from "react-router-dom";

import { QualityIcon, ScaleIcon, TimeSavings } from "../assets";

export const Home = () => {
  return (
    <section className="px-6 lg:px-24 sm:px-9">
      <div className="flex flex-col items-center lg:mb-[7.5rem]  mb-10 gap-8">
        <h1 className="font-bold text-center text-white lg:text-h1 sm:text-h3 text-h4">Turn artificial into real intelligence</h1>
        <h6 className="text-center text-white text-h6 font-base">Maximize your ecommerce research and content creation process with Squared</h6>
        <Link to={'/contact'}>
          <button className="px-4 py-2 text-base font-medium text-white bg-purple-400 border border-purple-400 rounded-full font-inter">
            Schedule Call
          </button>
        </Link>
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
          <TimeSavings/>
          <h5 className="mt-4 mb-3 text-white lg:mt-10 text-h5">Time savings</h5>
          <p className="leading-7 text-grey-300 lg:text-p text-caption1">
            Create listings in minutes! Save hours of work by streamlining the product, keyword research and content creation process
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-[19.5rem] text-center">
          <QualityIcon/>
          <h5 className="mt-4 mb-3 text-white lg:mt-10 text-h5">Quality</h5>
          <p className="leading-7 text-grey-300 lg:text-p text-caption1">
            Quality in, quality out! Our AI has learned to build listings from expert content writers
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-[19.5rem] text-center ">
          <ScaleIcon/>
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