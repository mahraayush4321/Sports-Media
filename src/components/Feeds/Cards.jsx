import { Box, Flex, Image, VStack, Input, Button, Text, Divider} from "@chakra-ui/react";
import { FaGoogle } from 'react-icons/fa';

const LoginPage = () => {
  return (
    <Flex align="center" justify="center" minH="90vh">
      <Box w="80%" p="8 " borderWidth="1px" borderRadius="lg" boxShadow="md">
        <Flex align="center" justify="space-between">
          <Image src="/auth.png" alt="Login Image" boxSize="200px" w="25rem" h="35rem" mr="1" />
          <VStack align="stretch" spacing="8" mr="40">
            <Text fontSize="2xl" fontWeight="bold">Login</Text>
            <Input placeholder="Email" size="md" />
            <Input type="password" placeholder="Password" size="md" />
            <Button colorScheme="blue" size="md" mb="4">Login</Button>
            <Divider />
            <Button leftIcon={<FaGoogle />} colorScheme="red" size="md" variant="outline">
              Login with Google
            </Button>
          </VStack>
        </Flex>
      </Box>
    </Flex>
  );
};

export default LoginPage;
