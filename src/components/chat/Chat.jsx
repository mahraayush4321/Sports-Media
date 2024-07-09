import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Box, Button, Flex, Input, VStack, Text } from '@chakra-ui/react';

const Chat = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const socket = io('https://s1backend1.onrender.com');

  const loadMessagesFromStorage = () => {
    const storedMessages = localStorage.getItem('chatMessages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  };

  const loadNameFromStorage = () => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setName(storedName);
    } else {
      const userName = prompt('Enter your name:');
      setName(userName);
      localStorage.setItem('userName', userName);
    }
  };

  useEffect(() => {

    loadNameFromStorage();

    loadMessagesFromStorage();

    socket.on('receiveMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);

      saveMessagesToStorage([...messages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const saveMessagesToStorage = (messages) => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const messageObject = { name, text: message };
      socket.emit('sendMessage', messageObject);
      setMessage('');

      saveMessagesToStorage([...messages, message]);
    }
  };

  return (
    <Box>
      <VStack
        spacing="4"
        border="1px"
        borderColor="gray.200"
        borderRadius="md"
        p="4"
        height="300px"
        overflowY="scroll"
        align="start" 
        mb="4"
        _hover={{
          borderColor: 'blue.500',
          boxShadow: '0 0 10px rgba(0, 0, 255, 0.5)',
        }}
        bg="gray.900"
      >
        {messages.map((msg, index) => (
          <Text key={index} fontSize="md" fontFamily="Italic sans-serif" color="white">
            <strong>{msg.name}:</strong> {msg.text}
          </Text>
        ))}
      </VStack>
      <form onSubmit={sendMessage}>
        <Flex>
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            mr="2"
          />
          <Button type="submit" colorScheme="teal">Send</Button>
        </Flex>
      </form>
    </Box>
  );
};

export default Chat;
