import { useState } from 'react';
import { FormLabel, FormControl, Input, Button, Box, Flex, VStack, Image, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
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
      const response = await fetch('http://localhost:3001/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password
        }),
      });
      const responseData = await response.json();
      console.log('Response Data:', responseData);
      if (response.ok) {
        console.log('user logged in successfully:', responseData);
         localStorage.setItem('token', responseData.data.token);
         setIsVerified(true);
        //  window.location.href = '/'
      } else {
        console.error('User login failed:', responseData);
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    }
    console.log({
      email,
      password
    })
  };
  
  if(isVerified) {
    return window.location.href = '/'
  }

  return (
    <Flex align="center" justify="center" minH="90vh">
      <Box p="8 " borderWidth="1px" borderRadius="lg" boxShadow="md">
        <Flex align="center" justify="space-between">
          <Image src="/auth.png" alt="Login Image" boxSize="200px" w="25rem" h="35rem" mr="1" display={{base:"none", md:"inherit"}} />
          <VStack align="stretch" spacing="8" ml={{base:"auto",md:"40"}} mr={{base:"auto",md:"20"}}  bg="gray.900" maxW="md" borderColor="blue" rounded="lg" p={10}>
        <Box>
          <form onSubmit={handleSubmit}>
            <FormControl mb={4}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="Your email"
                value={email}
                onChange={handleEmailChange}
                required
                />
            </FormControl>
            <FormControl mb={6}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                type="password"
                placeholder="Your password"
                value={password}
                onChange={handlePasswordChange}
                required
                />
            </FormControl>
            {error && <p color="red.500" fontSize="xs" fontStyle="italic">{error}</p>}
              <Button colorScheme="blue" w={"80%"} type="submit">
                Login
              </Button>
          </form>
          <Box mt={4} textAlign="center">
            <p>Not have an account? </p>
            <Link to='/register' style={{ color: 'teal' }}>
              Register here
            </Link>
          </Box>
        </Box>
        <Flex alignItems={"center"} justifyContent={"center"} my={1} gap={1} w={"full"}>
						<Box flex={2} h={"1px"} bg={"gray.400"} />
						<Text mx={1} color={"white"}>
							OR
						</Text>
						<Box flex={2} h={"1px"} bg={"gray.400"} />
					</Flex>
    <Button leftIcon={<FaGoogle />} colorScheme="red" size="md" variant="outline">
              Login with Google
            </Button>
                </VStack>
              </Flex>
            </Box>
          </Flex>
  );
};

export default LoginForm;