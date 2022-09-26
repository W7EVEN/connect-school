import { Routes, Route, Link } from "react-router-dom";
import { GradesSum } from "./pages/GradesSum/GradesSum";
import { Home } from "./pages/Home/Home";
import { SignIn } from "./pages/SignIn/SignIn";
import { SignUp } from "./pages/SignUp/SignUp";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/grades-sum" element={<GradesSum />} />
    </Routes>
  );
};
