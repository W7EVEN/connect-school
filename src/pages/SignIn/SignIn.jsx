import { LinkButton } from "../../atoms/LinkButton/LinkButton";
import { LoginSVG } from "../../atoms/LoginSVG/LoginSVG";
import { HeaderMinimal } from "../../organisms/HeaderMinimal/HeaderMinimal";
import "./SignIn.scss";

export const SignIn = () => {
  return (
    <>
      <HeaderMinimal></HeaderMinimal>
      <main className="container__signUpSection">
        <div className="container__left">
          <div className="container__image">
            <LoginSVG></LoginSVG>
          </div>
        </div>
        <div className="container__right">
          <div className="container__register">
            <h2>Bem vindo(a) de volta! 👋</h2>
            <p>Faça seu login e resolva suas pendências em instantes</p>
            <form className="registration__form">
              <div className="form__inputSection">
                <label htmlFor="emailInput" className="form__label">
                  Email
                </label>
                <input
                  id="emailInput"
                  type="email"
                  placeholder="joao@exemplo.com"
                  className="form__input"
                />
              </div>
              <div className="form__inputSection">
                <label htmlFor="passwordInput" className="form__label">
                  Senha
                </label>
                <input
                  id="passwordInput"
                  type="password"
                  placeholder="Crie sua senha"
                  className="form__input"
                />
              </div>
              <LinkButton to="/grades-sum" style="">
                <button className="sign__button">Entrar</button>
              </LinkButton>
            </form>
            <p className="registration__redirection">
              <span>Não tem uma conta?</span>
              <LinkButton to="/sign-up" style="">
                Registre-se
              </LinkButton>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
