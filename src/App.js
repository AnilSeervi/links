import Footer from "./Footer";
import ImageContainer from "./ImageContainer";
import LinkLists from "./LinksList";
import useFetch from "./useFetch";

function App() {
  const name = "AnilSeervi";
  const { links } = useFetch("./links.json");

  return (
    <>
      <ImageContainer name={name} />
      {links && <LinkLists links={links.links} />}
      <Footer />
    </>
  );
}

export default App;
