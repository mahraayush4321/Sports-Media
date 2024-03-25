import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormLabel, FormControl, Input, Button, Box, Center} from "@chakra-ui/react";
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
    <Center h="90vh">
        <Box maxW="lg" bg="gray.600" rounded="lg" p={10}>

    <Box maxW="md" bg="gray.800" rounded="lg" p={6}>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel htmlFor="firstName">First Name</FormLabel>
          <Input
            id="firstName"
            type="text"
            placeholder="Your first name"
            value={firstName}
            onChange={handleFirstNameChange}
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
        <Button colorScheme="blue" type="submit">
          Submit
        </Button>
      </form>
      <Box mt={4} textAlign="center">
        <p>Already have an account? </p>
        <Link to='/login' style={{ color: 'teal' }}>
          Login here
        </Link>
      </Box>
    </Box>
            </Box>
  </Center>
  );
};

export default SignupForm;