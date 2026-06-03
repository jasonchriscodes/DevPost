import Header from "./ui_components/Header";
import NavBar from "./ui_components/NavBar";
import BlockContainer from "./ui_components/BlogContainer";
import Footer from "./ui_components/Footer";

const App = () => {
  return (
    <>
      <div>
        <NavBar />
        <Header />
        <BlockContainer />
        <Footer />
      </div>
    </>
  );
};

export default App;
