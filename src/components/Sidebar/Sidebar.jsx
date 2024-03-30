import { Flex } from "@chakra-ui/react";
// import Navbar from "../Navbar/Navbar";
import CreatePost from "./CreatePost";
import Home from "./Home";
import Profile from "./Profile";
import Tournament from "./Tournament";
import Chat from "./Chat";

const Sidebar = () => {
  return (
    <>
      <Flex
        gap={{ base: "0.5", sm: "5" }}
        ml={{base:-6, md:"2"}}
        mt={14}
        direction={{ base: "row", md: "column", lg: "column" }}
        pos={{ base: "fixed" }}
        bottom={{ base: "0", md: "auto", lg: "auto" }}
        cursor={"pointer"}
        w="200px"
      >
        <Home />
        <Chat />
        <Tournament />
        <CreatePost />
        <Profile />
      </Flex>
    </>
  );
};

export default Sidebar;
