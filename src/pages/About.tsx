import mockPic from '../assets/mockPic.png';
import { PersonCard } from "../components/PersonCard/PersonCard";

const mockedArray = [
  { name: 'John Doe', title: 'Stormtrooper', img: mockPic },
  { name: 'Jane Doe', title: 'Pilot', img: mockPic },
  { name: 'John Smith', title: 'Smith', img: mockPic },
  { name: 'Adam Smasher', title: 'Bounty Hunter', img: mockPic },
  { name: 'Gordon Gekko', title: 'Trader', img: mockPic },
];

export const About = () => {
  return (
    <section className="px-6 lg:px-24 sm:px-9">
      <div className="flex flex-col items-center lg:mb-[7.5rem] mb-10 gap-8">
        <h5 className="text-purple-300 text-h5">Our founding team started in </h5>
        <h1 className="font-bold text-center text-white lg:text-h1 sm:text-h3 text-h4">Big data and competitive intelligence</h1>
        <h6 className="text-center text-white text-p font-base">
          We watched customers pay for insights, not intelligence.
          Our goal is to bring our collective knowledge to build a solution that leverages
          data to drive immediate actioning that can make a quantifiable impact on the business
        </h6>
      </div>

      <div className="xl:mb-[21.875rem] xl:w-[66.5%] xl:mx-auto sm:mb-20 mb-8 ">
        <h3 className="font-bold text-center text-teal-400 lg:text-h3 text-h5">
          More tools don’t correlate to greater impact
        </h3>
        <p className="text-center text-p text-grey-300">
          Ecommerce solutions have not innovated at the speed of market need,
          resulting in lots of bespoke solutions that fail to improve business performance
        </p>
      </div>

      <div className="xl:mb-[21.875rem] xl:w-[66.5%] xl:mx-auto sm:mb-20 mb-8 ">
        <h3 className="font-bold text-center text-teal-400 lg:text-h3 text-h5">
          The digital shelf and consumer demand kept rising
        </h3>
        <p className="text-center text-p text-grey-300">
          We thought it was time to build a solution that scales in order
          to reduce customer costs and empower greater operational efficiency
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-32 mb-16 lg:mb-48">
        {mockedArray.map((person, index) => 
          <PersonCard
            name={person.name}
            title={person.title}
            style={(index + 1) % 2 === 0 ? 'cardImage-even' : 'cardImage-odd'}
            img={person.img}
            key={`${index}${person.name}`}
          />,
        )}
      </div>

    </section>
  );
};