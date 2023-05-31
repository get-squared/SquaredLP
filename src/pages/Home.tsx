import { QualityIcon, ScaleIcon, TimeSavings } from "../assets";
import { Section, UniversalButton } from "../components";

export const Home = () => {
  return (
    <Section>
      <div className="flex items-center justify-center mb-4 lg:mb-10">
        <div className="absolute z-10 flex flex-col items-center gap-8 py-0 lg:px-24 px-9">
          <h1 className="font-bold text-center text-white font-sohne lg:text-h1 sm:text-h3 text-h5">Turn artificial into real intelligence</h1>
          <h6 className="text-center text-white font-inter sm:text-h6 font-base text-p">Maximize your ecommerce research and content creation process with Squared</h6>
          <UniversalButton
            link="http://calendly.com/edo-s_get_squared/30min"
            title="Schedule a Call"
          />
        </div>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 50 500 450" className="sm:w-[70%] w-full 2xl:w-[55%]" id="blobSvg">
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
        <h4 className="font-semibold text-center font-sohne lg:leading-10 text-grey-300 lg:text-h4 text-h6">
          <span className="text-purple-400">Product, keyword research and content creation </span>
          is manual, largely unscientific and difficult to scale
        </h4>
      </div>

      <div className="xl:mb-[21.875rem] xl:w-[66.5%] xl:mx-auto sm:mb-20 mb-8 ">
        <h4 className="font-semibold text-center font-sohne lg:leading-10 text-grey-300 lg:text-h4 text-h6">
          We created Squared, <span className="text-purple-400">a transparent AI solution</span> that streamlines the core components of content research and creation into one solution
        </h4>
      </div>

      <div className="xl:mb-[9.375rem] xl:w-[66.5%] xl:mx-auto sm:mb-20 mb-8 ">
        <h4 className="font-semibold text-center font-sohne lg:leading-10 text-grey-300 lg:text-h4 text-h6">
          You no longer need multiple bespoke solutions to create the <span className="text-purple-400">best product listing.</span> Squared will improve your efficiency and performance at scale
        </h4>
      </div>

      <div className="flex flex-col items-center justify-between gap-10 mb-10 2xl:justify-center lg:mb-48 lg:items-start lg:flex-row">
        <div className="flex flex-col justify-center items-center w-[19.5rem] text-center">
          <TimeSavings />
          <h5 className="mt-4 mb-3 text-white font-sohne lg:mt-10 text-h5">Time savings</h5>
          <p className="leading-7 text-grey-300 lg:text-p text-caption1 font-inter">
            Create listings in minutes! Save hours of work by streamlining the product, keyword research and content creation process
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-[19.5rem] text-center">
          <QualityIcon />
          <h5 className="mt-4 mb-3 text-white font-sohne lg:mt-10 text-h5">Quality</h5>
          <p className="leading-7 text-grey-300 lg:text-p text-caption1 font-inter">
            Quality in, quality out! Our AI has learned to build listings from expert content writers
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-[19.5rem] text-center ">
          <ScaleIcon />
          <h5 className="mt-4 mb-3 text-white font-sohne lg:mt-10 text-h5">Scale</h5>
          <p className="leading-7 text-grey-300 lg:text-p text-caption1 font-inter">
            Create 100s of best-in-class listings in moments and then make sure to share them with your colleagues!
          </p>
        </div>
      </div>

      <div className="flex justify-between mb-24 lg:p-[3.75rem] p-6 2xl:w-[70%] 2xl:mx-auto  rounded-[32px] bg-gradient-light1 flex-wrap items-center max-[1350px]:justify-center">
        <h4
          className="w-full pb-4 pr-0 font-semibold text-center text-white font-sohne xl:pr-3 xl:text-start lg:leading-10 lg:text-h4 text-h5 xl:w-1/2"
        >
          Maximize your ecommerce listings today
        </h4>
        <div className="flex flex-col flex-wrap items-center justify-center w-full md:flex-row xl:w-1/2">
          <input type="text" placeholder="Type last name" className="flex-grow w-full p-4 mb-4 mr-0 border border-gray-300 rounded-lg outline-none sm:mr-5 md:w-auto md:mb-0" />
          <UniversalButton
            link="http://calendly.com/edo-s_get_squared/30min"
            title="Get started"
          />
        </div>

      </div>
    </Section>

  );
};
