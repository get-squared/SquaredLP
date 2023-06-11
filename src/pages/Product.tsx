import { Link } from "react-router-dom";

import {
  AIIcon,
  CompetitorIdentificationIcon,
  ConvertIcon,
  HQContentIcon,
  KeywordIcon,
  LampIcon,
  ModelsIcon,
  PlusIcon,
  ProductAttributesIcon,
  YourBrandVoiceIcon,
} from "../assets";
import { UniversalButton, Section } from "../components";

export const Product = () => {
  return (
    <Section>
      <div className="flex flex-col items-center xl:mb-44 lg:mb-[7.5rem] mb-10 gap-8">
        <h1 className="text-center text-white font-titles lg:text-h1 sm:text-h3 text-h4">Smarter, faster, better with AI</h1>
        <h6 className="text-center text-white font-inter text-h6 font-base">
          Squared helps ecommerce professionals maximize their efficiency and output by turning artificial into ‘real’ intelligence
        </h6>
        <UniversalButton link="http://calendly.com/edo-s_get_squared/30min" title="Schedule a Call" />
      </div>

      <div className="xl:mb-36 xl:w-[66.5%] xl:mx-auto sm:mb-20 mb-8 ">
        <h3 className="text-center text-teal-400 font-titles lg:text-h3 text-h5 mb-3">Our vision</h3>
        <p className="text-center font-inter text-h6 text-grey-300">
          A solution that consolidates all useful information for your ecommerce business into one place and leverages generative AI to make you
          smarter, faster and more efficient.
          <br />
          Drive greater sales and profitability through rapid learning and actionability.
        </p>
      </div>

      <div className="mb-12 lg:mb-28">
        <h2 className="text-center text-teal-400 font-titles lg:text-h2 text-h4 lg:mb-20 mb-7">The Squared solution</h2>
        <h3 className="mb-4 text-center font-titles text-grey-300 lg:text-h2 text-h4 lg:mb-14">Research</h3>

        <div className="flex flex-col items-center justify-between gap-8 min-[1025px]:items-stretch min-[1025px]:flex-row 2xl:w-[70%] 2xl:mx-auto">
          <div className="flex flex-col justify-center items-center sm:w-96 text-center bg-gradient-medium rounded-[32px] px-10 py-12">
            <CompetitorIdentificationIcon />
            <h5 className="mb-3 text-white xl:mt-10 font-titles lg:mt-6 text-h5">Competitor analysis</h5>
            <p className="font-sans leading-7 text-grey-300 lg:text-p text-caption1">
              Know your market - find relevant competitors based on product category and attributes.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center sm:w-96  text-center bg-gradient-medium rounded-[32px] px-10 py-12">
            <KeywordIcon />
            <h5 className="mb-3 text-white font-titles xl:mt-10 lg:mt-6 text-h5">Keyword suggestions</h5>
            <p className="font-sans leading-7 text-grey-300 lg:text-p text-caption1">
              Recommending the best keywords based on competitors, category and brand to maximize listing visibility.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center sm:w-96 text-center bg-gradient-medium rounded-[32px] px-10 py-12">
            <ProductAttributesIcon />
            <h5 className="mb-3 text-white xl:mt-10 font-titles lg:mt-6 text-h5">Product attributes</h5>
            <p className="font-sans leading-7 text-grey-300 lg:text-p text-caption1">
              Easily analyze any product information, so the most critical attributes of your product are emphasized in the listing
            </p>
          </div>
        </div>
        <h3 className="mb-4 text-center font-titles text-grey-300 lg:text-h2 text-h4 mt-8 lg:mb-14 lg:mt-32">Create</h3>
        <div className="flex flex-col items-center justify-between gap-8 mb-10 lg:mb-48 lg:items-stretch lg:flex-row 2xl:w-[70%] 2xl:mx-auto">
          <div className="flex flex-col justify-center items-center text-center sm:w-96 lg:w-1/2  w-full bg-gradient-medium rounded-[32px] px-10 py-12">
            <HQContentIcon />
            <h5 className="mb-3 text-white lg:mt-10 font-titles text-h5">High quality content</h5>
            <p className="leading-5 text-sans text-grey-300 lg:text-p text-caption1">
              Listing creation that produces high quality, keyword-driven listing content that follows best-in-class principles structurally and
              linguistically
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center sm:w-96 lg:w-1/2  w-full bg-gradient-medium rounded-[32px] px-10 py-12">
            <YourBrandVoiceIcon />
            <h5 className="mb-3 text-white lg:mt-10 font-titles text-h5">Your brand voice</h5>
            <p className="leading-5 text-sans text-grey-300 lg:text-p text-caption1">
              Bring your brand voice to Amazon with Squared’s game changing capability... or get inspiration from some of the best
            </p>
          </div>
        </div>
      </div>

      <div className="lg:mb-44 mb-14">
        <h2 className="text-center text-teal-400 font-titles lg:text-h2 text-h4 lg:mb-28 mb-7 lg:w-1/2 lg:mx-auto">
          How are we doing it and why are we different?
        </h2>
        <div className="flex flex-col items-center justify-between gap-4 min-[1040px]:items-baseline min-[1040px]:flex-row 2xl:w-[70%] 2xl:mx-auto">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="rounded-full bg-gradient-medium p-14 w-[200px] h-[200px] mb-7 flex justify-center items-center">
              <AIIcon />
            </div>
            <h5 className="w-64 font-titles text-h5 text-grey-300">Best in class Foundational Models</h5>
          </div>
          <PlusIcon />
          <div className="flex flex-col items-center justify-center text-center">
            <div className="rounded-full bg-gradient-medium p-14 w-[200px] h-[200px] mb-7 flex justify-center items-center">
              <ConvertIcon />
            </div>
            <h5 className="w-64 font-titles text-h5 text-grey-300">Amazon content and keyword experts</h5>
          </div>
          <PlusIcon />
          <div className="flex flex-col items-center justify-center text-center">
            <div className="rounded-full bg-gradient-medium p-14 w-[200px] h-[200px] mb-7 flex justify-center items-center">
              <ModelsIcon />
            </div>
            <h5 className="w-64 font-titles text-h5 text-grey-300">Proprietary large language models</h5>
          </div>
        </div>
      </div>

      <div className=" flex-col gap-5 bg-gradient-light1 mb-24 lg:p-[3.75rem] p-6 rounded-[32px] text-left w-fit justify-center hidden md:flex">
        <div className="flex flex-col">
          <div className="flex items-center justify-start gap-2">
            <LampIcon />
            <h3 className="ml-4 text-white font-titles text-h4">Did you know 75% of Amazon listings do not pass best practice evaluations?</h3>
          </div>
          <p className="text-white font-inter text-h6 mt-2">
            It's time to find out how much visibility and sales your product is losing by not having an optimized listing.
          </p>
        </div>
        <div className="flex flex-col justify-end">
          <Link to={"http://calendly.com/edo-s_get_squared/30min"}>
            <button className="float-right px-4 py-2 text-base whitespace-nowrap font-medium text-white bg-purple-400 border border-purple-400 rounded-full font-inter">
              Schedule a Call
            </button>
          </Link>
        </div>
      </div>
    </Section>
  );
};
