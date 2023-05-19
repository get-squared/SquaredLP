import { FC } from "react";
import './PersonCard.css';

interface IPersonCard{
    name: string,
    title: string,
    style: string,
    img: string
}

export const PersonCard: FC<IPersonCard> = ({ name, title, style, img }) => {
  return(
    <div className="flex flex-col items-center">
      <img src={img} alt={`${name}-${title}`} className={`${style} cardMask mb-7`}/>
      <h5 className="mb-2 text-purple-300 text-h5">
        {name}
      </h5>
      <h6 className="text-h6 text-grey-300">
        {title}
      </h6>
    </div>
  );
};