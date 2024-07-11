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
import { Link } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const Nav = ({ setPosts }) => {
  const navigate = useNavigate();
  const [pincode, setPincode] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token"); 
    if (token) {
      setIsLogin(true);
    }
  }, []);

  const handleLogout = () => {
    try {
      navigate("/login");
      alert("Are You Sure To Logout");
      localStorage.clear();
      setIsLogin(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async () => {
    console.log("Search button clicked");
    console.log("Pincode:", pincode);
    try {
      const responseData = await fetch(
        `https://s1backend1.onrender.com/api/v1/bypin?pincode=${pincode}`
      );
      console.log("Response status:", responseData.status);
      if (responseData.ok) {
        const Responsedata = await responseData.json();
        console.log("Fetched posts:", Responsedata.data.getPosts);
        setPosts(Responsedata.data.getPosts);
      } else {
        console.error("Failed to fetch posts");
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <Box position="fixed" top={0} left={0} right={0} zIndex={99} boxShadow="md">
      <Container maxW={"100%"}>
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          padding="0.5rem"
          bg="gray.900"
          borderRadius={10}
          color="white"
        >
          {/* Logo */}
          <Link to="/">
            <Box>
              <Image src="/logo2.png" alt="Logo" boxSize="50px" mr={12} />
            </Box>
          </Link>

          {/* Search Input */}
          <Flex gap={{ base: "5", lg: "35rem" }}>
            <InputGroup>
              <Input
                type="text"
                placeholder="Pin Code ..."
                variant="filled"
                size="md"
                maxWidth="300px"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />

              <InputRightAddon p={0}>
                <Button
                  borderLeftRadius={0}
                  borderRightRadius={3.3}
                  onClick={handleSearch}
                >
                  <Icon as={Search2Icon} boxSize={4} />
                </Button>
              </InputRightAddon>
            </InputGroup>

            {/* Login Button */}
            {isLogin ? (
              <Button
                onClick={handleLogout}
                colorScheme="white"
                paddingStart={5}
                paddingEnd={5}
                variant="outline"
              >
                Logout
              </Button>
            ) : (
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
