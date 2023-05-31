import { Link } from "react-router-dom";

export const LayoutButton = ({ classNames }: { classNames: string }) => {
  return (
    <Link to={'http://calendly.com/edo-s_get_squared/30min'}>
      <button className={classNames}>
        Schedule a Call
      </button>
    </Link>
  );
};
