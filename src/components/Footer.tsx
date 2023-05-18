import { FaDribbble, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { LogoFooter } from '../assets/LogoFooter';

export const Footer = () => {
  return (
    <footer className="bg-dark-800 py-16 px-20 h-[27.438rem] max-[550px]:py-10 max-[550px]:px-14 max-[375px]:px-10 max-[750px]:px-10">
      <div className="flex justify-between mb-[8.438rem] max-[550px]:mb-14">
        <div className="flex justify-between max-[700px]:w-1/2 w-2/6 gap-2 max-[550px]:flex-col max-[550px]:gap-4">
          <div className="flex flex-col gap-[1.875rem] max-[550px]:gap-4">
            <Link to={'/'}><p className="font-sans text-xl text-grey-300">Home</p></Link>
            <Link to={'/product'}><p className="font-sans text-xl text-grey-300">Product</p></Link>
            <Link to={'/'}><p className="font-sans text-xl text-grey-300">Customers</p></Link>
          </div>
          <div className="flex flex-col gap-[1.875rem] max-[550px]:gap-4">
            <Link to={'/'}><p className="font-sans text-xl text-grey-300">Pricing</p></Link>
            <Link to={'/about'}><p className="font-sans text-xl text-grey-300">About</p></Link>
          </div>
        </div>
        <Link to={'/contact'}>
          <button className="px-4 py-2 font-medium text-white border border-white rounded-full font-inter text-caption2">
            Schedule Call
          </button>
        </Link>
      </div>
      <div className="flex justify-between max-[550px]:flex-col max-[550px]:items-center max-[550px]:gap-4">
        <LogoFooter/>
        <div className="flex gap-7">
          <FaGithub className="text-grey-300"/>
          <FaTwitter className="text-grey-300" />
          <FaDribbble className="text-grey-300"/>
          <FaFacebook className="text-grey-300"/>
        </div>
      </div>
    </footer>
  );
};