import { FC } from 'react';
import { Link } from 'react-router-dom';

interface INavigationLink {
    location: string,
    route: string,
    title: string
}

export const NavigationLink: FC<INavigationLink> = ({ location, route, title }) => {
  return (
    <Link to={route}>
      <p className={`font-medium text-teal-400 font-inter text-caption1 ${location === route ? 'underline' : ''}`}>{title}</p>
    </Link>
  );
};