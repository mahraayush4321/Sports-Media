import Sidebar from "../../components/Sidebar/Sidebar";
import Nav from "../../components/Navbar/Nav";
import Feeds from "../../components/Feeds/Feeds";

const HomePage = () => {
  return (
    <>
      <Nav />
      <>
        <Sidebar />
        <Feeds />
      </>
    </>
  );
};

export default HomePage;
