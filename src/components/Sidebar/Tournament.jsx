import { Box, Flex, Tooltip, Icon } from "@chakra-ui/react";
import { TbTournament } from "react-icons/tb";
import { Link } from "react-router-dom";

const Tournament = () => {
	return (
		<Link to="/tournament">
		<Tooltip
			hasArrow
			label={"Notifications"}
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
					
				<Icon as={TbTournament} boxSize={6} />
				<Box display={{ base: "none", md: "block" }}>Tournament</Box>
			</Flex>
		</Tooltip>
				</Link>
	);
};

export default Tournament;
