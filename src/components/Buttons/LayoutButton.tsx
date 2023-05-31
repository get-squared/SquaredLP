import { Link } from "react-router-dom";

export const LayoutButton = ({ classNames }: { classNames: string }) => {
  return (
    <Link to={'/contact'}>
      <button className={classNames}>
        Schedule a Call
      </button>
    </Link>
  );
};
