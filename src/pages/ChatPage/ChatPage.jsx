import React, { useEffect, useState } from 'react';
import { Flex, Box, Heading, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure, Button } from '@chakra-ui/react';
import Sidebar from "../../components/Sidebar/Sidebar";
import Nav from "../../components/Navbar/Nav";
import Chat from '../../components/chat/Chat';

const ChatPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedChatPage');
    if (!hasVisited) {
      onOpen();
      localStorage.setItem('hasVisitedChatPage', 'true');
    }
  }, [onOpen]);

  return (
    <>
      <Nav />
      <Sidebar />
      <Flex direction="column" alignItems="center">
        <Heading size="md" mb="4">Global Chat</Heading>
        <Box bg="grey.500" p="4" borderRadius="md" maxW="900px" w="100%">
          <Chat />
        </Box>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Welcome to the Global Chat</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Welcome to the global chat! Feel free to join the conversation and connect with others.</p>
            <Button mt={4} colorScheme="blue" onClick={onClose}>Close</Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ChatPage;
