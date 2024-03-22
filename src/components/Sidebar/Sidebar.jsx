import { Flex } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import CreatePost from "./CreatePost";
import Home from "./Home";
import Profile from "./Profile";
import Search from "./Search";
import Tournament from "./Tournament";

const Sidebar = () => {
	return (
		<>
		<Navbar maxW={"100%"}/>
		
			{/* <Flex direction={{base:"column", md:"row"}} gap={10} w='full' height={"full"}> */}
				<Flex direction={{base:"row", md:"column", lg:"column"}} pos={{base:"fixed"}} bottom={{base:"0", md:"auto", lg:"auto"}} gap={5} cursor={"pointer"} w='200px'>
				<Home />
			<Search />
			<Tournament />
			<CreatePost />
			<Profile />
				</Flex>
			{/* </Flex> */}
		
		</>
	);
};

export default Sidebar;