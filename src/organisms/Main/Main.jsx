import { Link } from "react-router-dom";
import { HomeSVG } from "../../atoms/HomeSVG/HomeSVG";
import "./Main.scss";

export const Main = () => {
  return (
    <main className="container__main">
      <div className="container__fluid">
        <h1 className="container__title">
          <span className="title__accent">UNIFICANDO </span> SUA EXPERIÊNCIA
        </h1>
        <p className="container__details">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
          eligendi nesciunt in quod. Reprehenderit earum voluptatem eveniet
          eaque explicabo harum exercitationem ipsum voluptatibus, amet tempore
          minima itaque totam nihil nostrum.
        </p>
        <Link
          to="/sign-up"
          className="header__navbar__link navbar__link--yellow"
        >
          Registrar-se
        </Link>
        <Link
          to="/sign-in"
          className="header__navbar__link navbar__link--purple"
        >
          Fazer login
        </Link>
      </div>
      <div className="container__fluid">
        <HomeSVG></HomeSVG>
      </div>
    </main>
  );
};
