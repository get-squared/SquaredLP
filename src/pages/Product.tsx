import { Link } from "react-router-dom";

import { AIIcon, CompetitorIdentificationIcon, ConvertIcon, HQContentIcon, KeywordIcon, LampIcon, ModelsIcon, PlusIcon, ProductAttributesIcon, YourBrandVoiceIcon } from "../assets";

export const Product = () => {
  return (
    <section className="px-6 lg:px-24 sm:px-9">
      <div className="flex flex-col items-center xl:mb-96 lg:mb-[7.5rem] mb-10 gap-8">
        <h1 className="font-bold text-center text-white lg:text-h1 sm:text-h3 text-h4">Smarter, faster, better with AI</h1>
        <h6 className="text-center text-white font-inter text-h6 font-base">Squared helps ecommerce professionals maximize their efficiency and output by turning artificial into ‘real’ intelligence</h6>
        <Link to={'/contact'}>
          <button className="px-4 py-2 text-base font-medium text-white bg-purple-400 border border-purple-400 rounded-full font-inter">
            Schedule Call
          </button>
        </Link>
      </div>

      <div className="xl:mb-[21.875rem] xl:w-[66.5%] xl:mx-auto sm:mb-20 mb-8 ">
        <h3 className="font-bold text-center text-teal-400 lg:text-h3 text-h5">Our vision</h3>
        <p className="text-center font-inter text-p text-grey-300">
          A solution that consolidates all useful information for your ecommerce business in to one place and leverages generative AI to make our users smarter, faster and more efficient.
          Through rapid learning and actioning drive greater sales and profitability
        </p>
      </div>

      <div className="mb-10 lg:mb-28 xl:mb-48">
        <h2 className="font-bold text-center text-teal-400 lg:text-h2 text-h4 lg:mb-28 mb-7">The Squared solution</h2>
        <h3 className="mb-4 font-bold text-center text-grey-300 lg:text-h2 text-h4 lg:mb-14">Research</h3>

        <div className="flex flex-col items-center justify-between gap-8 min-[1025px]:items-stretch min-[1025px]:flex-row">
          <div className="flex flex-col justify-center items-center sm:w-96 text-center bg-gradient-medium rounded-[32px] px-10 py-12">
            <CompetitorIdentificationIcon />
            <h5 className="mb-3 text-white xl:mt-10 lg:mt-6 text-h5">Competitor identification</h5>
            <p className="font-sans leading-7 text-grey-300 lg:text-p text-caption1">
              Know your marketing by finding relevant competitors based on product category and attributes.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center sm:w-96  text-center bg-gradient-medium rounded-[32px] px-10 py-12">
            <KeywordIcon />
            <h5 className="mb-3 text-white xl:mt-10 lg:mt-6 text-h5">Keyword generator</h5>
            <p className="font-sans leading-7 text-grey-300 lg:text-p text-caption1">
              Recommending the best keywords based on competitors, category and brand to maximize listing visibility
            </p>
          </div>
          <div className="flex flex-col justify-center items-center sm:w-96 text-center bg-gradient-medium rounded-[32px] px-10 py-12">
            <ProductAttributesIcon />
            <h5 className="mb-3 text-white xl:mt-10 lg:mt-6 text-h5">Product attributes</h5>
            <p className="font-sans leading-7 text-grey-300 lg:text-p text-caption1">
              Convert product information magically, so the most critical attributes of your product are emphasized in the listing
            </p>
          </div>
        </div>
      </div>

      <div className="mb-10 lg:mb-48 xl:mb-80">
        <h3 className="mb-4 font-bold text-center text-grey-300 lg:text-h2 text-h4 lg:mb-14">Create</h3>
        <div className="flex flex-col items-center justify-between gap-8 mb-10 lg:mb-48 lg:items-stretch lg:flex-row">
          <div className="flex flex-col justify-center items-center text-center lg:w-1/2  w-full bg-gradient-medium rounded-[32px] px-10 py-12">
            <HQContentIcon />
            <h5 className="mb-3 text-white lg:mt-10 text-h5">High quality content</h5>
            <p className="leading-5 text-sans text-grey-300 lg:text-p text-caption1">
              Listing creation that produces high quality, keyword-driven product content that follows best-in-class principles structurally and linguistically
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center lg:w-1/2  w-full bg-gradient-medium rounded-[32px] px-10 py-12">
            <YourBrandVoiceIcon />
            <h5 className="mb-3 text-white lg:mt-10 text-h5">Your brand voice</h5>
            <p className="leading-5 text-sans text-grey-300 lg:text-p text-caption1">
              Bring your brand voice to Amazon with Squared’s game changing capability…or get inspiration from some of the best
            </p>
          </div>
        </div>
      </div>

      <div className="lg:mb-44 mb-14">
        <h2 className="font-bold text-center text-teal-400 lg:text-h2 text-h4 lg:mb-28 mb-7">How are we doing it and why are we different?</h2>
        <div className="flex flex-col items-center justify-between gap-4 min-[1040px]:items-baseline min-[1040px]:flex-row">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="rounded-full bg-gradient-medium p-14 w-[200px] h-[200px] mb-7 flex justify-center items-center">
              <AIIcon />
            </div>
            <h5 className="w-64 text-h5 text-grey-300">OpenAi</h5>
          </div>
          <PlusIcon />
          <div className="flex flex-col items-center justify-center text-center">
            <div className="rounded-full bg-gradient-medium p-14 w-[200px] h-[200px] mb-7 flex justify-center items-center">
              <ConvertIcon />
            </div>
            <h5 className="w-64 text-h5 text-grey-300">Amazon content and keyword experts</h5>
          </div>
          <PlusIcon />
          <div className="flex flex-col items-center justify-center text-center">
            <div className="rounded-full bg-gradient-medium p-14 w-[200px] h-[200px] mb-7 flex justify-center items-center">
              <ModelsIcon />
            </div>
            <h5 className="w-64 text-h5 text-grey-300">Proprietary large language models</h5>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 bg-gradient-light1 mb-24 lg:p-[3.75rem] p-6 rounded-[32px]">
        <div className="flex items-center justify-between gap-2">
          <LampIcon />
          <h3 className="text-white text-h4">Did you know 75% of Amazon listings do not pass best practice evaluations?</h3>
        </div>
        <p className="text-white font-inter text-h6">
          It's time to find out how much visibility and sales your product is losing by not having an optimized listing.
        </p>
        <Link to={'/contact'}>
          <button className="float-right px-4 py-2 text-base font-medium text-white bg-purple-400 border border-purple-400 rounded-full font-inter">
            Schedule Call
          </button>
        </Link>
      </div>
    </section>
  );
};