// import { Container } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
// import Navbar from "../../components/Navbar/Navbar";
import Nav from "../../components/Navbar/Nav";

const HomePage = () => {
  return (
    <>
      {/* <Navbar/> */}
      <Nav />

      <div className="flex">
        <Sidebar />
		Hi bois
      </div>
    </>
  );
};

export default HomePage;
