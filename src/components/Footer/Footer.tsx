import { FaDribbble, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';

import { FooterLink } from '..';
import { LogoFooter } from '../../assets/LogoFooter';

import { LayoutButton } from '../Buttons/LayoutButton';


export const Footer = () => {
  return (
    <footer className="bg-dark-800 py-16 px-20 h-[27.438rem] max-[550px]:py-10 max-[550px]:px-14 max-[375px]:px-10 max-[750px]:px-10">
      <div className="flex justify-between mb-[8.438rem] max-[550px]:mb-14">
        <div className="flex justify-between max-[700px]:w-1/2 w-[30%] gap-2 max-[550px]:flex-col max-[550px]:gap-4">
          <div className="flex flex-col gap-[1.875rem] max-[550px]:gap-4">
            <FooterLink link="/" title="Home"/>
            <FooterLink link="/product" title="Product"/>
            <FooterLink link="/" title="Customers"/>
          </div>
          <div className="flex flex-col gap-[1.875rem] max-[550px]:gap-4">
            <FooterLink link="/" title="Pricing"/>
            <FooterLink link="/about" title="About"/>
          </div>
        </div>
        <LayoutButton
          classNames="px-4 py-2 font-medium text-white border border-white rounded-full font-inter text-caption2"
        />
      </div>
      <div className="flex justify-between max-[550px]:flex-col max-[550px]:items-center max-[550px]:gap-4">
        <LogoFooter />
        <div className="flex gap-7">
          <FaGithub className="text-grey-300" />
          <FaTwitter className="text-grey-300" />
          <FaDribbble className="text-grey-300" />
          <FaFacebook className="text-grey-300" />
        </div>
      </div>
    </footer>
  );
};