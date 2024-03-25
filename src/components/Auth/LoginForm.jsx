import { useState } from 'react';
import { FormLabel, FormControl, Input, Button, Box, Center } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                email,
                password
            }),
        });
        const responseData = await response.json();
        if(response.ok) {
            console.log('user logged in successfully:', responseData);
            window.location.href ='/'
        }else {
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

  return (
    <Center h="90vh">
        <Box maxW="lg" bg="gray.600" rounded="lg" p={10}>

    <Box maxW="md" bg="gray.800" rounded="lg" p={6}>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={handleEmailChange}
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
            />
        </FormControl>
        {error && <p color="red.500" fontSize="xs" fontStyle="italic">{error}</p>}
        <Link to="/">
        <Button colorScheme="blue" type="submit">
          Login
        </Button>
        </Link>
      </form>
      <Box mt={4} textAlign="center">
        <p>Not have an account? </p>
        <Link to='/register' style={{ color: 'teal' }}>
          Register here
        </Link>
      </Box>
    </Box>
            </Box>
  </Center>
  );
};

export default LoginForm;