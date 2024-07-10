import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  VStack,
  Textarea,
  // useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalFooter,
} from "@chakra-ui/react";
// import EditProfile from "./EditProfile";
import Auth from "../../assets/auth.png";
import { useState } from 'react';


const ProfileHeader = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar src={Auth} alt="As a programmer logo" />
      </AvatarGroup>
      <VStack alignItems={"start"} spacing={2} mx="auto" flex={1}>
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
          w={"full"}
        >
          <Text fontSize={{ base: "sm", md: "lg" }}>User Name</Text>

          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button
              bg={"white"}
              color={"black"}
              _hover={{ bg: "whiteAlpha.800" }}
              size={{ base: "xs", md: "sm" }}
              onClick={openPopup}
            >
              Edit Profile
            </Button>
          </Flex>
        </Flex>

        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              69
            </Text>
            Posts
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            xyz@gmail.com
          </Text>
        </Flex>
        <Text fontSize={"sm"}>Bio About the USER</Text>
      </VStack>
      {/* {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />} */}
      <Modal isOpen={isPopupOpen} onClose={closePopup}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Profile</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Text mb='3'>Profile Photo</Text>
                      <input type="file" id="img" name="img" accept="image/*" />
                    <Text mb="3" mt="5">Name</Text>
                        <input
                            type="text"
                            style={{ backgroundColor: 'white',width: '100%', color: 'black', padding: '8px', borderRadius: '4px' }}
                        />
                        <Text mt="5" mb="3" >Bio</Text>
                        <Textarea
                        style={{ backgroundColor: 'white',width: '100%', color: 'black', padding: '8px', borderRadius: '4px',  fontFamily: 'Arial, sans-serif', fontSize: '14px' }}
                         placeholder='Edit Your Bio' />
                    </ModalBody>

                    <ModalFooter>
                        <Button type="submit" colorScheme="blue" mr={3} >Update</Button>
                        <Button colorScheme="red" >Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
    </Flex>
  );
};

export default ProfileHeader;

