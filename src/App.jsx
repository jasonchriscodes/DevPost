import Header from "./ui_components/Header";
import NavBar from "./ui_components/NavBar";
import BlockContainer from "./ui_components/BlogContainer";

const App = () => {
  return (
    <>
      <div>
        <NavBar />
        <Header />
        <BlockContainer />
      </div>
    </>
  );
};

export default App;
