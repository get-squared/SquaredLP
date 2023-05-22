import { FC } from 'react';
import { Link } from "react-router-dom";

interface IUniversalButton{
    link: string,
    title: string,
}

export const UniversalButton:FC<IUniversalButton> = ({ link, title }) => {
  return (
    <>
      <Link to={link}>
        <button className="px-4 py-2 text-base font-medium text-white bg-purple-400 border border-purple-400 rounded-full font-inter">
          {title}
        </button>
      </Link>
    </>
  );
};