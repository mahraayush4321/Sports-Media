import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormLabel, FormControl, Input, Button, Box, Flex, VStack, Image} from "@chakra-ui/react";
import Auth from '../../assets/auth.png';

const SignupForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/v1/users', {
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password
        }),
      });
      const responseData = await response.json();
      if (response.ok) {
        console.log('User created successfully:', responseData);
        window.location.href = '/login'
        // setFirstName('');
        // setLastName('');
        // setEmail('');
        // setPassword('');
      }else {
        console.error('Failed to create user:', responseData);
       
      }
    } catch (error) {
      console.error('Error:', error);
    }
    console.log({
      firstName,
      lastName,
      email,
      password
    });
  };

  return (
    <Flex  >
    <Box p="2" borderWidth="0px" borderRadius="lg" mt={-3} boxShadow="md" w="max-content">
      <Flex >
        <Image src={Auth} alt="Login Image" boxSize="100px" mr={10} w="46rem" h="90vh" borderLeftRadius={5} display={{base:"none", md:"inherit"}} />
        <VStack align="stretch" spacing="8" mt={6} maxW="lg" borderColor="blue" rounded="lg" p={{base:"6", md:"8"}}>
    <Box w="20rem" rounded="lg" ml={{base:"-10px", md:"5rem"}} p={2}>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel htmlFor="firstName">First Name</FormLabel>
          <Input
            id="firstName"
            type="text"
            placeholder="Your first name"
            value={firstName}
            onChange={handleFirstNameChange}
            borderColor="white"
            required
            />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel htmlFor="lastName">Last Name</FormLabel>
          <Input
            id="lastName"
            type="text"
            placeholder="Your last name"
            value={lastName}
            borderColor="white"
            onChange={handleLastNameChange}
            required
            />
        </FormControl>
        <FormControl mb={4}>
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
        <FormControl mb={6}>
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
        <Button colorScheme="blue" type="submit" width={"80%"}>
          Submit
        </Button>
      </form>
      <Box mt={6} textAlign="center">
        <p>Already have an account? </p>
        <Link to='/login' style={{ color: 'teal' }}>
          Login here
        </Link>
      </Box>
    </Box>
  </VStack>
              </Flex>
            </Box>
          </Flex>
  );
};

export default SignupForm;