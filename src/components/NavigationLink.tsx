import { FC } from 'react';
import { Link } from 'react-router-dom';

interface INavigationLink {
    location: string,
    route: string,
    title: string,
    external?: boolean,
    target?: boolean,
}

export const NavigationLink: FC<INavigationLink> = ({ location, route, title, external, target }) => {
  if (external) {
    return (
      <a href={route} target={target ? "_blank" : "_self"}>
        <p className={`font-medium text-teal-400 font-inter text-caption1 ${location === route ? 'underline' : ''}`}>{title}</p>
      </a>
    );
  } else {
    return (
      <Link to={route} target={target ? "_blank" : "_self"}>
        <p className={`font-medium text-teal-400 font-inter text-caption1 ${location === route ? 'underline' : ''}`}>{title}</p>
      </Link>
    );
  }
};

