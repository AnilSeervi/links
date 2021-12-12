import type { NextPage } from "next";
import Logo from "../components/Logo";
import MainCont from "../components/MainCont";
import SEO from "../components/SEO";

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <MainCont />
      <Logo />
    </>
  );
};

export default Home;
