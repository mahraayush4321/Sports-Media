// import React from 'react';
import { Box, Flex, Input, Button, Image, Container } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Container maxW={"100%"}>

    <Flex
      as="nav"
      align="center"
      justify="space-between"
      // padding="1rem"
      // mt={-5}
      // bg="gray.900"
      borderRadius={10}
      color="white"
    >
      {/* Logo */}
      <Box>
        <Image src="/logo.png" alt="Logo" boxSize="50px" mr={12} />
      </Box>

      {/* Search Input */}
      <Input
        type="text"
        placeholder="Search..."
        variant="filled"
        size="md"
        maxWidth="300px"
        mr="2"
      />

      {/* Login Button */}
      <Link to="/register">
      <Button colorScheme="white" variant="outline">
        Login
      </Button>
      </Link>
    </Flex>
    </Container>
  );
};

export default Nav;
