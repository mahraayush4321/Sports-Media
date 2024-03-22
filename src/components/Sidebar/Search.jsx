import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Tooltip,
	useDisclosure,
	Icon,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
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
				<Icon as={CiSearch} boxSize={6} onClick={onOpen} />
					<Box onClick={onOpen} display={{ base: "none", md: "block" }}>Search</Box>
				</Flex>
			</Tooltip>
			<Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInLeft'>
				<ModalOverlay />
				<ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
					<ModalHeader>Search With Pin Code</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
							<FormControl>
								<FormLabel>Pin Code</FormLabel>
								<Input placeholder='Enter The Pin Code' />
							</FormControl>

							<Flex w={"full"} justifyContent={"flex-end"}>
								<Button type='submit' ml={"auto"} size={"sm"} my={4}>
									Search
								</Button>
							</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default Search;
