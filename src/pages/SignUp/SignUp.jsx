import { LinkButton } from "../../atoms/LinkButton/LinkButton";
import { RegisterSVG } from "../../atoms/RegisterSVG/RegisterSVG";
import { HeaderMinimal } from "../../organisms/HeaderMinimal/HeaderMinimal";
import "./SignUp.scss";

export const SignUp = () => {
  return (
    <>
      <HeaderMinimal></HeaderMinimal>
      <main className="container__signUpSection">
        <div className="container__left">
          <div className="container__image">
            <RegisterSVG></RegisterSVG>
          </div>
        </div>
        <div className="container__right">
          <div className="container__register">
            <h2>A aventura começa aqui! 🚀</h2>
            <p>Deixe seu gerenciamento de notas fácil e divertido</p>
            <form className="registration__form">
              <div className="form__inputSection">
                <label htmlFor="usernameInput" className="form__label">
                  Nome de usuário
                </label>
                <input
                  id="usernameInput"
                  type="text"
                  placeholder="João Roberto"
                  className="form__input"
                />
              </div>
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
              <LinkButton to="/sign-in" style="">
                <button className="sign__button">Cadastre-se</button>
              </LinkButton>
            </form>
            <p className="registration__redirection">
              <span>Já tem uma conta?</span>
              <LinkButton to="/sign-in" style="">
                Log in
              </LinkButton>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
