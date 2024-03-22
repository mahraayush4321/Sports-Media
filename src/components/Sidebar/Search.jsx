import { Box, Flex, Tooltip, Icon } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
	return (
		<>
			<Tooltip
				hasArrow
				label={"Search"}
				placement='right'
				ml={1}
				openDelay={500}
				display={{ base: "block", md: "none" }}
			>
				<Flex
					alignItems={"center"}
					gap={4}
					_hover={{ bg: "whiteAlpha.400" }}
					borderRadius={6}
					p={5}
					w={{ base: 10, md: "full" }}
					justifyContent={{ base: "center", md: "flex-start" }}
				>
				<Icon as={CiSearch} boxSize={6} />
					<Box display={{ base: "none", md: "block" }}>Search</Box>
				</Flex>
			</Tooltip>
		</>
	);
};

export default Search;
