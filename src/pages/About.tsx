import mockPic from '../assets/mockPic.png';
import { PersonCard } from "../components";

const mockedArray = [
  { name: 'John Doe', title: 'Stormtrooper', img: mockPic },
  { name: 'Jane Doe', title: 'Pilot', img: mockPic },
  { name: 'John Smith', title: 'Smith', img: mockPic },
  { name: 'Adam Smasher', title: 'Bounty Hunter', img: mockPic },
  { name: 'Gordon Gekko', title: 'Trader', img: mockPic },
];

const getShapeStyle = (index: number) => {
  if (index % 2 == 0) return 'cardMask-second';
  if (index % 3 == 0) return 'cardMask-third';
  return 'cardMask-first';
};

export const About = () => {
  return (
    <section className="px-6 lg:px-24 sm:px-9">
      <div className="flex flex-col items-center lg:mb-[7.5rem] mb-10 gap-8">
        <h5 className="text-center text-purple-300 text-h5">Our founding team started in </h5>
        <h1 className="font-bold text-center text-white lg:text-h1 sm:text-h3 text-h4">Big data and competitive intelligence</h1>
        <h6 className="text-center text-white text-p font-base">
          We watched customers pay for insights, not intelligence.
          Our goal is to bring our collective knowledge to build a solution that leverages
          data to drive immediate actioning that can make a quantifiable impact on the business
        </h6>
      </div>

      <div className="flex items-center justify-center mb-8 xl:mb-32 sm:mb-20 ">
        <div className="absolute z-10 flex flex-col items-center xl:w-[66.5%] xl:mx-auto py-0 lg:px-24 px-9">
          <h3 className="font-semibold text-center text-white lg:text-h3 text-h5">
            More tools don’t correlate to greater impact
          </h3>
          <p className="text-center text-white font-inter text-p">
            Ecommerce solutions have not innovated at the speed of market need,
            resulting in lots of bespoke solutions that fail to improve business performance
          </p>
        </div>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className="sm:w-1/2 w-full 2xl:w-[55%]" id="blobSvg1">
          <defs>
            <linearGradient id="gradient1" x1="-74.1471" y1="199.341" x2="549.731" y2="-84.1057" gradientUnits="userSpaceOnUse">
              <stop stop-color="#183F63" />
              <stop offset="1" stop-color="#4EC5D0" />
            </linearGradient>
          </defs>
          <path id="blob1" fill="url(#gradient1)">
            <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5, 320.5Q418, 391, 355.5, 442.5Q293, 494, 226, 450.5Q159, 407, 99, 367Q39, 327, 31.5, 247.5Q24, 168, 89, 125.5Q154, 83, 219.5, 68Q285, 53, 335.5, 94.5Q386, 136, 424.5, 193Q463, 250, 440.5, 320.5Z;M453.78747, 319.98894Q416.97789, 389.97789, 353.96683, 436.87838Q290.95577, 483.77887, 223.95577, 447.43366Q156.95577, 411.08845, 105.64373, 365.97789Q54.33169, 320.86732, 62.67444, 252.61056Q71.01719, 184.3538, 113.01965, 135.21007Q155.02211, 86.06634, 220.52211, 66.46683Q286.02211, 46.86732, 335.5, 91.94472Q384.97789, 137.02211, 437.78747, 193.51106Q490.59704, 250, 453.78747, 319.98894Z;M411.39826, 313.90633Q402.59677, 377.81265, 342.92059, 407.63957Q283.24442, 437.46649, 215.13648, 432.5428Q147.02853, 427.61911, 82.23325, 380.9572Q17.43796, 334.29529, 20.45223, 250.83809Q23.46649, 167.38089, 82.5856, 115.05707Q141.70471, 62.73325, 212.19045, 63.73015Q282.67618, 64.72705, 352.67308, 84.79839Q422.66998, 104.86972, 421.43486, 177.43486Q420.19974, 250, 411.39826, 313.90633Z;M440.5, 320.5Q418, 391, 355.5, 442.5Q293, 494, 226, 450.5Q159, 407, 99, 367Q39, 327, 31.5, 247.5Q24, 168, 89, 125.5Q154, 83, 219.5, 68Q285, 53, 335.5, 94.5Q386, 136, 424.5, 193Q463, 250, 440.5, 320.5Z;"></animate >
          </path>
        </svg>
      </div>

      <div className="flex items-center justify-center mb-8 xl:mb-32 sm:mb-20 ">
        <div className="absolute z-10 flex flex-col items-center xl:w-[66.5%] xl:mx-auto py-0 lg:px-24 px-9">
          <h3 className="font-semibold text-center text-white lg:text-h3 text-h5">
            The digital shelf and consumer demand kept rising
          </h3>
          <p className="text-center text-white font-inter text-p">
            We thought it was time to build a solution that scales in order
            to reduce customer costs and empower greater operational efficiency
          </p>
        </div>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className="sm:w-1/2 w-full 2xl:w-[55%]" width="100%" id="blobSvg2" transform="rotate(-8)">
          <defs>
            <linearGradient id="gradient2" x1="37.9999" y1="530" x2="14.6552" y2="-11.7763" gradientUnits="userSpaceOnUse">
              <stop stop-color="#183F63" />
              <stop offset="1" stop-color="#4EC5D0" />
            </linearGradient>
          </defs>
          <path id="blob2" fill="url(#gradient2)">
            <animate attributeName="d" dur="10s" repeatCount="indefinite" values="M433.0232,309.9192Q393.01281,369.83841,338.3352,406.40881Q283.6576,442.97921,221.7752,424.49281Q159.8928,406.0064,119.2384,358.9864Q78.584,311.9664,70.5304,246.7752Q62.4768,181.584,97.7552,114.4464Q133.0336,47.3088,206.208,64.61119Q279.3824,81.91359,342.208,100.8192Q405.0336,119.7248,439.0336,184.8624Q473.0336,250,433.0232,309.9192Z;M404.21696,312.89783Q400.5999,375.79567,344.18719,420.60848Q287.77447,465.42129,222.25959,438.51488Q156.7447,411.60848,114.36806,363.06382Q71.99143,314.51917,65.98083,247.80853Q59.97023,181.09788,105.72982,130.10217Q151.4894,79.10645,216.18088,77.25959Q280.87235,75.41272,335.88295,103.82341Q390.89355,132.2341,399.36378,191.11705Q407.83401,250,404.21696,312.89783Z;M425.57934,323.79599Q426.22734,397.59197,355.10104,419.41516Q283.97474,441.23834,222.29242,423.00907Q160.6101,404.77979,95.49644,367.33031Q30.38277,329.88083,44.58128,255.13536Q58.77979,180.3899,99.7419,120.41159Q140.70401,60.43329,214.57221,45.49287Q288.44042,30.55246,350.61367,72.29792Q412.78692,114.04339,418.85914,182.0217Q424.93135,250,425.57934,323.79599Z;M433.0232,309.9192Q393.01281,369.83841,338.3352,406.40881Q283.6576,442.97921,221.7752,424.49281Q159.8928,406.0064,119.2384,358.9864Q78.584,311.9664,70.5304,246.7752Q62.4768,181.584,97.7552,114.4464Q133.0336,47.3088,206.208,64.61119Q279.3824,81.91359,342.208,100.8192Q405.0336,119.7248,439.0336,184.8624Q473.0336,250,433.0232,309.9192Z"></animate></path>
        </svg>
      </div>

      <div className="flex flex-col gap-10 mb-16 xl:gap-32 lg:gap-16 lg:mb-48">
        <h3 className="font-semibold text-center text-purple-300 lg:text-h3 text-h4">
          Our leaders
        </h3>
        <div className="flex flex-wrap justify-center gap-10 xl:gap-32 lg:gap-16">
          {mockedArray.map((person, index) =>
            <PersonCard
              name={person.name}
              title={person.title}
              style={getShapeStyle(index + 1)}
              img={person.img}
              key={`${index}${person.name}`}
            />,
          )}
        </div>

      </div>

    </section>
  );
};