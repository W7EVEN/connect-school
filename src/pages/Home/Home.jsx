import { Header } from "../../organisms/Header/Header";
import { Main } from "../../organisms/Main/Main";
import "./Home.scss";

export const Home = () => {
  return (
    <>
      <div className="container">
        <Header></Header>

        <Main></Main>
      </div>
    </>
  );
};
