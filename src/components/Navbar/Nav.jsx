// import React from 'react';
import {
  Button,
  Container,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Icon,
  Box,
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { Search2Icon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Nav = () => {
  const navigate = useNavigate();
  let isLogin = useState(false);
  const handleLogout = () => {
    try {
      navigate("/login");
      alert("Are You Sure To Logout")
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box position="fixed" top={0} left={0} right={0} zIndex={0} boxShadow="md">
    <Container maxW={"100%"}>

    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="0.5rem"
      // mt={-5}
      bg="gray.900"
      borderRadius={10}
      color="white"
      >
      {/* Logo */}
      <Link to="/">
      <Box>
        <Image src="/logo.png" alt="Logo" boxSize="50px" mr={12} />
      </Box>
      </Link>

      {/* Search Input */}
      <Flex gap={{base: "5",lg:"35rem"}}>
        <InputGroup>
      <Input
        type="text"
        placeholder="Pin Code ..."
        variant="filled"
        size="md"
        maxWidth="300px"
        />

            <InputRightAddon p={0} >
              <Button
                borderLeftRadius={0}
                borderRightRadius={3.3}
                >
               <Icon as={Search2Icon} boxSize={4} />
              </Button>
            </InputRightAddon>
          </InputGroup>

      {/* Login Button */}
      {isLogin ? (
        <Button onClick={handleLogout} colorScheme="white" paddingStart={5} paddingEnd={5} variant="outline">Logout</Button>
      ):(
      
      <Link to="/login">
      <Button colorScheme="white" variant="outline">
        Login
      </Button>
      </Link>
      )}
        </Flex>
    </Flex>
    </Container>
        </Box>
  );
};

export default Nav;
