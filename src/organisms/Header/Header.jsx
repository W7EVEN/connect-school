import { Link } from "react-router-dom";
import { LinkButton } from "../../atoms/LinkButton/LinkButton";

export const Header = () => {
  return (
    <header className="container__header">
      <div className="header__logo">
        <LinkButton to="/" style="logo__link">
          LOGO
        </LinkButton>
      </div>
      <nav className="header__navbar">
        <ul className="navbar__options">
          <li className="navbar__option">
            <Link to="/sign-up" className="header__navbar__link">
              Registrar-se
            </Link>
          </li>
          <li className="navbar__option navbar__option--rounded">
            <Link to="/sign-in" className="header__navbar__link">
              Fazer login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
