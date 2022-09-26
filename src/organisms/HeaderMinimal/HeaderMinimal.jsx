import { LinkButton } from "../../atoms/LinkButton/LinkButton";

export const HeaderMinimal = () => {
  return (
    <header className="container__header">
      <div className="header__logo">
        <LinkButton to="/" style="logo__link">
          LOGO
        </LinkButton>
      </div>
    </header>
  );
};
