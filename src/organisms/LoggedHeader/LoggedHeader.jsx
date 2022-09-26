import { LinkButton } from "../../atoms/LinkButton/LinkButton";
import profilePic from "../../assets/profilepic.jpg";
import "./LoggedHeader.scss";

export const LoggedHeader = () => {
  return (
    <header className="container__loggedHeader">
      <nav className="loggedHeader__navbar">
        <ul className="navbar__options">
          <li className="navbar__option">Somar notas</li>
        </ul>
      </nav>
      <div className="header__brand">
        <div className="header__logo">
          <LinkButton to="/" style="logo__link">
            LOGO
          </LinkButton>
        </div>
      </div>
      <div className="header__profile">
        <div className="profile__text">
          <span className="profile__username">João</span>
          <span className="profile__class">professor</span>
        </div>
        <div className="profile__image">
          <img src={profilePic} alt="" />
        </div>
      </div>
    </header>
  );
};
