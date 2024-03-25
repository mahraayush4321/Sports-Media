// import React from 'react';
import { Box, Flex, Input, Button, Image, Container } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Box top={0} left={0} right={0} zIndex={-2} boxShadow="md">
    <Container maxW={"100%"}>

    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="0.5rem"
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
      <Link to="/login">
      <Button colorScheme="white" variant="outline">
        Login
      </Button>
      </Link>
    </Flex>
    </Container>
        </Box>
  );
};

export default Nav;
