import {
  Box,
  Button,
  Flex,
  Input,
  Textarea,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tooltip,
  useDisclosure,
  Icon,
  Select,
} from "@chakra-ui/react";
import { CiSquarePlus } from "react-icons/ci";

const CreatePost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Tooltip
        hasArrow
        label={"Create"}
        placement="right"
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
          <Icon as={CiSquarePlus} boxSize={6} onClick={onOpen}/>
          <Box onClick={onOpen} display={{ base: "none", md: "block" }}>
            Create
          </Box>
        </Flex>
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />

        <ModalContent bg={"black"} border={"1px solid gray"}>
          <ModalHeader>Create Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Input
              type="file"
              id="avatar"
              name="avatar"
              pt={1}
              accept="image/png, image/jpeg"
            />
            <Input
              placeholder="Select Date and Time"
              size="md"
              type="datetime-local"
              mt={5}
            />
            <Input placeholder="Pin Code" mt={5} />

            <Input placeholder="Title" mt={5} />

            <Textarea placeholder="Description..." mt={5} />
            <Select placeholder="Select option" mt={5}>
              <option value="option1">Cricket</option>
              <option value="option2">Volleyball</option>
              <option value="option3">Table Tennis</option>
            </Select>

            <Input type="file" hidden />
          </ModalBody>

          <ModalFooter>
            <Button mr={3}>Post</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreatePost;
