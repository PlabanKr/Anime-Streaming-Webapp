import NavigationBar from "./components/NavigationBar";
import SideMenu from "./components/SideMenu";
import MainBody from "./components/MainBody";

const App = () => {
  return (
    <>
      <NavigationBar />
      <section className="body">
        <SideMenu />
        <MainBody />
      </section>
    </>
  );
};

export default App;
