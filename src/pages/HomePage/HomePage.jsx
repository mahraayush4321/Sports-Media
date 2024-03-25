// import { Container } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
// import Nav from "../../components/Navbar/Nav";
import Feeds from "../../components/Feeds/Feeds";

const HomePage = () => {
  return (
    <>
      <Navbar/>
      {/* <Nav /> */}

      <>
        <Sidebar />
        <Feeds />
      </>
    </>
  );
};

export default HomePage;
