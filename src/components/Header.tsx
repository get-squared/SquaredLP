import { Link } from 'react-router-dom';

import { LogoHeader } from '../assets/LogoHeader';

export const Header = () => {
  return(
    <header className="px-8 py-5">
      <nav className="flex justify-between items-center">
        <div className="flex gap-12 max-[768px]:gap-4">
          <Link to={'/'}>
            <LogoHeader/>
          </Link>
          <Link to={'/product'}>
            <p className="font-inter text-purple-500 font-medium text-caption1">Product</p>
          </Link>
          <Link to={'/about'}>
            <p className="font-inter text-purple-500 font-medium text-caption1">About</p>
          </Link>
          <Link to={'/contact'}>
            <p className="font-inter text-purple-500 font-medium text-caption1">Contact</p>
          </Link>
        </div>
        <div className="flex items-center gap-5 max-[768px]:gap-4">
          <Link to={'/'}>
            <p className="font-inter text-purple-500 font-medium text-caption1">Log In</p>
          </Link>
          <Link to={'/contact'}>
            <button className="font-inter font-medium text-purple-500 rounded-full border border-purple-500 px-4 py-2 text-caption1">
              Schedule Call
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};