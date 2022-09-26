import { Link } from "react-router-dom";
import "./LinkButton.scss";

export const LinkButton = ({ to = "/", children, style }) => {
  return (
    <Link to={to} className={style}>
      {children}
    </Link>
  );
};
