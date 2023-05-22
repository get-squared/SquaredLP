import { FC } from "react";
import { Link } from "react-router-dom";

interface IFooterLink{
    link: string,
    title: string
}

export const FooterLink: FC<IFooterLink> = ({ link, title }) => {
  return (
    <Link to={link}><p className="font-sans text-xl text-grey-300">{title}</p></Link>
  );
};
