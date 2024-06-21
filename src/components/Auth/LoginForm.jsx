import { useState } from "react";
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Flex,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Auth from "../../assets/auth.png";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://s1backend1.onrender.com/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const responseData = await response.json();
      console.log("Response Data:", responseData);
      if (response.ok) {
        console.log("user logged in successfully:", responseData);
        localStorage.setItem("token", responseData.data.token);
        setIsVerified(true);
        //  window.location.href = '/'
      } else {
        console.error("User login failed:", responseData);
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later.");
    }
    console.log({
      email,
      password,
    });
  };

  if (isVerified) {
    return (window.location.href = "/home");
  }

  return (
    <Flex>
      <Box
        p={{ base: "none", md: "2" }}
        m={'auto'}
        borderWidth="0px"
        borderRadius="lg"
        mt={-3}
        boxShadow="md"
        w="max-content"
      >
        <Flex>
          <Image
            src={Auth}
            alt="Login Image"
            boxSize="100px"
            mr={10}
            w="46rem"
            h="90vh"
            borderLeftRadius={5}
            display={{ base: "none", md: "inherit" }}
          />
          <VStack
            align="stretch"
            spacing="8"
            mt={6}
            maxW="lg"
            borderColor="blue"
            rounded="lg"
            p={{ base: "6", md: "8" }}
          >
            <Box
              w="20rem"
              rounded="lg"
              ml={{ base: "-30px", md: "5rem" }}
              p={2}
            >
              <form onSubmit={handleSubmit}>
                <FormControl mb={8}>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={handleEmailChange}
                    borderColor="white"
                    required
                  />
                </FormControl>
                <FormControl mb={8}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Your password"
                    value={password}
                    onChange={handlePasswordChange}
                    borderColor="white"
                    required
                  />
                </FormControl>
                {error && (
                  <p color="red.500" fontSize="xs" fontStyle="italic">
                    {error}
                  </p>
                )}
                <Button colorScheme="blue" w={"80%"} type="submit">
                  Login
                </Button>
              </form>
              <Box mt={6} ml={{ base: "0", md: "1rem" }} textAlign="center">
                <p>Not have an account? </p>
                <Link to="/register" style={{ color: "teal" }}>
                  Register here
                </Link>
              </Box>
            </Box>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              ml={{ base: "-30px", md: "6rem" }}
              my={2}
              gap={1}
              maxW="sm"
            >
              <Box flex={2} h={"1px"} bg={"gray.400"} />
              <Text mx={1} color={"white"}>
                OR
              </Text>
              <Box flex={2} h={"1px"} bg={"gray.400"} />
            </Flex>
            <Button
              leftIcon={<FaGoogle />}
              colorScheme="red"
              maxW="sm"
              ml={{ base: "-30px", md: "7rem" }}
              variant="outline"
            >
              Login with Google
            </Button>
          </VStack>
        </Flex>
      </Box>
    </Flex>
  );
};

export default LoginForm;
